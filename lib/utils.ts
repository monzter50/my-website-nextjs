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

export function formatDate(dateISO: string): string {
    const optionsDate: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateISO);
    const formattedDate = date.toLocaleDateString('es-ES', optionsDate);
    return formattedDate;
  }
