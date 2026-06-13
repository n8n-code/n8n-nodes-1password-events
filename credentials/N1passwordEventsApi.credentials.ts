import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class N1passwordEventsApi implements ICredentialType {
        name = 'N8nDevN1passwordEventsApi';

        displayName = '1password Events API';

        icon: Icon = { light: 'file:../nodes/N1passwordEvents/1password-events.svg', dark: 'file:../nodes/N1passwordEvents/1password-events.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://events.1password.com',
                        required: true,
                        placeholder: 'https://events.1password.com',
                        description: 'The base URL of your 1password Events API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
