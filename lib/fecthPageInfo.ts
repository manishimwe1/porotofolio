import { PageInfo } from "@/typing";

export const fetchPageInfo = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,
		{ next: { revalidate: 500 } },
	);

	const data = await res.json();
	// console.log("res", data);
	const pageInfo: PageInfo = data.pageInfo;

	// console.log(pageInfo);

	return pageInfo;
};
