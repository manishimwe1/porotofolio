import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Experience, Project } from "@/typing";

const query = groq`
    *[_type == "project"]{
		...,
		technologies[]->
	}
`;
type Data = {
	project: Project;
};
export async function GET() {
	const project: Project = await sanityClient.fetch(
		query,
		{ next: { revalidate: 10 } },
	);
	return Response.json({ project });
}
