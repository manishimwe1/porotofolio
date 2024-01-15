import { groq } from "next-sanity";

import { sanityClient } from "../../../sanity";
import { PageInfo } from "@/typing";

const query = groq`
    *[_type == "pageInfo"][0]
`;
type Data = {
	pageInfo: PageInfo;
};
export async function GET() {
	const pageInfo: PageInfo = await sanityClient.fetch(
		query,
		{ next: { revalidate: 10 } },
	);
	return Response.json({ pageInfo });
}
