import Image from "next/image"
export default function ProjectItem({ project }) {
    return (

        <div className="flex-col m-2 rounded-sm bg-white p-5" key={project.key}>
            <h2><strong>{project.name}</strong></h2>
            <hr />
            <br></br>
            <p>{project.description}</p>
            <br></br>
            <h3><strong>Build Process</strong></h3>
            <hr />
            <br></br>
            <p>
                {project.build_process}
            </p>
            <br></br>
            <div className="flex justify-between">
                <div>
                    <h4 className="block"><strong>Tech Stack</strong></h4>

                    <hr />

                    <ul className="">
                        {project.tech.map(item => {
                            return (<li key={item[0]}>{item}</li>)
                        })}
                    </ul>
                </div>
                <div>
                    <h4 className="block"><strong>Links</strong></h4>

                    <hr />

                    <ul className="flex-ro">
                        <li><a href={project.live}>Live</a></li>
                        <li><a href={project.sourcecode}>Source Code</a></li>
                    </ul>
                </div>
            </div>
            <br></br>
            <Image src={project.image} width={1000}
                height={760} alt={project.name} className="shadow-sm rounded-sm" />
<br />
        </div>
    )
}