import React, { useEffect, useReducer, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import "./Contact.scss";

type IFormInputs = {
  fullname: string;
  email: string;
  message: string;
};

export default function ContactForm({ isDarkMode }: any) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const form = useRef<HTMLFormElement | null>(null);
  const [fields, setFields] = useReducer(
    (prev: any, next: any) => ({
      ...prev,
      ...next,
    }),
    {
      fullname: "",
      email: "",
      message: "",
    },
  );
  const { fullname, email, message } = fields;

  const onSubmit = (e: any) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      ),
      {
        loading: "Sending Mail, Please wait..",
        success: (data: any) => {
          if (data.status === 200) {
            setFields({
              fullname: "",
              email: "",
              message: "",
            });
            return `Mail sent successfully`;
          }
        },
        error: (err: any) => {
          setFields({
            fullname: "",
            email: "",
            message: "",
          });
          return `Something went wrong`;
        },
      },
      {
        position: "bottom-center",
        style: {
          backgroundColor: isDarkMode === "light" ? "#082b0b" : "#ece9e6",
          color: isDarkMode === "light" ? "#ffffff" : "#000000",
        },
      },
    );
  };



  return (
    <>
      <form ref={form} onSubmit={onSubmit}>
        {errors.fullname && <p role="alert">{errors?.fullname?.message}</p>}
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          required
          value={fullname}
          onChange={(e) => setFields({ fullname: e.target.value })}
        />

        {errors.email && <p role="alert">{errors.email.message}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setFields({ email: e.target.value })}
        />

        {errors.message && <p role="alert">{errors?.message?.message}</p>}
        <textarea
          name="message"
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setFields({ message: e.target.value })}
        />
        <input type="submit" />
      </form>
      <Toaster />
    </>
  );
}
