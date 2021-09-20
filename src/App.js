import React, {useState} from "react";
import {Wheel} from "react-custom-roulette";
import './App.css';

const data = [
	{id: 1, option: 10},
	{id: 2, option: -30},
	{id: 3, option: 50},
	{id: 4, option: 30},
	{id: 5, option: 40},
	{id: 6, option: 20},
	{id: 7, option: 20},
	{id: 8, option: 20},
	{id: 9, option: 20},
	{id: 10, option: 20},
	{id: 11, option: 20},
	{id: 12, option: 20},
];

function App() {
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
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
					fontSize={[50]}
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
				<button className="button2" onClick={handleSpinClick}>
					SPIN
				</button>
				<br/>
				{!mustSpin ? data[prizeNumber].option : "0"}
				<hr/>
			</div>
		</>
	);
}

export default App;
