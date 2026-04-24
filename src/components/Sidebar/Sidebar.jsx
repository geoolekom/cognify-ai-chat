import ConversationList from './ConversationList';
import AddButton from './AddButton';

function Sidebar({ activeConversationID }) {
    return (
        <aside className="flex flex-col md:w-32 lg:w-64 bg-gray-900 text-white p-4">
            <div>
                <AddButton />
            </div>
            <ConversationList activeConversationID={activeConversationID} />
        </aside>
    );
}

export default Sidebar;
