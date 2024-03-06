import React, { useRef, useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7kcdioh", "template_buc3pyf", form.current, {
        publicKey: "aMYkLrzXhxzj6VF3c",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          e.target.reset();
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          e.target.reset();
        }
      );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Image
        src={"/images/hero-layer.svg"}
        alt="hero layer"
        className="md:block hidden absolute top-0 right-0 z-5 w-10/12"
        width={500}
        height={500}
      />
      <Image
        src={"/images/nav-project-layer.svg"}
        alt="nav contact layer"
        className="md:hidden blcok absolute top-0 right-0 z-5 w-screen"
        width={500}
        height={500}
      />
      <div
        className="relative z-99 flex flex-col md:flex-row justify-between mt-10 z-99"
        id="contact"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="contact-text self-center mb-5 mt-5 md:mb-0"
        >
          <h1>
            Get in touch<span className="text-secondary">.</span>
          </h1>
          <p>I’m always open to discussing work or new projects.</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="mockup-code md:w-1/2 w-full"
        >
          <pre data-prefix=">">contact me</pre>
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="form-input p-5 flex flex-col gap-5 "
          >
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-secondary w-full"
              name="user_name"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="input input-bordered input-secondary w-full"
              name="user_email"
            />
            <textarea
              className="textarea textarea-secondary w-full"
              placeholder="Message"
              name="message"
            />
            {isSuccess && (
              <div
                role="alert"
                data-aos="zoom-out"
                className="alert alert-success w-full mx-auto animate-pulse"
              >
                <span>Your message has been sent!</span>
              </div>
            )}
            <div className="text-end">
              <button type="submit" className="btn btn-secondary" value="Send">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
