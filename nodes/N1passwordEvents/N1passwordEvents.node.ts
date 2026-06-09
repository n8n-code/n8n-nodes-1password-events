import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authDescription } from './resources/auth';
import { apiV1Description } from './resources/api-v1';

export class N1passwordEvents implements INodeType {
	description: INodeTypeDescription = {
		displayName: '1password Events',
		name: 'N8nDevN1passwordEvents',
		icon: { light: 'file:./1password-events.svg', dark: 'file:./1password-events.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '1Password Events API Specification.',
		defaults: { name: '1password Events' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevN1passwordEventsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Auth",
					"value": "Auth",
					"description": ""
				},
				{
					"name": "API v1",
					"value": "API v1",
					"description": ""
				}
			],
			"default": ""
		},
		...authDescription,
		...apiV1Description
		],
	};
}
