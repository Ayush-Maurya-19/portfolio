"use client";
import React, { useRef } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mra8yhm",
        "template_gwzj53k",
        form.current,
        "f0nygrtGFHF5R71F-"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 md:py-24 py-14 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
          <br />
          - ayushmaurya180@gmail.com
          <br />- 7355007915
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Ayush-Maurya-19">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          <Link href="https://www.linkedin.com/in/ayush-maurya-776a78211/">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
