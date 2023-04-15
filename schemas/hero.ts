export default {
	name: 'hero',
	type: 'document',
	title: 'Hero',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'subtitle',
			type: 'string',
			title: 'Subtitle',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'cta',
			type: 'string',
			title: 'CTA',
			description: 'CTA Button Text',
			validation: (Rule: any) => Rule.required(),
		},
	],
};
