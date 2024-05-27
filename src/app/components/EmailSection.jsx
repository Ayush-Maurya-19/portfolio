"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("mkndankd");

  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await handleSubmit(event);
    if (result && result.succeeded) {
      setEmailSubmitted(true);
      // Reset form fields
      event.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 md:py-24 py-14 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
          <br />
          
            - ayushmaurya180@gmail.com
         
          <br />
          - 7355007915
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
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Submit
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
