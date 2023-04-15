import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

import { orderableItemTypes, schemaTypes } from './schemas';

export default defineConfig({
	name: 'default',
	title: 'portfolio',

	projectId: 'k2r5wkkq',
	dataset: 'production',

	plugins: [
		deskTool({
			structure: (S, context) => {
				return S.list()
					.title('Content')
					.items([
						...S.documentTypeListItems().filter(
							(val) => !orderableItemTypes.includes(val.getId() ?? '')
						),

						...orderableItemTypes.map((type) =>
							orderableDocumentListDeskItem({ type, S, context })
						),
					]);
			},
		}),
		visionTool(),
	],

	schema: {
		types: (previousTypes) => {
			return [...previousTypes, ...schemaTypes];
		},
	},
});
