'use client'
import me from "@/public/hero_.jpg";
import Hero from "./ul/home/home";
import Link from "next/link";
import vector from "@/public/Vector.png";
import button from "@/public/Button.png";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex items-center justify-between lg:p-16 sm:py-16">
      <div
        className="flex sm:py-16 p-6 m-6 lg:rounded-lg text-sm shadow-lg w-full md:w-3/4 mx-auto bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${me.src})`,
          height: '75vh', // Adjust this value as needed for the hero image height
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col m-1 rounded-lg p-4 w-1/2 bg-opacity-80 justify-between">
          <div className="">
            <div className="sm:text-1xl ld:text-1xl hero-text">
              My Name is <strong className="text-white sm:text-2xl lg:text-6xl stroke-text">MCDONALD MUSIMWA...</strong>
            </div>
            <strong className="sm:text-2xl lg:text-4xl text-white">Software Developer</strong> based in{" "}
            <strong>Cape Town</strong>


          </div>
          <button className="bg-custom-button border-inherit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 lg:w-1/2 sm:w-full">
              <Link href={'/contact-me'}>Get In Touch</Link>
            </button>
        </div>
     
      </div>
      
    </main>
  );
}
