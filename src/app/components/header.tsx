import Image from "next/image";
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
	return(
        <div className="lg:px-12">
    		<div className="grid grid-flow-row auto-rows-auto md:grid-cols-3 md:auto-cols-max md:gap-x-20 gap-12 items-center">
                <div className="order-1 flex flex-col md:col-span-2 md:inline-flex md:flex-row-reverse md:justify-end gap-6">
                    <div className="flex flex-col justify-center gap-1">
                        <div className="text-3xl tracking-wide inline-flex items-center justify-start gap-2 font-bold">
                            <h1 className="text-4xl animate-text bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                                Hi, I&apos;m Lucas!
                            </h1>
                            <span className="animate-wiggle origin-bottom-right w-min">👋🏼</span>
                        </div>
                        <h2 className="text-xl tracking-wide text-zinc-400 font-semibold">Full-stack Web Developer</h2>
                    </div>
                    <div className="max-w-48 max-h-48 self-center rounded-3xl md:rounded-full overflow-hidden border-2 border-zinc-400">
                        <Image
                            src="/me.jpeg"
                            alt="Profile picture"
                            width={1241}
                            height={1241}
                            priority
                        />
                    </div>
                </div>
                    
                <div className="order-2 md:order-3 md:col-span-2">
                    <p className="text-justify text-zinc-200 text-lg">
                    I&apos;m a full stack developer with a focus on PHP and web development, 
                    passionate about creating innovative and functional solutions. 
                    I&apos;m always looking for exciting challenges that allow me to expand my knowledge and improve my skills.
                    </p>
                </div>

                <div className="order-3 md:order-2 flex flex-col md:text-end gap-2">
                    <h3 className="text-white text-lg font-semibold">Languages</h3>
                    <span className="text-zinc-400">🇧🇷 PT-BR - Native Speaker</span>
                    <span className="text-zinc-400">🇺🇸 EN - Fluent</span>
                </div>
                <div className="order-4 flex justify-between px-10 md:justify-end md:gap-2 md:px-0">
                    <a href="https://www.linkedin.com/in/lucasmrib/" target="new"
                    className="text-white border border-white rounded-full p-3
                    hover:animate-text hover:bg-gradient-to-r hover:from-teal-700 hover:via-purple-700 hover:to-orange-700">
                        <Linkedin/>
                    </a>
                    <a href="https://github.com/lucasmrib" target="new"
                    className="text-white border border-white rounded-full p-3 hover:bg-zinc-700
                    hover:animate-text hover:bg-gradient-to-r hover:from-teal-700 hover:via-purple-700 hover:to-orange-700">
                        <Github />
                    </a>
                    <a href="/Resume.pdf" download
                    className="text-white border border-white rounded-full p-3 hover:bg-zinc-700
                    hover:animate-text hover:bg-gradient-to-r hover:from-teal-700 hover:via-purple-700 hover:to-orange-700">
                        <span className="font-semibold">CV</span>
                    </a>
                    <a href="mailto:lucas.marri@hotmail.com" target="new"
                    className="text-white border border-white rounded-full p-3 hover:bg-zinc-700
                    hover:animate-text hover:bg-gradient-to-r hover:from-teal-700 hover:via-purple-700 hover:to-orange-700">
                        <Mail />
                    </a>
                </div>
            </div>
        </div>
	)
}