'use client';

import Linkedin from "@/public/Link.png";
import Youtube from "@/public/youtube.webp";
import Git from "@/public/github.png";
import Image from "next/image";
import styles from "./Contact.module.css";
import arrow from "@/public/arrow.png";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "../ul/contact/contact";



export default function ContactMe() {


  return (
    <div className="p-6 rounded-lg text-sm shadow-lg w-full md:w-3/4 mx-auto">
      <ul className="m-10 p-4 flex sm:flex-row sm:space-x-4 lg:grid lg:grid-cols-3 text-center lg:mb-0 lg:w-full lg:max-w-5xl">
        <li className={`inline px-5 py-4 ${styles.socials}`}>
          <Link href="https://www.linkedin.com/in/mcdonaldmusimwa" target="_blank" rel="noopener noreferrer">
            <Image src={Linkedin} width={40} height={40} alt="Linkedin" />
          </Link>
        </li>
        <li className={`inline px-5 py-4 ${styles.socials}`}>
          <Link href="https://github.com/McDonaldMusimwa" target="_blank" rel="noopener noreferrer">
            <Image src={Git} width={40} height={40} alt="GitHub" />
          </Link>
        </li>
        <li className={`inline px-5 py-4 ${styles.socials}`}>
          <Link href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig" target="_blank" rel="noopener noreferrer">
            <Image src={Youtube} width={40} height={40} alt="YouTube" />
          </Link>
        </li>
      </ul>
      <ContactForm />
    </div>
  );
}
