import React, {useEffect, useState} from "react";
import {Wheel} from "react-custom-roulette";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {selectData} from "../firebaseConfigs/Operations";
import {database} from "../firebaseConfigs/Auth";
import {useHistory} from "react-router-dom";

const data = [
	{id: 1, option: 1},
	{id: 2, option: 2},
	{id: 3, option: 3},
	{id: 4, option: 4},
	{id: 5, option: 5},
	{id: 6, option: 6},
	{id: 7, option: 7},
	{id: 8, option: 8},
	{id: 9, option: 9},
	{id: 10, option: 10},
	{id: 11, option: 11},
	{id: 12, option: 12},
];

function Roulette() {
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [firebaseData, setFirebaseData] = useState({})
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

	const history = useHistory()
	if(localStorage.getItem('access') !== '861c1dbe-1de4-11ec-9621-0242ac130002') {
		history.push('/')
	}

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
			.child('probs-chart')
			.update(form)
			.then(() => {
				alert("Done")
			})
			.catch(() => {
				alert("Fail")
			})
	}

	useEffect(() => {
		async function fetchData() {
			await selectData().then((snapshot) => {
				const response = {}
				snapshot.forEach((item) => {
					response[item.key] = item.val()
				})
				setFirebaseData(response)
			})
		}

		fetchData()
	}, [])

	const selectPrizeClass = (prizeNumber) => {
		let currIdx = 0;
		for (let x of Array(12).keys()) {
			x += 1;
			currIdx += firebaseData[x];
			if (prizeNumber <= currIdx) {
				return x-1;
			}
		}
	}

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * 1000) + 1;

		setPrizeNumber(selectPrizeClass(newPrizeNumber));
		setMustSpin(true);
	};

	return (
		<>
			<div align="center">
				<h1 align="center">Roulette Game</h1>
				<hr/>
				<Wheel
					mustStartSpinning={mustSpin}
					prizeNumber={prizeNumber}
					data={data}
					outerBorderColor={["#f2f2f2"]}
					outerBorderWidth={[5]}
					innerBorderColor={["#f2f2f2"]}
					radiusLineColor={["#dedede"]}
					radiusLineWidth={[10]}
					textColors={["#ffffff"]}
					fontSize={[20]}
					perpendicularText={[true]}
					backgroundColors={[
						"#F22B35",
						"#F99533",
						"#24CA69",
						"#514E50",
						"#46AEFF",
						"#9145B7",
						"#F79256",
						"#FBD1A2",
						"#7DCFB6",
						"#00B2CA",
						"#914511",
						"#fAd1C9",
					]}
					onStopSpinning={() => {
						setMustSpin(false);
					}}
				/>
				<button className="btn btn-primary" onClick={handleSpinClick}>
					SPIN
				</button>
				<br/>
				{!mustSpin ? (
					<h3>Your number is {data[prizeNumber].option}</h3>
				) : (
					<h3>0</h3>
				)}
				<hr/>
				<Container>
					<Form onSubmit={onSubmit}>
						<Row>
							<Col>
								<FormGroup>
									<Label>Nitendo Switch (1)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 1: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Marshall Emberton Portable (2)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 2: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Lenovo 23.8 inch L24i-30 IPS GHD 75hz 4ms AMD (3)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 3: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Nothing (4)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 4: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Logitech G402 Hyperion Fury Wired Gaming Mouse (5)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 5: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Logitech Z333 2.1 Multimedia Speaker System (6)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 6: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<FormGroup>
									<Label>Nothing (7)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 7: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Xiaomi Xiaoai Speaker Play Enhanced Infrared Remote Control (8)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 8: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Aula S2056 Membrane Gaming Keyboard (9)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 9: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Nothing (10)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 10: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>ZEALOT Portable TWS Bluetooth Speaker Subwoofer 3D Bass (11)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 11: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label>Powerbank (Pineng 10000 MAH) (12)</Label>
									<Input type="number" onChange={(e) => {
										setForm((prevState) => ({...prevState, 12: parseFloat(e.target.value) * 10}));
									}}/>
								</FormGroup>
							</Col>
						</Row>
						<Button type={"submit"}>Submit</Button>
					</Form>
				</Container>
			</div>
		</>
	);
}

export default Roulette;
