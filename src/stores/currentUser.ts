import { persistent } from './persistent';

export const currentUser = persistent<string | null>('current-user', null);
