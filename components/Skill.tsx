import React from "react";
import { motion } from "framer-motion";

type Props = { directionLeft?: boolean };

function Skill({ directionLeft }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				viewport={{ once: true }}
				src='/image/blade.png'
				className='w-[58px] h-[58px] object-cover rounded-full border border-gray lg:w-[80px] lg:h-[80px] filter group-hover:grayscale transition-all duration-200 ease-in-out'
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[58px] h-[58px] lg:w-[80px] rounded-full lg:h-[80px]'>
				<div className=' flex items-center justify-center h-full'>
					<p className='text-xl lg:text-2xl font-bold text-black opacity-100'>
						100%
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
