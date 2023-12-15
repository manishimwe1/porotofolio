import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<div className='h-screen snap-y snap-mandatory overflow-y-scroll z-20 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00BFFF]/80 scrollbar-corner-gray-400/20'>
			<Header />

			<section id='hero' className=' snap-center'>
				<Hero />
			</section>

			<section id='about' className=' snap-center'>
				<About />
			</section>
			<section
				id='experience'
				className=' snap-center'>
				<Experience />
			</section>

			<section id='skills' className=' snap-center'>
				<Skills />
			</section>

			<section id='projects' className=' snap-center'>
				<Projects />
			</section>

			<section id='contact' className=' snap-center'>
				<Contact />
			</section>
		</div>
	);
}
