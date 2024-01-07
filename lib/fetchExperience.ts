import { Experience } from "@/typing";

export const fetchExperience = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,

		{ next: { revalidate: 10 } },
	);

	const data = await res.json();
	// console.log("res", data);
	const experience: Experience[] = data.experiences;

	// console.log(experience);

	return experience;
};
