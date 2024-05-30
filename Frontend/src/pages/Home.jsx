import React from 'react'
import Avatar from "../assets/Avatar.png";
import About from "../assets/About.png";
import { createMessage } from '../../utils/dataService.js';

export default function Home({ user, skills, projects, isDarkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMessage(formData);
            console.log('Message sent successfully');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={`${isDarkMode ? 'dark' : 'light'} bg-customBg`}>
            <div className="px-6 pt-40 lg:h-screen lg:px-8">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <p className="np-font text-lg leading-8 text-headline">Hi, my name is</p>
                        <h1 className="my-4 text-4xl font-bold tracking-tight text-headline lg:text-6xl">{user?.name}.</h1>
                        <h1 className="text-4xl font-bold tracking-tight text-headline mb-4 lg:text-5xl lg:text-3xl">Junior Software Engineer</h1>
                        <p className="text-paragraph">{user.bio}</p>
                        <div>
                            <div className="flex mt-14">
                                <a href={user.github} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-6 w-6 me-5 fill-headline transition ease-in-out opacity-50 hover:opacity-100 duration-500" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                                </a>
                                <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 me-5 fill-headline transition ease-in-out opacity-50 hover:opacity-100 duration-500" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex lg:justify-center lg:items-center order-1 lg:order-none sm:flex sm:justify-center sm:items-center">
                        <img src={Avatar} alt="avatar" className="z-40" />
                    </div>
                </div>
            </div>

            <div id="about" className="px-6 pt-20 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    <h3 className="np-font text-headline text-lg font-extrabold leading-tight tracking-tight sm:text-4xl">
                        About me
                    </h3>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="lg:mt-0 lg:col-span-5 lg:flex lg:justify-center lg:items-center order-1 lg:order-none sm:flex sm:justify-center sm:items-center">
                            <img src={About} alt="avatar" className="z-40" />
                        </div>
                        <div className="mr-auto place-self-center lg:col-span-7">
                            {user?.about?.map((paragraph, index) => (
                                <p key={index} className="text-paragraph mb-4">{paragraph}</p>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            <div id="skills" className="px-6 pt-20 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    <h3 className="np-font text-headline text-lg font-extrabold leading-tight tracking-tight sm:text-4xl">
                        Skills
                    </h3>
                    <div className="grid gap-4 mt-8 lg:grid-cols-2 sm:grid-cols-1">
                        {skills.map((skillCategory, index) => (
                            <div className="mb-4" key={index}>
                                <h4 className="text-xl text-headline font-semibold mb-3">{skillCategory.category}</h4>
                                <div className="flex flex-wrap gap-4">
                                    {skillCategory.skills.map((skill) => (
                                        <div key={skill.name} className="flex items-center py-3 px-4 bg-card rounded-sm transition-transform duration-300 transform-gpu hover:scale-105 hover:bg-cardHov">
                                            {skill.logoUrl && (
                                                <img src={skill.logoUrl} alt={skill.name} className="w-8 h-8" />
                                            )}
                                            <span className="text-paragraph ml-4">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="projects" className="px-6 pt-20 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    <h3 className="np-font text-headline text-lg font-extrabold leading-tight tracking-tight sm:text-4xl">
                        Projects
                    </h3>
                    <div className="grid grid-cols-1 mt-8 sm:mt-12 gap-x-20 gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {projects?.map((project, index) => (
                            <div className="space-y-4 flex justify-center" key={index}>
                                <div className="max-w-sm bg-card rounded-sm transition-transform duration-300 transform-gpu hover:scale-105 hover:bg-cardHov">
                                    <div className="overflow-hidden">
                                        <img className="rounded-t-sm" src={project.image} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between p-5 h-80">
                                        <div>
                                            <h5 className="mb-2 text-headline text-2xl font-bold tracking-tight">{project.title}</h5>
                                            <div className="flex flex-wrap">
                                                {project.technologies.map((technology) => (
                                                    <span className="bg-badge text-badgeText text-xs font-medium me-2 px-2.5 py-0.5 rounded-full mt-2 mb-4" key={technology}>
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="mb-3 text-left font-normal text-paragraph">{project.description}</p>
                                        </div>
                                        <div className="flex justify-evenly">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-btnCol text-btnText rounded-sm transition ease-in-out duration-500 hover:bg-btnHov" >
                                                GitHub
                                            </a>
                                            {project.demoUrl && (
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-btnCol text-btnText rounded-sm transition ease-in-out duration-500 hover:bg-btnHov">
                                                    Live Site
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="contact" className="px-6 pt-20 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    <h3 className="np-font text-headline text-lg font-extrabold leading-tight tracking-tight sm:text-4xl">
                        Get in touch
                    </h3>
                </div>

                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <h5 className="np-font text-headline mb-4">Message me</h5>
                        <form onSubmit={handleMessageSubmit} className="space-y-8 mr-8">
                            <div className="flex justify-between gap-2.5">
                                <div className='grow'>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="shadow-sm bg-customBg border border-white-100 text-sm rounded-sm focus:bg-card focus:ring-primary-500 focus:border-btnCol block w-full p-2.5" placeholder="Your name" required />
                                </div>
                                <div className='grow'>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="shadow-sm bg-customBg border border-white-100 text-sm rounded-sm focus:bg-card focus:ring-primary-500 focus:border-btnCol block w-full p-2.5" placeholder="name@email.com" required />
                                </div>
                            </div>
                            <div>
                                <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="block p-3 w-full text-sm bg-customBg rounded-sm border border-white-100 shadow-sm focus:bg-card focus:ring-primary-500 focus:border-btnCol" placeholder="How can I help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <textarea id="content" value={formData.content} onChange={handleChange} rows="6" className="block p-2.5 w-full text-sm bg-customBg rounded-sm shadow-sm border border-white-100 focus:bg-card focus:ring-primary-500 focus:border-btnCol" placeholder="Leave your message..."></textarea>
                            </div>
                            <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-btnCol text-btnText rounded-sm transition ease-in-out duration-500 hover:bg-btnHov">Send message</button>
                        </form>
                    </div>
                    <div className="lg:mt-0 lg:col-span-6 lg:mt-0 sm:mt-20">
                        <h5 className="np-font text-headline mb-4">Contact information</h5>
                        <div className="flex flex-col justify-between h-72">
                            <div className="flex items-center ">
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3284/3284752.png" alt="" className="w-8 h-8" />
                                </div>
                                <div className="ml-6">
                                    <p className="np-font text-headline text-xs mb-2">Name</p>
                                    <p className="text-paragraph">{user.name}</p>
                                </div>
                            </div>
                            <div className="flex items-center my-5">
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" alt="" className="w-8 h-8" />
                                </div>
                                <div className="ml-6">
                                    <p className="np-font text-headline text-xs mb-2">Location</p>
                                    <p className="text-paragraph">{user.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/128/4905/4905458.png" alt="" className="w-8 h-8" />
                                </div>
                                <div className="ml-6">
                                    <p className="np-font text-headline text-xs mb-2">Email</p>
                                    <p className="text-paragraph">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
