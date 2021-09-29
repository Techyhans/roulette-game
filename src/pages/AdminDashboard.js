import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {database} from "../firebaseConfigs/Auth";
import { v4 as uuidv4 } from 'uuid';
function AdminDashboard() {
	const [numPeople, setNumPeople] = useState(0)
	const [links, setLinks] = useState([])
	const [form, setForm] = useState({
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 0,
		11: 0,
		12: 0,
	})

	const [item, setItem] = useState({
		1: '',
		2: '',
		3: '',
		4: '',
		5: '',
		6: '',
		7: '',
		8: '',
		9: '',
		10: '',
		11: '',
		12: '',
	})

	const onSubmit = (e) => {
		e.preventDefault()

		let sum = 0
		Object.keys(form).forEach(function(key) {
			sum += form[key]
		})

		if (sum !== 1000) {
			alert("Total is not 100")
			return
		}

		database
			.ref()
			.child('probs')
			.update(form)
			.then(() => {
				alert("Done")
			})
			.catch(() => {
				alert("Fail")
			})
	}

	const onGenerateLink = (e) => {
		e.preventDefault();
		setLinks(links)
		let temp = []
		for (let i=0; i<numPeople; i++) {
			const _uuid = uuidv4();
			const ref = database.ref()
			const uniqueKey = ref.child('auth').push().key
			const usersRef = ref.child('auth').child(uniqueKey)
			let data_to_submit = {
				"uuid": _uuid,
				"status": true
			}
			usersRef.set(data_to_submit).then(() => {})
			temp.push(`https://roulette-game-hansheng7820.web.app/#/main?token=${_uuid}`)
		}
		setLinks(temp)
	}

	const onSubmitItem = (e) => {
		e.preventDefault()

		database
			.ref()
			.child('item')
			.update(item)
			.then(() => {
				alert("Done")
			})
			.catch(() => {
				alert("Fail")
			})
	}

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<FormGroup>
					<Label>Prob (1)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 1: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (2)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 2: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (3)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 3: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (4)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 4: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (5)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 5: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (6)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 6: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (7)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 7: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (8)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 8: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (9)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 9: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (10)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 10: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (11)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 11: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Prob (12)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 12: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<Button type={"submit"}>Submit</Button>
			</Form>
			<hr />
			<Form onSubmit={onSubmitItem}>
				<FormGroup>
					<Label>(1)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 1: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(2)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 2: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(3)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 3: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(4)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 4: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(5)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 5: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(6)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 6: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(7)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 7: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(8)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 8: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(9)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 9: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(10)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 10: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(11)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 11: e.target.value}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>(12)</Label>
					<Input type="text" onChange={(e) => {
						setItem((prevState) => ({...prevState, 12: e.target.value}));
					}}/>
				</FormGroup>
				<Button type={"submit"}>Submit</Button>
			</Form>
			<hr />
			<hr />
			<Form onSubmit={onGenerateLink}>
				<FormGroup>
					<Label>Number of Participants</Label>
					<Input type="text" onChange={(e) => setNumPeople(parseInt(e.target.value))}/>
				</FormGroup>
				<Button type={"submit"}>Generate Link</Button>
			</Form>
			{
				links.map((item) => (
					<h3 key={uuidv4()}>{item}</h3>
				))
			}
		</Container>
	);
}

export default AdminDashboard;
