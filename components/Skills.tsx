import React from "react";
import Skill from "./Skill";
import { MotionDiv } from "./MotionDiv";
import { Skill as typeSkill } from "@/typing";
import { getSkills } from "@/lib/actions/fecthData";
import { fetchSkills } from "@/lib/fetchSkills";

type Props = {};

async function Skills({}: Props) {
	const skills: typeSkill[] = await fetchSkills();
	return (
		<MotionDiv
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
			<div className='absolute top-80 lg:top-72 grid grid-cols-4 gap-5 overflow-hidden'>
				{skills.map((skill) => (
					<Skill key={skill._id} skill={skill} />
				))}
			</div>
		</MotionDiv>
	);
}

export default Skills;
