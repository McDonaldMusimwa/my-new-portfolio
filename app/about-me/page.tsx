import profile from '@/public/aws.jpeg'
import skills from "@/app/lib/skills.json";
import htmlicon from "@/public/html.svg"
import mongodb from "@/public/mongo.svg";
import git from "@/public/git.svg";
import tailwindcss from "@/public/tailwindcssicon.svg"
import cssicon from "@/public/css.svg"
import javascript from "@/public/javascript.svg"
import typescript from "@/public/typescript.svg"
import dotnet from "@/public/dotnet.svg"
import csharp from "@/public/c-sharp.svg"
import sql from "@/public/sql.svg"
import react from "@/public/react.svg"
import nextjs from "@/public/next.svg"
import python from "@/public/python.svg"
import Image from "next/image";
export default function AboutMe() {
    return (<div className="p-6 m-6 rounded-lg text-sm shadow-lg w-full md:w-3/4 mx-auto">

        <div className="flex flex-col m-1 rounded-lg bg-white p-4 shadow-md w-full">
            <h1 className="text-center"><strong>About Me</strong></h1>
            <hr />
            <p className="p-1 text-left">
                Hi there, <strong>McDonald</strong> here. My journey into software programming has been both interesting and traditional. If someone had told me four years ago that I’d be tinkering with computers, I would have laughed it off.

                My interest in computer programming was sparked by boredom with routine. I was saving up funds to take accounting exams, but after three years of struggling to save enough and spending my evenings watching TV, I needed a change. I started reading about bitcoins, and although I didn't dive into Bitcoin itself, learning about blockchain technology ignited my curiosity and led me to web development. Finding out about the low to no cost of studying tech was my “aha” moment, and I took the initiative to study with freeCodeCamp.

                Fate stepped in when I enrolled in a full-time Bachelor’s degree in Software Development at Brigham Young University, all while maintaining my job as a financial accountant. Through teamwork and collaboration with other students from different parts of the world, I’m proud to say that I’m graduating in December 2024. I'm excited to see where my curiosity takes me next.

                I have immense respect for the friends and colleagues who have shaped me into the diverse programmer I am today.
            </p>
            <h1 className="text-center"><strong>Skills</strong></h1>
            <hr />
            <div className="flex flex-nowrap justify-center" id='skills'>
                <Image src={htmlicon} width={40} height={40} alt='html icon' className='m-2' />
                <Image src={cssicon} width={40} height={40} alt='css icon' className='m-2' />
                <Image src={javascript} width={40} height={40} alt='javascript icon' className='m-2' />
                <Image src={typescript} width={40} height={40} alt='typescript icon' className='m-2' />
                <Image src={python} width={40} height={40} alt='python icon' className='m-2' />
                <Image src={csharp} width={40} height={40} alt='csharp icon' className='m-2' />
                <Image src={sql} width={40} height={40} alt='sql icon' className='m-2' />
                <Image src={dotnet} width={40} height={40} alt='dotnet icon' className='m-2' />
                <Image src={react} width={40} height={40} alt='react icon' className='m-2' />
                <Image src={nextjs} width={40} height={40} alt='nextjs icon' className='m-2' />
                <Image src={tailwindcss} width={40} height={40} alt='tailwindcss icon' className='m-2' />
                <Image src={git} width={40} height={40} alt='git icon' className='m-2' />
                <Image src={mongodb} width={40} height={40} alt='mongodb icon' className='m-2' />
            </div>

        </div>



        <div className="w-full p-4  bg-white rounded-lg">
            <h3 className="text-center">
                <strong>Community</strong>
                <hr />
            </h3>
            <p className="p-1">
                Since beginning my journey in software development, I have spent a lot of time learning solo and collaborating with other students in the USA. After the lockdown, I discovered developer meetups around Cape Town. I've taken an interest in different communities and building social coding networks. For example, during my learning of <strong>C# </strong>and <strong>.NET</strong>, I joined the <strong>CPTMSDUG </strong>group, where we share new features and advancements in C# and other microsoft products. I am also a big fan of <strong>React </strong>and i foresee a time where I contribute to the local React group.

            </p>

        </div>

    </div>)
}