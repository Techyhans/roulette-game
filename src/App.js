import React from "react";
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Roulette from "./pages/Roulette";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
	return (
		<>
			<HashRouter>
				<Route
					exact={true}
					path='/'
					render={() => <Roulette />}
				/>
				<Route
					exact={true}
					path='/861c1dbe-1de4-11ec-9621-0242ac130002/admin'
					render={() => <AdminDashboard />}
				/>
			</HashRouter>
		</>
	);
}

export default App;
