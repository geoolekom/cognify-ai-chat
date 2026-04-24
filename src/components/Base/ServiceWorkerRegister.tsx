'use client';
import { useEffect } from 'react';

export function ServiceWorkerRegister() {
    useEffect(() => {
        if (!navigator.serviceWorker) {
            return;
        }
        console.log('Registering service worker...');
        navigator.serviceWorker.register('/sw.js').catch((err) => console.error('SW registration failed', err));
    }, []);
    return null;
}
