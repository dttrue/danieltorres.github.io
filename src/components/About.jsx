import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='py-20 bg-white' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
               <img src={aboutSvg} alt="aboutSvg" className='h-64 w-full' />
               <article>
               <SectionTitle text="about me" />
               <p className='mt-8 text-slate-600 leading-loose'>Hello! My name is Daniel, a passionate and creative web developer dedicated to crafting engaging and efficient digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in turning complex problems into simple, beautiful, and intuitive website designs.

As a web developer with a passion for crafting beautiful and intuitive user experiences, I&#39;m quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.

My skill set includes:

Front-End Development: HTML5, CSS3, JavaScript, and frameworks like React.js and Vue.js.
Back-End Development: PHP, Node.js, Express.js, and experience with SQL and NoSQL databases.
Design: Responsive design principles, UX/UI best practices, and a keen eye for aesthetics.
Tools and Workflow: Familiarity with version control using Git, agile methodologies, and continuous integration/deployment.
When I&#39;m not coding or pushing pixels, you&#39;ll find me in the kitchen experimenting with new recipes, out hiking in the wilderness, or indulging in my love for seeing new places.

I am currently available for freelance work and would love to collaborate on your next project. Let&#39;s create something amazing together!</p>
               </article>
            </div>
        </section>
            
    
    );
};


export default About
 