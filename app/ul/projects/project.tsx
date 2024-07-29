import Image from "next/image";

export default function ProjectItem({ project }) {
    return (
        <div className="flex flex-col m-1 rounded-lg bg-white p-4 shadow-md w-full">
            <h2 className="text-center text-1xl font-bold mb-4">{project.name}</h2>
            <hr className="my-2" />
            <p className="mb-4">{project.description}</p>
            
            <h3 className="text-center text-1xl font-semibold mb-2">Build Process</h3>
            <hr className="my-2" />
            <p className="mb-4">{project.build_process}</p>
            
            <h4 className="text-center text-1lg font-medium mb-2">Challenges</h4>
            <hr className="my-2" />
            <p className="mb-4">{project.challenges}</p>
            
            <div className="flex justify-between gap-4 mb-4">
                <div className="flex-1">
                    <h4 className="text-1lg font-medium mb-2">Tech Stack</h4>
                    <hr className="my-2" />
                    <ul className="list-disc pl-5">
                        {project.tech.map((item, index) => (
                            <li key={index} className="mb-1">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <h4 className="text-1lg font-medium mb-2">Links</h4>
                    <hr className="my-2" />
                    <ul className="list-none">
                        <li className="mb-1">
                            <a href={project.live} className="text-blue-500 hover:underline">Live</a>
                        </li>
                        <li className="mb-1">
                            <a href={project.sourcecode} className="text-blue-500 hover:underline">Source Code</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <Image 
                src={project.image} 
                width={1000} 
                height={760} 
                alt={project.name} 
                className="shadow-lg rounded-lg"
            />
        </div>
    );
}
