export async function hashSHA256(str: string) {
    const utf8 = new TextEncoder().encode(str);
    const buffer = await crypto.subtle.digest('SHA-256', utf8);
    const hash = Array.from(new Uint8Array(buffer));
    return hash.map((byte) => byte.toString(16).padStart(2, '0')).join('');
}
