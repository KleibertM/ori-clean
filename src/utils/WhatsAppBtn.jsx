import iconWa from '../assets/icon-whatsapp.webp';

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/584149442141?text=Hola%20LimpiaTodo%2C%20estoy%20interesado%20en%20solicitar%20una%20consultor%C3%ADa.%20Podr%C3%ADas%20ayudarme%3F"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center w-18 h-18 p-0 m-0"
            title="Chat conmigo"
        >
            <img src={iconWa} alt="WhatsApp" className="object-cover w-full h-full" />
        </a>
    );
}