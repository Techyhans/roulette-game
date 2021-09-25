import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import {database} from "../firebaseConfigs/Auth";

function AdminDashboard() {

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
			.then((res) => {
				alert("Done")
			})
			.catch((e) => {
				alert("Fail")
			})
	}

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<FormGroup>
					<Label>Nitendo Switch (1)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 1: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Marshall Emberton Portable (2)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 2: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Lenovo 23.8 inch L24i-30 IPS GHD 75hz 4ms AMD (3)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 3: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Nothing (4)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 4: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Logitech G402 Hyperion Fury Wired Gaming Mouse (5)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 5: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Logitech Z333 2.1 Multimedia Speaker System 6)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 6: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Nothing (7)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 7: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Xiaomi Xiaoai Speaker Play Enhanced Infrared Remote Control (8)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 8: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Aula S2056 Membrane Gaming Keyboard (9)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 9: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Nothing (10)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 10: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>ZEALOT Portable TWS Bluetooth Speaker Subwoofer 3D Bass (11)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 11: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<FormGroup>
					<Label>Powerbank (Pineng 10000 MAH) (12)</Label>
					<Input type="number" onChange={(e) => {
						setForm((prevState) => ({...prevState, 12: parseFloat(e.target.value) * 10}));
					}}/>
				</FormGroup>
				<Button type={"submit"}>Submit</Button>
			</Form>
		</Container>
	);
}

export default AdminDashboard;
