import Color from "./Color";
import type { SingleOrArray } from "./commonTypes";

export const toArray = <T>(obj: SingleOrArray<T>): T[] => {
	return Array.isArray(obj) ? obj : [obj];
};

export const changeOpacity = (color: string, alpha: number): string => {
	return Color.createFrom(color).changeAlpha(alpha).toRgba();
};

export const randomRange = (min: number, max: number): number =>
	Math.floor(Math.random() * ((max < min ? min : max) - min + 1)) + min;

export const getRandomElements = <T extends { id: number }>(
	input: T[],
	amount = 1,
): number[] => {
	const elements = amount > input.length ? input.length : amount;
	const randomizedArray = [...input].sort(() => 0.5 * Math.random());
	const selection = randomizedArray.slice(0, elements);
	return selection.map((a) => a.id);
};
