import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Experience } from "@/typing";

const query = groq`
    *[_type == "experience"]{
		...,
		technologies[]->
	}
`;
type Data = {
	experiences: Experience;
};
export async function GET() {
	const experiences: Experience =
		await sanityClient.fetch(query);
	return Response.json({ experiences });
}
