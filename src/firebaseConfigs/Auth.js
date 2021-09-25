import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBT3HB9ftjCzJRXJiiR9ryDL8UbXPe1PPs',
	authDomain: 'roulette-game-hansheng7820.firebaseapp.com',
	projectId: 'roulette-game-hansheng7820',
	storageBucket: 'roulette-game-hansheng7820.appspot.com',
	messagingSenderId: '878580157892',
	appId: '1:878580157892:web:ec414541ffce86202d6891',
	measurementId: 'G-FVWQP7L58Z',
	databaseURL: 'https://roulette-game-hansheng7820-default-rtdb.asia-southeast1.firebasedatabase.app',
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const database = firebase.database()

export { auth, provider, database }
