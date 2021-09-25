import React from "react";
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Roulette from "./pages/Roulette";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


function App() {

	return (
		<>
			<HashRouter forceRefresh={true}>
				<Switch>
					{
						localStorage.getItem('access') === '861c1dbe-1de4-11ec-9621-0242ac130002' && (
							<Route
								path='/main'
								render={() => <Roulette />}
								exact
							/>
						)
					}
					<Route
						exact
						path='/'
						render={() => <Login />}
					/>
					<Route
						exact
						path='/861c1dbe-1de4-11ec-9621-0242ac130002/admin'
						render={() => <AdminDashboard />}
					/>
					<Route component={NotFound} />
				</Switch>
			</HashRouter>
		</>
	);
}

export default App;
