import React, {useEffect, useState} from "react";
import {Wheel} from "react-custom-roulette";
import {Col, Row} from "reactstrap";
import {selectData} from "../firebaseConfigs/Operations";

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
				<Row>
					<Col>.col</Col>
					<Col>.col</Col>
					<Col>.col</Col>
				</Row>
			</div>
		</>
	);
}

export default Roulette;
