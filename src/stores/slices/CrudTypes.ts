import type { IdType } from "../../models/abstract/IdDTO";
import type { SingleOrArray } from "../../util/commonTypes";

export type CrudType<T extends IdType> = {
	list: T[];
	create: (datum: T) => void;
	read: (id: SingleOrArray<string>) => T[];
	update: (datum: SingleOrArray<T>) => void;
	delete_: (id: SingleOrArray<string>) => void;
};
