
// Firebase Init
import {database} from "./Auth";

export const selectData = async () => {
	return await database
		.ref()
		.child('probs')
		.get()
}

export const selectItems = async () => {
	return await database
		.ref()
		.child('item')
		.get()
}

export const selectTokens = async () => {
	return await database
		.ref()
		.child('auth')
		.get()
}
