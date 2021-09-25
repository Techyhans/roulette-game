
// Firebase Init
import {database} from "./Auth";

export const selectData = async () => {
	return await database
		.ref()
		.child('probs')
		.get()
}
