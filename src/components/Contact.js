import React, { useState, useRef } from "react";
import { set, useForm } from "react-hook-form";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ContactSvg } from "../assets/contactSvg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    emailjs
      .sendForm(
        "service_gdsg1hb",
        "template_lzzm5hm",
        form.current,
        "nJwTva7DwydKJWI8Q"
      )
      .then(
        (result) => {
          if (result?.status !== 200) {
            alert(result.error);
          }
          alert("Message has been sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );

      
  };

  return (
    <section id="contact">
      <div className="container flex flex-wrap sm:flex-nowrap mx-auto justify-center">
        <form
          name="contactForm"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full px-20 py-10 md:w-1/2 lg:w-1/3 md:px-0 font-medium"
        >
          <ContactSvg />

          <h1 className="text-3xl text-center mb-4">Contact to me</h1>

          <p className="text-center mb-4">
            I am so glad to contact with me. Please enter your information.{" "}
          </p>
          <p className="text-center mb-4">Thank you!</p>

          <div className="relative mb-6 flex justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/aye-thandar-1353a8158"
              target="_blank"
            >
              <FaLinkedinIn size={26} className="text-white" />
            </a>
            <a href="https://github.com/aye-thandar88" target="_blank">
              <FaGithub size={26} className="text-white" />
            </a>
          </div>

          <div className="relative mb-4 items-center">
            <label className="">Name</label>
            <input
              className="w-full h-10 rounded-md px-4 py-2"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
            ></input>
          </div>
          {errors.name && (
            <span className="text-red-400 font-thin mb-3">
              Please enter your name with max length 20.
            </span>
          )}
          <div className="relative mb-4 items-center">
            <label className="">Email</label>
            <input
              className="w-full h-10 rounded-md px-4 py-2"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            ></input>
          </div>
          {errors.email && (
            <span className="text-red-400 font-thin mb-3">
              Please check your email
            </span>
          )}
          <div className="relative mb-8 items-center">
            <label className="">Message</label>
            <textarea
              className="w-full h-20 rounded-md px-4 py-2"
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="relative mb-4 flex justify-center">
            <button
              className="bg-yellow-300 border-0 rounded-md text-black px-6 py-3 w-fit"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
