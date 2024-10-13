import { z } from "zod";

const DrawerModel = z.object({
	isMobileOpen: z.boolean().default(false),
	isClosing: z.boolean().default(false),
});

type DrawerModelType = z.infer<typeof DrawerModel>;

export default DrawerModel;
export type { DrawerModelType };
