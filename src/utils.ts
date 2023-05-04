import { assert } from './asserts';
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
} from 'date-fns';

export async function hashSHA256(str: string) {
    const utf8 = new TextEncoder().encode(str);
    const buffer = await crypto.subtle.digest('SHA-256', utf8);
    const hash = Array.from(new Uint8Array(buffer));
    return hash.map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export function shiftArray<T>(arr: T[], shift: number) {
    return [
        ...arr.slice(arr.length - shift, arr.length),
        ...arr.slice(0, arr.length - shift),
    ];
}

export function range(start: number, exclusiveEnd: number) {
    assert(start < exclusiveEnd);
    return [...Array(exclusiveEnd - start).keys()].map((i) => i + start);
}

export function rangeTill(offset: number, limit: number) {
    return range(offset, offset + limit);
}

export function getCalendarDaysOfMonth(current: Date) {
    const monthStart = startOfMonth(current);
    const monthEnd = endOfMonth(current);

    const weekStartOfMonthStart = startOfWeek(monthStart);
    const weekEndOfMonthEnd = endOfWeek(monthEnd);

    return eachDayOfInterval({
        start: weekStartOfMonthStart,
        end: weekEndOfMonthEnd,
    });
}

export function today() {
    return new Date();
}
