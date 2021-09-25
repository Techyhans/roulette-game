
// Firebase Init
import {database} from "./Auth";

const ref = database.ref()

export const insertData = () => {
	const uniqueKey = ref.child('probs').push().key
	console.log(uniqueKey)
}

export const selectData = async () => {
	return await database
		.ref()
		.child('probs')
		.get()
}
