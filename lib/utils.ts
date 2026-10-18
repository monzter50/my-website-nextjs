import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const merge = (first:any[], second:any[]) => {
    for (let i = 0; i < second.length; i++) {
        first.push(second[i]);
    }
    return first;
}

/**
 * Locale-aware date ("October 18, 2026" / "18 de octubre de 2026"). Formatted in
 * UTC so a date-only frontmatter value doesn't shift a day with the server's TZ.
 */
export function formatDate(dateISO: string, locale?: string, options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }): string {
    return new Intl.DateTimeFormat(locale, { ...options, timeZone: 'UTC' }).format(new Date(dateISO));
}
