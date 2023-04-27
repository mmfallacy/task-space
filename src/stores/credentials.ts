import type { CredentialsType } from '@/types';
import { persistent } from './persistent';

function createCredentialStore() {
    const { update, subscribe } = persistent<CredentialsType[]>(
        'credentials',
        []
    );

    return {
        add: (credential: Omit<CredentialsType, 'uid'>) =>
            update((credentials) => [
                ...credentials,
                { uid: crypto.randomUUID(), ...credential },
            ]),
        delete: (uid: CredentialsType['uid']) =>
            update((credentials) =>
                credentials.filter((credential) => credential.uid != uid)
            ),
        subscribe,
    };
}

export const credentials = createCredentialStore();
