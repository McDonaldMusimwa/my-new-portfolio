
import Link from "next/link"

export default function NavLinks() {
    const links = [
        {
            path: '/',
            name: "mcd",
            key: 1
        },
        {
            path: '/about-me',
            name: "about me",
            key: 2
        },
        {
            path: '/projects',
            name: 'projects',
            key: 3
        },
        {
            path: "contact-me",
            name: 'contact me',
            key: 4
        }
    ]
    return (
        <ul className="justify-between flex-row h-6 justify-between">
            {links.map(link => {
                return (<li className="p-1 inline m-1 hover:bg-sky-700" key={link.key}><Link href={link.path} >{link.name}</Link></li>)
            })}

           
        </ul>

    )
}