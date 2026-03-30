import { prisma } from './db';
import { llmRequest } from './openrouter';
import { revalidatePath } from 'next/cache';

export async function getMessages(conversationId: string) {
    return await prisma.message.findMany({
        where: { conversationId },
        orderBy: { createdAt: 'asc' },
    });
}

export async function createMessage(conversationId: string, text: string) {
    const connect = { conversation: { connect: { id: conversationId } } };
    const newMessage = await prisma.message.create({
        data: { ...connect, role: 'user', text },
    });
    const conersationHistory = await prisma.message.findMany({
        where: { conversationId },
        orderBy: { createdAt: 'asc' },
    });
    conersationHistory.push(newMessage);
    revalidatePath(`/chats/${conversationId}`);

    const openAImessages = conersationHistory.map(({ role, text }: { role: string; text: string }) => ({
        role,
        content: text,
    }));
    const aiResponse = await llmRequest(openAImessages);

    const aiMessage = await prisma.message.create({
        data: { ...connect, role: 'assistant', text: aiResponse },
    });
    revalidatePath(`/chats/${conversationId}`);
    return aiMessage;
}
