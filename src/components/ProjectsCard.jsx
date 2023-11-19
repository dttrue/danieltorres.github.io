import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ title, text, img, url, github }) => {
    return (
        <article className=' bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
            <img src={img} alt={title} className="h-64 w-full object-cover rounded-t-lg" />
            <div className=" capitalize p-8">
            <h2 className="mt-6 text-2xl font-bold">{title}</h2>
            <p className="mt-4 text-slate-700 leading-loose">{text}</p>
            <div className="flex gap-x-4 mt-4">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <TbWorldWww className="h-8 w-8 text-slate-500 text-5xl hover:text-black duration-300"/>
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare className="h-8 w-8 text-slate-500 text-5xl hover:text-black duration-300"/>
                </a>
            </div>
            </div>
            
        </article>
    )
}  

export default ProjectsCard