import { Project, Social } from "@/typing";

export const fetchProject = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`,
	);

	const data = await res.json();
	// console.log("res", data);
	const project: Project[] = data.project;

	// console.log(project);

	return project;
};
