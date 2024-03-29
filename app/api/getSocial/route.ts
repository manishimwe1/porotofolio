import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { Social } from "@/typing";

const query = groq`
   *[_type == "social"]
`;
const tags = ["/"];

export async function GET() {
	const social: Social = await sanityClient.fetch(query, {
		next: { revalidate: 10 },
	});
	return Response.json({ social });
}
