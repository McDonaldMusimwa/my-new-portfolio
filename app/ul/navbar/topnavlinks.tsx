'use client'
import { useState, useEffect } from "react";
import Link from "next/link"
import {
    UserIcon,
    BriefcaseIcon,
    ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';


export default function NavLinks() {
    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        // Set initial size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

console.log(size[0])
    const links = [
        {
            path: '/',
            name: "<mcd/>",
            key: 1,
            icon: <span className="text-lg inline ">{'<mcd/>'}</span>  // No icon for home
        },
        {
            path: '/about-me',
            name: "about me",
            key: 2,
            icon: <UserIcon className="h-6 w-6 inline " />
        },
        {
            path: '/projects',
            name: 'projects',
            key: 3,
            icon: <BriefcaseIcon className="h-6 w-6 inline " />
        },
        {
            path: '/contact-me',
            name: 'contact me',
            key: 4,
            icon: <ChatBubbleOvalLeftIcon className="h-6 w-6 inline " />
        }
    ];
    return (
        <ul className="flex-row h-6 text-center">


            {links.map(link => {
                return (<li className="inline m-2 hover:bg-gray-200 rounded-xl text-lg p-2" key={link.key}><Link href={link.path} >
                  {size[0] > 768 ? link.name : link.icon}
                </Link></li>)
            })}


        </ul>

    )
}