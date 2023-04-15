const emailSchema = {
	name: 'emails',
	type: 'array',
	title: 'Emails',
	description: 'Email addresses',
	of: [
		{
			name: 'email',
			type: 'email',
			title: 'Email',
		},
	],
	validation: (Rule: any) => Rule.required(),
};

export default {
	name: 'contact',
	type: 'document',
	title: 'Contact',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			description: 'Contact Form Title',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'subtitle',
			type: 'text',
			title: 'Subtitle',
			validation: (Rule: any) => Rule.required(),
		},
		emailSchema,
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			validation: (Rule: any) => Rule.required(),
		},
	],
};
