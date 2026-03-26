"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

// import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
// import { sendEmail } from "@/email/send-email";
import { FaPaperPlane } from "react-icons/fa";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend("re_38ne9hCA_MrpGPJd1cQibupYPmK8z14PQ");

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [loading, setLoading] = useState<boolean>(false);
  // const [email, setEmail] = useState<string>("");
  // const [message, setMessage] = useState<string>("");

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   const formData: any = {
  //     sendEmail: email,
  //     message: message,
  //   };
  //   setLoading(true);
  //   // const { data, error } = await sendEmail({
  //   //   sendEmail: email,
  //   //   message: message,
  //   // });
  //   let data;
  //   try {
  //     data = await resend.emails.send({
  //       from: "Contact Form <onboarding@resend.dev>",
  //       to: process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL,
  //       subject: "Message from contact form",
  //       reply_to: email,
  //       react: React.createElement(ContactFormEmail, {
  //         message: message,
  //         senderEmail: email,
  //       }),
  //     });
  //     toast.success("Email sent successfully!");
  //   } catch (err: unknown) {
  //     let error = getErrorMessage(err);
  //     toast.error(error);
  //     setLoading(false);
  //     return;
  //   }

  //   // if (error) {
  //   //   toast.error(error);
  //   //   setLoading(false);
  //   //   return;
  //   // }
  //   // setLoading(false);
  //   // toast.success("Email sent successfully!");

  //   // // console.log("for", formData);
  // };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        You can also contact me directly at{" "}
        <a className="underline" href="mailto:olalekanrahman06@gmail.com">
          abdulazeezakindolapo@gmail.com
        </a>{" "}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action="https://formspree.io/f/mdaporpd"
        method="POST"
        // onSubmit={handleSubmit}
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }

        //   toast.success("Email sent successfully!");
        // }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          // onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex items-center justify-center self-center">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            // disabled={loading}
            // onClick={handleSubmit}
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Submit <FaPaperPlane />{" "}
              </>
            )}
          </button>
        </div>
      </form>
    </motion.section>
  );
}
