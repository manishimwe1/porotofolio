"use client";

import { socialIcons } from "@/constants/constants";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { fetchSocials } from "@/lib/fetchSocials";
import { Social } from "@/typing";

type Props = {};

function Header({ social }: { social: Social[] }) {
	// console.log(social);

	const route = useRouter();
	const [isopen, setisopen] = useState(false);
	const handleClick = () => {
		setisopen(!isopen);
		route.push("#contact");
	};
	return (
		<header className='flex justify-between items-start max-w-7xl mx-auto z-20 sticky top-0 p-4'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex items-center '>
				{social.map((socialIcon) => (
					<SocialIcon
						key={socialIcon._id}
						url={socialIcon.url}
						fgColor='gray'
						bgColor='transparent'
						className='w-10 h-10'
						target='_blank'
					/>
				))}
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.4,
				}}
				onClick={handleClick}
				className='flex items-center gap-4 cursor-pointer'>
				{!isopen ? (
					<SocialIcon
						fgColor='gray'
						bgColor='transparent'
						network='email'
						className='w-10 h-10'
					/>
				) : (
					<EnvelopeOpenIcon className='w-7 h-7 text-gray-400/50 mt-1' />
				)}
				{/* Todoo:when you click open your icons */}
				<p className='capitalize  hidden md:inline-flex text-gray-400/50 font-semibold text-lg'>
					get in touch
				</p>
			</motion.div>
		</header>
	);
}

export default Header;
