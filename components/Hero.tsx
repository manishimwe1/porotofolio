"use client";
import {
	Cursor,
	useTypewriter,
} from "react-simple-typewriter";
import BackGroundCircle from "./BackGroundCircle";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/typing";
import { urlForImage } from "@/sanity/lib/image";
import { urlFor } from "@/sanity";
type Props = {
	pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, My name is ${pageInfo.name}`,
			"guy-who-love-cofee.tsx",
			"<ButLoveCodingMore/>",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className=' relative h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
			<BackGroundCircle />
			<Image
				src={urlFor(pageInfo.heroImage).url()}
				alt='profile-pic'
				width={200}
				height={200}
				className='bg-blue-400/10 rounded-full object-cover mx-auto absolute top-[41%]'
			/>
			<div className=' absolute bottom-0 bg-black/40 p-2 rounded-2xl md:bottom-1 shadow-md shadow-black/50 z-10'>
				<h2 className='text-sm text-gray-400/40 whitespace-nowrap uppercase px-10 font-semibold tracking-[10px] md:tarcking-[15px]'>
					{pageInfo.role}
				</h2>
				<h1 className='text-2xl lg:text-3xl font-semibold p-4'>
					<span className='whitespace-nowrap'>
						{text}
					</span>
					<Cursor cursorColor='#00BFFF' />
				</h1>
				<Link href={"#about"}>
					<button className='btn'>About</button>
				</Link>
				<Link href={"#experience"}>
					<button className='btn'>
						Experience
					</button>
				</Link>
				<Link href={"#skills"}>
					<button className='btn'>Skills</button>
				</Link>
				<Link href={"#projects"}>
					<button className='btn'>
						Projects
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Hero;
