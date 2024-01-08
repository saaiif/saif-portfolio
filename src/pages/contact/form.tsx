import React, { useReducer, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

type IFormInputs = {
  fullname: string;
  email: string;
  message: string;
};

export default function ContactForm() {
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
  console.log(fields);
  const onSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result: any) => {
          //TODO: Add toaster or update user on success response
          console.log(result);
        },
        (error: any) => {
          console.log({ error });
        },
      );
  };

  return (
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
  );
}
