import type { INodeProperties } from 'n8n-workflow';

export const apiV1Description: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API v1"
					]
				}
			},
			"options": [
				{
					"name": "Get Item Usages",
					"value": "Get Item Usages",
					"action": "Retrieves item usages",
					"description": "This endpoint requires your JSON Web Token to have the *itemusages* feature.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/itemusages"
						}
					}
				},
				{
					"name": "Get Sign In Attempts",
					"value": "Get Sign In Attempts",
					"action": "Retrieves sign-in attempts",
					"description": "This endpoint requires your JSON Web Token to have the *signinattempts* feature.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/signinattempts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/itemusages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API v1"
					],
					"operation": [
						"Get Item Usages"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"type": "string",
			"default": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK",
			"description": "Cursor to fetch more data if available or continue the polling process if required",
			"routing": {
				"send": {
					"property": "cursor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API v1"
					],
					"operation": [
						"Get Item Usages"
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
						"API v1"
					],
					"operation": [
						"Get Item Usages"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/signinattempts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API v1"
					],
					"operation": [
						"Get Sign In Attempts"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"type": "string",
			"default": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK",
			"description": "Cursor to fetch more data if available or continue the polling process if required",
			"routing": {
				"send": {
					"property": "cursor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API v1"
					],
					"operation": [
						"Get Sign In Attempts"
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
						"API v1"
					],
					"operation": [
						"Get Sign In Attempts"
					]
				}
			}
		},
];
