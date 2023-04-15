import { orderRankField } from '@sanity/orderable-document-list';

const IconList = [
	{
		title: 'Github',
		value: 'IconBrandGithub',
	},
	{
		title: 'Keybase',
		value: 'IconCircleKey',
	},
	{
		title: 'Mail',
		value: 'IconMail',
	},
];

export default {
	name: 'links',
	type: 'document',
	title: 'Links',
	fields: [
		orderRankField({ type: 'links' }),
		{
			name: 'icon',
			type: 'string',
			title: 'Icon',
			options: {
				list: IconList,
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'label',
			type: 'string',
			title: 'Aria-Label',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'newTab',
			type: 'boolean',
			title: 'Opens in a new tab',
			validation: (Rule: any) => Rule.required(),
		},

		{
			name: 'tooltip',
			type: 'string',
			title: 'Tooltip',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'url',
			type: 'url',
			title: 'URL',
			validation: (Rule: any) =>
				Rule.uri({
					scheme: ['http', 'https', 'mailto'],
				}),
		},
	],
};
