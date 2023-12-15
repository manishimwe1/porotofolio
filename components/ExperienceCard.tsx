import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
				src='/image/blade.png'
				alt='workExperinces'
				className='w-20 h-20 rounded-full object-cover'
			/>
			<div className=''>
				<h4 className='text-4xl font-light '>
					CEO of papafam
				</h4>
				<p className='font-bold text-2xl mt-1'>
					PAPAFARM
				</p>
				<div className='flex space-x-1 my-2'>
					<Image
						src={"/logo-purple.svg"}
						alt='logo'
						width={50}
						height={50}
						className='object-cover '
					/>
					<Image
						src={"/logo.svg"}
						alt='logo'
						width={50}
						height={50}
						className='object-cover '
					/>
				</div>
				<p className='uppercase py-3'>
					Started work... | Ended...
				</p>

				<ul className='list-disc gap-3 ml-5 text-sm'>
					<li>summary points</li>
					<li>summary points</li>
					<li>summary points</li>
					<li>summary points</li>
					<li>summary points</li>
					<li>summary points</li>
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
