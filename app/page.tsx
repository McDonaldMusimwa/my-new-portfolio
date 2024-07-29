import me from "@/public/hero.jpg";
import Hero from "./ul/home/home";
import Link from "next/link";
import vector from "@/public/Vector.png";
import button from "@/public/Button.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-between p-16">
      <div
        className="flex p-6 m-6 rounded-lg text-sm shadow-lg w-full md:w-3/4 mx-auto bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${me.src})`,
          height: '75vh', // Adjust this value as needed for the hero image height
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col m-1 rounded-lg p-4 w-1/2 bg-opacity-80">
          <div className="">
            <div className="text-lg ">
              My Name is <strong className="text-white">MCDONALD MUSIMWA...</strong>
            </div>
          </div>
          <>
            <div className="text-lg">
              <strong>Software Developer</strong> based in{" "}
              <strong>Cape Town</strong>
            </div>
            <div className="flex">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                Get In Touch
              </button>
            
            </div>
          </>
        </div>
        <div className="w-1/2 p-6 rounded-lg">
          {/* Additional content */}
        </div>
      </div>
    </main>
  );
}
