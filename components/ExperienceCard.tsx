"use client";

import { urlFor } from "@/sanity";
import { Experience } from "@/typing";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
	experience: Experience;
};

function ExperienceCard({ experience }: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src={urlFor(experience.companyImage).url()}
				alt='workExperinces'
				className='w-24 h-24 rounded-full bg-[#00BFFF]/50  object-contain object-center '
			/>
			<div className=''>
				<h4 className='text-4xl font-light '>
					{experience.jobTitle}
				</h4>
				<p className='font-bold text-2xl mt-1'>
					{experience.company}
				</p>
				<div className='flex space-x-1 my-2'>
					{experience.technologies.map(
						(technology) => (
							<Image
								key={technology._id}
								src={urlFor(
									technology.image,
								).url()}
								alt='logo'
								width={30}
								height={30}
								className='object-contain '
							/>
						),
					)}
				</div>
				<p className='uppercase py-3'>
					{new Date(
						experience.dateStarted,
					).toDateString()}{" "}
					|{" "}
					{experience.isCurrentWorkingHere
						? "Present"
						: new Date(
								experience.dateEnded,
						  ).toDateString()}
				</p>

				<ul className='list-disc gap-3 ml-5 text-sm'>
					{experience.points
						? experience.points.map(
								(point, i) => (
									<li
										key={`${point}${i}`}>
										{point}
									</li>
								),
						  )
						: "No Data Points"}
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
