import Image from "next/image";
import profile from '@/public/aws.jpeg'
export default function AboutMe() {
    return (<div className="flex-wrap p-2 m-8 bg-white rounded-lg">

        <h1 className="p-5 text-center m-5"><strong>About Me</strong></h1>

        <p className="p-5">
            Hi there, <strong>McDonald</strong> here. My journey into software programming has been both interesting and traditional. If someone had told me four years ago that I’d be tinkering with computers, I would have laughed it off.

            My interest in computer programming was sparked by boredom with routine. I was saving up funds to take accounting exams, but after three years of struggling to save enough and spending my evenings watching TV, I needed a change. I started reading about bitcoins, and although I didn't dive into Bitcoin itself, learning about blockchain technology ignited my curiosity and led me to web development. Finding out about the low to no cost of studying tech was my “aha” moment, and I took the initiative to study with freeCodeCamp.

            Fate stepped in when I enrolled in a full-time Bachelor’s degree in Software Development at Brigham Young University, all while maintaining my job as a financial accountant. Through teamwork and collaboration with other students from different parts of the world, I’m proud to say that I’m graduating in December 2024. I'm excited to see where my curiosity takes me next.

            I have immense respect for the friends and colleagues who have shaped me into the diverse programmer I am today.



        </p>
        <h3 className="text-center m-5">
          <strong>Community</strong>
        </h3>
       
        <div className="flex w-full p-5">

            <Image src={profile} width={200} height={100} alt="profile" className="w-6/12 m-1 rounded-sm"/>
            <p className="w-6/12 m-1 p-2">
                Since beginning my journey in software development, I have spent a lot of time learning solo and collaborating with other students in the USA. After the lockdown, I discovered developer meetups around Cape Town. I've taken an interest in different communities and building social coding networks. For example, during my learning of C# and .NET, I joined the <strong>CPTMSDUG </strong>group, where we share new features and advancements in C# and other microsoft products. I am also a big fan of <strong>React </strong>and i foresee a time where I contribute to the local React group.

            </p>
        </div>

    </div>)
}