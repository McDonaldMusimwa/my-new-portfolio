import ProjectItem from "../ul/projects/project";
import pic from '../../public/placeholder.png'
//import data from '../lib/data.json'
export default async function Projects() {

    const data = [
        {
            key:1,
            live:"https://stockify.heromarket.co.za/",
            sourcecode:"https://github.com/McDonaldMusimwa/InventorySystemTypescript",
            name: "Stock Management Application",
            description: "A stock management application that uses the FIFO (First In, First Out) method to manage inventory. The application helps businesses keep track of stock levels, manage orders, and ensure efficient inventory turnover.",
            build_process: "The application is built using ASP.NET Core for the backend and React for the frontend. It uses Entity Framework for database interactions and implements a RESTful API to handle inventory operations.",
            image: pic,
            tech:[
                "Next Js","Mongo DB","Figma","Visual Studio Code"
            ]
        },
        {
            key:2,
            live:"https://fashionoza.netlify.app/",
            sourcecode:"https://github.com/McDonaldMusimwa/Ecommerce-shop",
            name: "Invoice Mobile Application",
            description: "A mobile application designed for creating and managing invoices. The application allows users to create invoices on the go, manage clients, and track payment statuses.",
            build_process: "The application is developed using Flutter for a cross-platform mobile experience. Firebase is used for authentication and real-time database management. The app integrates with various payment gateways to facilitate online payments.",
            image: pic,
            tech:["React Native","Firebase","Behance"]
        }
    ]
    
    return (<div className="flex-wrap p-2 m-8 bg-white rounded-lg">
        <h2 className="text-center"><strong>Project Experience</strong></h2>
        <>
            {data.map(project => {
              return( <ProjectItem project={project} />)
            })}
        </>
    </div>)
}