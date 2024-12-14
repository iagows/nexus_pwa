import { parseISO } from "date-fns";
import { format } from "date-fns-tz";

export namespace DateUtil {
	export const dateToString = (date: Date): string => {
		// Obter a timezone local
		const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

		// Converter Date para String com Timezone Local
		return format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", {
			timeZone: localTimezone,
		});
	};

	export const stringToDate = (date: string): Date => {
		// Converter String para Date com Timezone Local
		return parseISO(date);
	};

	export const now = (): Date => {
		return new Date();
	};

	export const nowString = (): string => {
		return dateToString(now());
	};
}
