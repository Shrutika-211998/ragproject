import React from 'react';
import { FaTelegram, FaFacebook, FaWhatsapp, FaInstagram, FaDiscord } from 'react-icons/fa';

const SocialIntegration = () => {
  const socialLinks = [
    { icon: FaTelegram, name: 'Telegram', link: '#', color: 'hover:text-blue-400' },
    { icon: FaFacebook, name: 'Facebook', link: '#', color: 'hover:text-blue-500' },
    { icon: FaWhatsapp, name: 'WhatsApp', link: '#', color: 'hover:text-green-500' },
    { icon: FaInstagram, name: 'Instagram', link: '#', color: 'hover:text-pink-500' },
    { icon: FaDiscord, name: 'Discord', link: '#', color: 'hover:text-indigo-400' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {socialLinks.map(({ icon: Icon, name, link, color }) => (
        <a
          key={name}
          href={link}
          className={`flex flex-col items-center space-y-2 text-gray-400 ${color} transition duration-200`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="text-3xl" />
          <span className="text-sm">{name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIntegration;