import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import {
	getExperience,
	getPageInfo,
	getSocials,
} from "@/lib/actions/fecthData";
import { fetchSocials } from "@/lib/fetchSocials";
import { PageInfo, Social } from "@/typing";
import Image from "next/image";

export default async function Home() {
	const social: Social[] = await getSocials();
	const pageInfo: PageInfo = await getPageInfo();

	return (
		<div className='h-screen relative snap-y snap-mandatory overflow-y-scroll z-20 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00BFFF]/80 scrollbar-corner-gray-400/20'>
			<Header social={social} />

			<section id='hero' className=' snap-center'>
				<Hero pageInfo={pageInfo} />
			</section>

			<section id='about' className=' snap-center'>
				<About pageInfo={pageInfo} />
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
			<div className='absolute cursor-pointer inset-x-0 flex justify-center items-center '>
				<Image
					src={"/image/man.png"}
					alt='scorllBtn'
					width={40}
					height={40}
					className='object-center bg-blue-400/10 rounded-full p-2 inset-x-0'
				/>
			</div>
		</div>
	);
}
