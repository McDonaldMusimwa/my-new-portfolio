'use client';
import styles from "@/app/contact-me/Contact.module.css"
import Image from "next/image";
import arrow from "@/public/arrow.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const serviceId:any = process.env.NEXT_PUBLIC_SERVICEID;
const templateId:any = process.env.NEXT_PUBLIC_TEMPLATEID;
const publicKey:any = process.env.NEXT_PUBLICKEY;

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (!email) {
      setError("Please enter email");
      return;
    }
    if (!message) {
      setError("Please enter message");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    setError("");
    setIsLoading(true);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setIsLoading(false);
          setSuccess("Your message has been sent. McDonald will be in touch shortly.");
        },
        (error) => {
          setIsLoading(false);
          setError("Some error occurred, try again.Or contact McDonald via Linkedin");
          console.error(error);
        }
      );
  };

  return (
    <>
      <form ref={form} className={`${styles.form} w-full`} onSubmit={sendEmail}>
        <h2>Any Work?</h2>

        <input
          type="text"
          name="name"
          id="clientName"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          id="clientEmail"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          name="message"
          id="clientText"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className={styles.ContactButton} type="submit">
          {loading ? "Sending..." : "Send Message"}
          <Image src={arrow} width={20} height={20} alt="arrow" />
        </button>
      </form>

      {error && <p className="text-red-500 font-bold">{error}</p>}
      {success && <p className="text-green-500 font-bold">{success}</p>}
    </>
  );
};

export default ContactForm;
