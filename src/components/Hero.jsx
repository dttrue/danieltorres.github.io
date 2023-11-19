import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
    return(
        <div className="bg-cyan-100 py-24">
            <div className="align-element grid md:grid-cols-2 gap-8 items-center">
                <article>
                <h1 className="text-7 xl font-bold tracking-wider">Hi, my name is Daniel
                </h1>
                <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">Front-end Developer</p>
                <p className="mt-2 text-3xl text-slate-700 capitalize tracking-wide">turning ideas into interactive reality</p>
                <p className="mt-2 text-3xl text-slate-700 capitalize tracking-wide">I design and code beautifully simple things, and I love what I do.</p>
                <div className="flex gap-z-4 mt-4">
                    <a href="#">
                        <FaGithubSquare className="h-8 w-8 text-slate-500 text-5xl hover:text-black duration-300"/>
                    </a>
                    <a href="#">
                        <FaLinkedin className="h-8 w-8 text-slate-500 text-5xl hover:text-black duration-300"/>
                    </a>
                    <a href="#">
                        <FaTwitterSquare className="h-8 w-8 text-slate-500 text-5xl hover:text-black duration-300"/>
                    </a>
                    </div> 
                </article>
                <article className="hidden md:block">
                    <img src={heroImg} alt="heroImg" className='h-80 lg:h-96'/>
                </article>
            </div>
        </div>
    )
}

export default Hero