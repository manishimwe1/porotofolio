import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackGroundCircle = (props: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 1, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 1],
				borderRadius: [
					"20%",
					"20%",
					"50%",
					"80%",
					"20",
				],
			}}
			transition={{
				duration: 1.5,
			}}
			className='relative flex justify-center items-center'>
			<div className=' absolute border border-[#00bfff]/40 rounded-full h-[200px] w-[200px] mt-20 animate-ping' />
			<div className=' absolute border border-[#6d6a6a33] rounded-full h-[300px] w-[300px] mt-20 ' />
			<div className='border border-[#6d6a6a33] rounded-full h-[400px] w-[400px] mt-20 ' />
			<div className='absolute border border-[#00BFFF]/40 rounded-full h-[500px] w-[500px] mt-20 animate-pulse' />
			<div />
		</motion.div>
	);
};

export default BackGroundCircle;
