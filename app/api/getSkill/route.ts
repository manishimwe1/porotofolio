import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Skill } from "@/typing";

const query = groq`
    *[_type == "skill"]
`;
type Data = {
	skill: Skill;
};
export async function GET() {
	const skill: Skill = await sanityClient.fetch(query);
	return Response.json({ skill });
}
