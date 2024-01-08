import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Contact.scss";

type IFormInputs = {
  fullname: string;
  mail: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("fullname", { required: "Full Name is required" })}
        placeholder="Full Name"
      />
      {errors.fullname && <p role="alert">{errors?.fullname?.message}</p>}

      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
        placeholder="Email"
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}

      <textarea
        {...register("message", { required: "Message is required" })}
        aria-invalid={errors.message ? "true" : "false"}
        placeholder="Message"
      />
      {errors.message && <p role="alert">{errors?.message?.message}</p>}
      <input type="submit" />
    </form>
  );
}
