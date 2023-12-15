"use client";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
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
			className='flex max-w-7xl flex-col md:gap-4 relative h-screen text-center mx-auto items-center px-10 justify-evenly md:text-left md:flex-row'>
			<h3 className='title'>About</h3>
			<motion.img
				initial={{
					x: -200,
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
				src={"/image/man.png"}
				alt='profile-pic'
				className='bg-blue-400/10 rounded-full w-56 h-56 md:w-80 md:h-96  md:rounded-lg  object-cover mx-auto mt-24'
			/>
			<div className='space-y-4 px-0 md:p-10 -mt-10 md:mt-0'>
				<h4 className=' text-2xl md:text-4xl font-semibold'>
					Here is a{" "}
					<span className='underline decoration-4 decoration-[#00BFFF]/50 '>
						litle
					</span>{" "}
					background
				</h4>
				<p className='text-justify text-base text-slate-400'>
					I am a passionate and skilled Full Stack
					Developer specializing in Mobile and Web
					development with a strong dedication to
					quality and attention to detail. I am
					improve my craft i stay uptaded with the
					latest industry trends and best
					practices by attending conferences,
					taking online courses. and experimenting
					with new technologies I excel in
					designing and maintaining responsive web
					application that offer a smooth user
					exprience.
				</p>
			</div>
		</motion.div>
	);
};

export default About;
