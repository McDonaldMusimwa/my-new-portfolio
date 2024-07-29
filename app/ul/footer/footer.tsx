import Image from "next/image";
import profile from "@/public/profile.jpg";
import linkedin from "@/public/linkedin.png";
import twitter from "@/public/twitter.png";
import youtube from "@/public/youtube.png";
import line from "@/public/Line.png";
export default function Footer() {

    return (<div className="flex-rol p-2 bg-white text-center border-t border-t-2 border-gray-300 shadow-lg p-4">
        <p>© All rights to this website are reserved to McDonald</p> Improvise,Adapt ,Overcome

        <div className="flex justify-center">
            <a
                href="https://www.linkedin.com/in/mcdonaldmusimwa"
                title="linkedin icons"
            >
                <Image src={linkedin} width={20} height={20} alt="linkedin icon" />
            </a>
            <a href="https://twitter.com/Mcdonal70309191" title="linkedin icons">
                <Image src={twitter} width={20} height={20} alt="twitter icon" />
            </a>
            <a
                href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig"
                title="youtube icons"
            >
                <Image src={youtube} width={20} height={20} alt="youtube icon" />
            </a>
            
        </div>
    </div>
  )
}