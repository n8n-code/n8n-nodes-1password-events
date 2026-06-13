import type { INodeProperties } from 'n8n-workflow';

export const authDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					]
				}
			},
			"options": [
				{
					"name": "Get Auth Introspect",
					"value": "Get Auth Introspect",
					"action": "Performs introspection of the provided Bearer JWT token",
					"description": "Performs introspection of the provided Bearer JWT token",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/auth/introspect"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/auth/introspect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Auth Introspect"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_jwtsa",
			"type": "string",
			"default": "",
			"description": "A JWT SA token issued to this service",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Auth Introspect"
					]
				}
			}
		},
];
