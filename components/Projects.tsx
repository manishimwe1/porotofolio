"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
	const projects = [1, 2, 3, 4];
	return (
		<div className='h-screen relative overflow-hidden flex flex-col text-left md:flex-row  justify-evenly mx-auto items-center z-0'>
			<h1 className='title'>Projects</h1>
			<div className='absolute w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#00BFFF]/80 scrollbar-corner-gray-400/20'>
				{projects.map((project, i) => (
					<div
						key={project}
						className=' flex w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 pt-56 h-[95vh]'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{ once: true }}
							src='/img-2.png'
							alt='project'
							className=' object-cover h-[200px] rounded-sm md:rounded-md w-[300px] md:h-[300px] md:w-[500px]'
						/>
						<div className='space-y-10 px-0 md:px-10 max-w-6xl mt-10'>
							<h4 className='text-xl lg:text-4xl capitalize font-semibold text-center'>
								<span className='underline decoration-4 underline-offset-[6px] lg:underline-offset-[10px] decoration-[#00BFFF]/50 '>
									case study {i + 1} of{" "}
									{projects.length}:
								</span>{" "}
								UPS clone
							</h4>
							<p className=' justify-center text-slate-400'>
								Lorem ipsum dolor sit amet
								consectetur adipisicing
								elit. Inventore asperiores
								quia eligendi cupiditate
								numquam, dignissimos,
								exercitationem corporis iure
								illum eius saepe vel tempora
								libero enim, aperiam
								pariatur eaque autem fuga?
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full absolute lg:top-[30%] top-[40%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12' />
		</div>
	);
}

export default Projects;
