import Link from "next/link";
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
    <div className="mx-6 h-3/4 w-full rounded-lg bg-slate-200 p-4 shadow-2xl">
      <h1 className="animate-pulse text-5xl font-semibold italic">
        Say Hello!
      </h1>
      <hr className="my-4 border-t-2 border-slate-500" />
      <div className="flex flex-col gap-2 md:mt-2 lg:grid lg:grid-cols-2 lg:place-content-start lg:place-items-center">
        <div className="flex h-full flex-col flex-wrap">
          <span className="text-xl font-light">
            Have a question or want to work together? I&apos;d love to hear from
            you!
          </span>
          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaEnvelope />
            <Link href={"mailto:mackycalabia@gmail.com"}>
              <h2>mackycalabia@gmail.com</h2>
            </Link>
          </span>

          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaLinkedin />
            <Link href={"https://www.linkedin.com/in/mackrislan-calabia-mcee/"}>
              <h2>https://www.linkedin.com/in/mackrislan-calabia-mcee/</h2>
            </Link>
          </span>

          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaGithub />
            <Link href={"https://github.com/xcutiepatootie"}>
              <h2>https://github.com/xcutiepatootie</h2>
            </Link>
          </span>
        </div>
        <div className="flex h-full flex-col">
          <span className="text-xl font-light">
            Reach out for any inquiries or just to share a cup of coffee.
          </span>

          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaFacebook />
            <Link href={"https://www.facebook.com/mcee.xoxo/"}>
              <h2>https://www.facebook.com/mcee.xoxo/</h2>
            </Link>
          </span>
          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaInstagram />
            <Link href={"https://www.instagram.com/mceexoxo_/"}>
              <h2>https://www.instagram.com/mceexoxo_/</h2>
            </Link>
          </span>
          <span className="flex cursor-pointer items-center space-x-2 text-lg">
            <FaXTwitter />
            <Link href={"https://x.com/cutiemacky0_0"}>
              <h2>https://x.com/cutiemacky0_0</h2>
            </Link>
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
