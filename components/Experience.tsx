"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
	const arr = [1, 2, 3, 4];
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			viewport={{ once: true }}
			className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
			<h1 className='title'>Experience</h1>
			<div className='flex w-full space-x-5 overflow-x-scroll snap-x snap-mandatory mt-36 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00BFFF]/80 scrollbar-corner-gray-400/20'>
				{arr.map((_, i) => (
					<ExperienceCard key={i} />
				))}
			</div>
		</motion.div>
	);
}

export default Experience;
