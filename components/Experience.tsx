import { Experience } from "@/typing";
import ExperienceCard from "./ExperienceCard";
import { MotionDiv } from "./MotionDiv";
import { getExperience } from "@/lib/actions/fecthData";

type Props = {};

async function Experience({}: Props) {
	const experiences: Experience[] = await getExperience();
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
			className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
			<h1 className='title'>Experience</h1>
			<div className='flex w-full space-x-5 overflow-x-scroll snap-x snap-mandatory mt-36 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00BFFF]/80 scrollbar-corner-gray-400/20'>
				{experiences.map((experience, i) => (
					<ExperienceCard
						key={experience._id}
						experience={experience}
					/>
				))}
			</div>
		</MotionDiv>
	);
}

export default Experience;
