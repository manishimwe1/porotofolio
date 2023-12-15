"use client";
import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
	const arr = [
		1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5,
		6, 1, 2,
	];
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
			className='h-screen relative flex-col flex text-center md:text-left xl:flex-row max-w-7xl xl:px-10 min-h-screen justify-center mx-auto items-center'>
			<h1 className='title'>Skills</h1>
			<h3 className='absolute top-44 uppercase tracking-[3px] text-gray text-xs'>
				Hover over a skill for current profieciency
			</h3>
			<div className='absolute top-80 lg:top-56 grid grid-cols-4 gap-5 overflow-hidden'>
				{arr.map((_, i) => (
					<Skill key={i} />
				))}
			</div>
		</motion.div>
	);
}

export default Skills;
