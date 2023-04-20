export function assert(
    condition: unknown,
    message = 'AssertionError'
): asserts condition {
    if (!condition) throw new Error(message);
}
