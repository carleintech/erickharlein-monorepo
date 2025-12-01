import { format, formatDistanceToNow } from "date-fns";

export function formatDate(date: Date | string, formatStr: string = "PPP"): string {
	return format(new Date(date), formatStr);
}

export function formatRelativeTime(date: Date | string): string {
	return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatNumber(num: number): string {
	return new Intl.NumberFormat("en-US").format(num);
}

export function truncate(str: string, length: number): string {
	return str.length > length ? `${str.substring(0, length)}...` : str;
}
