import { defineField, defineType } from "sanity";

export default defineType({
	name: "pageInfo",
	title: "PageInfo",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "heroImage",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "profilePic",
			title: "ProfilePic",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "backgroundInfomation",
			title: "BackgroundInfomation",
			type: "string",
		}),
		defineField({
			name: "phoneNumber",
			title: "PhoneNumber",
			type: "string",
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
		}),
		defineField({
			name: "address",
			title: "Address",
			type: "string",
		}),
		defineField({
			name: "role",
			title: "Role",
			type: "string",
		}),
		defineField({
			name: "socials",
			title: "Socials",
			type: "array",
			of: [
				{
					type: "reference",
					to: { type: "social" },
				},
			],
		}),
	],

	// preview: {
	// 	select: {
	// 		title: "title",
	// 		author: "author.name",
	// 		media: "mainImage",
	// 	},
	// 	prepare(selection) {
	// 		const { author } = selection;
	// 		return {
	// 			...selection,
	// 			subtitle: author && `by ${author}`,
	// 		};
	// 	},
	// },
});
