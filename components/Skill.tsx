"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typing";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
	directionLeft?: boolean;
	skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			{/* <motion.img
				initial={{
					x: 200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.5,
				}} */}
			<Image
				width={10}
				height={10}
				alt='logoskills'
				// viewport={{ once: true }}
				src={urlFor(skill.image).url()}
				className='w-[58px] h-[58px] object-center object-contain  rounded-full border border-gray lg:w-[80px] grayscale lg:h-[80px] filter group-hover:grayscale transition-all duration-200 ease-in-out'
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[58px] h-[58px] lg:w-[80px] rounded-full lg:h-[80px]'>
				<div className=' flex items-center flex-col justify-center h-full'>
					<p className='text-xl lg:text-2xl font-bold text-black opacity-100'>
						{skill.progress}%
					</p>
					<p className='text-slate-100 w-full text-center rounded-lg shadow-md shadow-[#242424] bg-[#242424]  text-xs'>
						{skill.title}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
