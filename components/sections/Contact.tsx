import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mx-12 h-3/4 w-3/4 rounded-lg bg-slate-200 p-4 shadow-2xl">
      <h1 className="animate-pulse text-5xl font-semibold italic">
        Say Hello!
      </h1>
      <hr className="my-4 border-t-2 border-slate-500" />
      <div className="mt-2 grid grid-cols-2 place-content-start place-items-center">
        <div className="flex h-full flex-col">
          <span className="text-xl font-light">
            Have a question or want to work together? I&apos;d love to hear
            from you!
          </span>
          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaEnvelope />
            <h2>mackycalabia@gmail.com</h2>
          </span>

          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaLinkedin />
            <h2>https://www.linkedin.com/in/mackrislan-calabia-mcee/</h2>
          </span>

          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaGithub />
            <h2>https://github.com/xcutiepatootie</h2>
          </span>
        </div>
        <div className="flex h-full flex-col">
          <span className="text-xl font-light">
            Reach out for any inquiries or just to share a cup of coffee.
          </span>

          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaFacebook />
            <h2>https://www.facebook.com/mcee.xoxo/</h2>
          </span>
          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaInstagram />
            <h2>https://www.instagram.com/mceexoxo_/</h2>
          </span>
          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaXTwitter />
            <h2>https://x.com/cutiemacky0_0</h2>
          </span>
          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaDiscord />
            <h2>_qtpa2t</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
