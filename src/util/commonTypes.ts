export type VoidCallback = () => void;
export type PromiseVoidCallback = () => Promise<void>;

export type SingleOrArray<T> = T | T[];

export type ActionFunction = {
	action: VoidCallback;
};

export type ActionLink = {
	link: string;
};
