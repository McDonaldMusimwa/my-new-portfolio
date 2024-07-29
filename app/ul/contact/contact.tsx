'use client'
import arrow from "../../assets/arrow.png";
import styles from "./Contacts.module.css";
import { useRef, useState } from "react";

import Image from "next/image";

const Contacts = () => {
    const form = useRef();
    const [active, setActive] = useState(false);

   
    return (
        <div className={styles.Contact}>
            <div className={styles.Text}>

                <span>
                    <h3>Reach Out to me</h3>
                </span>
                <p>📱 +27 67 103 3055</p>
                <p>📧 mcdonald.musimwa100@gmail.com</p>
                
            </div>
            <form >
                <h2>Any Work ?</h2>

                <input type="text" name="name" id="clientName" placeholder="Name" />

                <input
                    type="email"
                    name="clientEmail"
                    id="clientEmail"
                    placeholder="Email"
                />

                <textarea
                    name="clientText"
                    id="clientText"
                    placeholder="Message"
                ></textarea>
                <button className={styles.ContactButton} >
                    {active ? "Sending..." : " Send Message"}
                    <Image src={arrow} alt="arrow" />
                </button>
            </form>
        </div>
    );
};

export default Contacts;
