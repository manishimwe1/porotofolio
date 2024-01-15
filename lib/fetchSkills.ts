import { Skill } from "@/typing";

export const fetchSkills = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkill`,
		{ next: { revalidate: 500 } },
	);

	const data = await res.json();
	// console.log("res", data);
	const skills: Skill[] = data.skill;

	// console.log(skills);

	return skills;
};
