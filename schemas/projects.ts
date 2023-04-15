import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';

const gallerySchema = {
	name: 'gallery',
	type: 'array',
	title: 'Gallery',
	description: 'Project screenshots',
	of: [
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			fields: [
				{
					name: 'altName',
					type: 'string',
					title: 'Alt Name',
					validation: (Rule: any) => Rule.required(),
				},
			],
		},
	],
	validation: (Rule: any) => Rule.required(),
};

const tagsSchema = {
	name: 'tags',
	type: 'array',
	title: 'Tags',
	of: [
		{
			name: 'tag',
			type: 'string',
			title: 'Tag',
		},
	],
	validation: (Rule: any) => Rule.required(),
};

export default {
	name: 'projects',
	type: 'document',
	title: 'Projects',
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: 'projects' }),
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			description: 'Project title',
			validation: (Rule: any) => Rule.required(),
		},
		gallerySchema,
		tagsSchema,
		{
			name: 'description',
			type: 'text',
			title: 'Description',
			description: 'Project description',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'demoUrl',
			type: 'url',
			title: 'Live Demo URL',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'repoUrl',
			type: 'url',
			title: 'Repository URL',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			validation: (Rule: any) => Rule.required(),
		},
	],
};
