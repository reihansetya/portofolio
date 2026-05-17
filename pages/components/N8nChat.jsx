import { useEffect } from "react";

export default function N8nChat() {
    useEffect(() => {
        // Load n8n chat widget script
        const link = document.createElement("link");
        link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.type = "module";
        script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'http://localhost:5678/webhook/5f299dcf-65da-4726-a15a-43e6ba2ff752/chat',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          'Halo! 👋 Saya AI Assistant dari Reihan. Ada yang bisa saya bantu?'
        ],
        i18n: {
          en: {
            title: 'ReiBot 🤖',
            subtitle: 'Tanya apa saja tentang Reihan!',
            inputPlaceholder: 'Ketik pesan...',
            getStarted: 'Mulai Chat',
            closeButtonTooltip: 'Tutup Chat',
          }
        }
      });
    `;
        document.body.appendChild(script);

        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
