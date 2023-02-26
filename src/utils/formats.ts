/**
 * It takes a date string, converts it to a Date object, extracts the day, month and year, and returns
 * a string with the date formatted as dd/mm/yyyy
 * @param {string} date - The date to be formatted.
 * @returns a string with the date formatted.
 */
export const formatDate = (date: string): string => {
	const fecha = new Date(date);
	const day = fecha.getDate();
	const month = fecha.getMonth() + 1;
	const year = fecha.getFullYear();

	const formattedDate = `${day.toString().padStart(2, '0')}/${month
		.toString()
		.padStart(2, '0')}/${year.toString()}`;
	return formattedDate;
};

/**
 * It takes a number of miliseconds and returns the equivalent number of minutes
 * @param {number} miliseconds - number: The number of miliseconds to convert to minutes.
 * @returns A function that takes a miliseconds value (number) and returns a formated string value (number).
 */
export const milisecondsToMinutes = (miliseconds: number) => {
	const decimalMinutes = miliseconds / 60000;
	const tiempoDecimal = Number(decimalMinutes.toFixed(2));
	const minutes = Math.floor(tiempoDecimal);
	const seconds = Math.round((tiempoDecimal - minutes) * 60);
	const formatedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	return formatedTime;
};
