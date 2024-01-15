import { getProject } from "@/lib/actions/fecthData";
import { MotionImg } from "./MotionImg";
import { Project } from "@/typing";
import { urlFor } from "@/sanity";
import Image from "next/image";
import { fetchProject } from "@/lib/fetchProject";

type Props = {};

async function Projects({}: Props) {
	const projects: Project[] = await fetchProject();

	return (
		<div className='h-screen relative overflow-hidden flex  flex-col text-left md:flex-row  justify-evenly mx-auto items-center z-0'>
			<h1 className='title'>Projects</h1>
			<div className='absolute w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#00BFFF]/80 scrollbar-corner-gray-400/20'>
				{projects.map((project, i) => (
					<div
						key={project._id}
						className=' flex w-screen  flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 pt-56 h-[95vh]'>
						<MotionImg
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{
								duration: 1.2,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{ once: true }}
							src={urlFor(
								project.image,
							).url()}
							alt='project'
							className=' object-center object-fill h-[200px]  rounded-md shadow-sm shadow-[#00BFFF]/50  md:rounded-md w-[300px] md:h-[200px] md:w-[400px]'
						/>
						<div className='space-y-6  px-0 md:px-10 max-w-6xl mt-10'>
							<h4 className='text-lg lg:text-2xl capitalize font-semibold text-center'>
								<span className='underline decoration-4 underline-offset-[6px] lg:underline-offset-[10px] decoration-[#00BFFF]/50 '>
									case study {i + 1} of{" "}
									{projects.length}:
								</span>{" "}
								{project.title}
							</h4>
							<div className='flex gap-2  rounded-full justify-center'>
								{project.technologies.map(
									(tech) => (
										<img
											key={tech._id}
											src={urlFor(
												tech.image,
											).url()}
											alt={
												project.title
											}
											width={20}
											height={20}
											className='object-contain  rounded-full  bg-[#00BFFF] '
										/>
									),
								)}
							</div>

							<p className=' justify-center text-xs md:text-sm  text-slate-400'>
								{project.sumary}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full absolute lg:top-[30%] top-[40%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12' />
		</div>
	);
}

export default Projects;
