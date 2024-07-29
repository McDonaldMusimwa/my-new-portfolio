import ProjectItem from "../ul/projects/project";
import pic from '../../public/placeholder.png'
import stockmanagement from '@/public/stockmanagement.jpg'
//import data from '../lib/data.json'
export default async function Projects() {

    const data = [
        {
            key: 1,
            live: "https://stockify.heromarket.co.za/",
            sourcecode: "https://github.com/McDonaldMusimwa/InventorySystemTypescript",
            name: "Stock Management Application",
            "description": "After mastering the basics and building medium-sized websites, I craved a challenge that would push my skills from design through to deployment. My background in accounting, dealing with stock costing, reconciliation, and stock-outs, sparked an idea: create a stock management application to streamline these processes. This led to the development of an experimental app that uses the FIFO (First In, First Out) method for inventory management. The application revolutionizes how businesses track stock levels, manage orders, and maintain efficient inventory turnover.",
            "build_process": "The journey began with building the application using React and Node.js, complemented by MongoDB for its flexible data storage capabilities. MongoDB's ability to embed related data made it a perfect fit. To ensure a robust schema, I utilized Mongoose. As I delved into Next.js, I decided to migrate the application to leverage its powerful features like NextAuth, seamless routing, server-side rendering, and streaming. This transition not only enhanced the app's performance but also opened new avenues for scalability and user experience.Next.js also eliminated the need for a separate server codebase. This allowed me to leverage React Server Components for seamless database interactions."
            , challenges: "I am no designer by any stretch of the imagination, so the initial web app was not aesthetically pleasing. As a result, I rebuilt the entire UI. One of the biggest challenges was developing algorithms to deduct ordered products from the relevant stock while maintaining the FIFO design. This required careful planning and testing to ensure accuracy and efficiency.Authentication was another significant challenge. I initially used a third-party package, but my implementation was flawed. Migrating to Next.js was the best decision as it is a full-fledged framework that comes with built-in authentication features.",
            image: stockmanagement,
            tech: [
                "Next Js","React Js", "Mongo DB", "Figma", "Visual Studio Code"
            ]
        },
        {
            key: 2,
            live: "https://fashionoza.netlify.app/",
            sourcecode: "https://github.com/McDonaldMusimwa/Ecommerce-shop",
            name: "Invoice Mobile Application",
            description: "A mobile application designed for creating and managing invoices. The application allows users to create invoices on the go, manage clients, and track payment statuses.",
            build_process: "The application is developed using Flutter for a cross-platform mobile experience. Firebase is used for authentication and real-time database management. The app integrates with various payment gateways to facilitate online payments.",
            image: pic,
            tech: ["React Native", "Firebase", "Behance"]
        }
    ]

    return (<div className="p-6 m-6 rounded-lg text-sm shadow-lg w-full md:w-3/4 mx-auto">
       
        <>
       
            {data.map(project => {
                return (<ProjectItem project={project} key={project.key} />)
            })}
        </>
    </div>)
}