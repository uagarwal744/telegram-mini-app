import React from "react";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import appBanner from "../images/app-banner.jpeg";
import { motion } from "framer-motion";

const SolanaAICard = () => {
  const socialLinks = [
    {
      icon: <FaXTwitter />,
      text: "X (Twitter)",
      link: "https://twitter.com/SharpeLabs",
    },
    { icon: <FaDiscord />, text: "Discord", link: "#" },
    { icon: <FaTelegram />, text: "Telegram Channel", link: "#" },
    { icon: <IoDocumentTextOutline />, text: "Docs", link: "#" },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen flex items-start justify-center">
      <motion.div
        className="max-w-md w-full bg-[#0A0A0A] rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="p-4">
          <motion.h1
            className="text-[18px] text-[#6c6c6c] font-semibold px-2 mb-2 text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            AI-powered Crypto Super App
          </motion.h1>
          <motion.h2
            className="text-2xl font-bold mb-6 text-center text-[#c5c5c5]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Sharpe AI
          </motion.h2>

          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src={appBanner}
              alt=""
              style={{ borderRadius: "6px" }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          <motion.p
            className="text-center text-[14px] text-neutral-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Sharpe AI aims to be the de facto interaction layer for crypto,
            offering an all-in-one, AI-powered platform for DeFi management,
            trading, and market intelligence.
          </motion.p>
          <motion.p
            className="text-center text-[14px] text-neutral-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Sharpe builds specialised NLP-based large-scale language models to
            power its terminal. SharpeGPT is not one but a set of hyper-small
            LLMs built for specific use cases such as sentiment analysis,
            predicting trends, or building optimal DeFi strategies.
          </motion.p>

          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className={`flex w-full items-center ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
                whileHover={{ scale: 1.05, backgroundColor: "#1d1d1d" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-flex w-full justify-center items-center text-nowrap rounded-md bg-[#0C0C0C] px-2 py-1 text-[12px] gap-1 font-medium text-neutral-400 ring-1 ring-inset ring-neutral-400/20">
                  {link.icon} {link.text}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolanaAICard;
