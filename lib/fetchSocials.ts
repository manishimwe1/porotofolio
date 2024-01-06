import { Social } from "@/typing";

export const fetchSocials = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`,
		{ next: { revalidate: 10 } },
	);

	const data = await res.json();
	// console.log("res", data);
	const socials: Social[] = data.social;

	// console.log(socials);

	return socials;
};
