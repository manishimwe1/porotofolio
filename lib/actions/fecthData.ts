"use server";

import {
	Experience,
	PageInfo,
	Project,
	Skill,
	Social,
} from "@/typing";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export const getSocials = async () => {
	const query = groq`
    *[_type == "social"]
`;
	const tags = ["social"];

	const socials: Social[] = await sanityClient.fetch(
		query,
		tags,
	);

	return socials;
};

export const getPageInfo = async () => {
	const query = groq`
    *[_type == "pageInfo"][0]
`;

	const pageInfo: PageInfo = await sanityClient.fetch(
		query,
	);

	if (pageInfo) {
		// const Url = pageInfo.map((social) => social.url);
		return console.log(pageInfo);
	}
};

export const getProject = async () => {
	const query = groq`
    *[_type === "project"]{
		...,
		technologies[]->
	}
`;
	const project: Project[] = await sanityClient.fetch(
		query,
	);

	return project;
};

export const getExperience = async () => {
	const query = groq`
    *[_type == "experience"]{
		...,
		technologies[]->
	}
`;
	const experience: Experience = await sanityClient.fetch(
		query,
	);

	return experience;
};

export const getSkills = async () => {
	const query = groq`
    *[_type == "social"]
`;
	const skills: Skill = await sanityClient.fetch(query);

	return skills;
};
