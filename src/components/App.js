import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgesNew";
import BadgesEdit from "../pages/BadgesEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

class App extends Component {
	render() {
		return (
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/badges" component={Badges} />
						<Route exact path="/badges/new" component={BadgesNew} />
						<Route
							exact
							path="/badges/:badgeId"
							component={BadgeDetailsContainer}
						/>
						<Route exact path="/badges/:badgeId/edit" component={BadgesEdit} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</Router>
		);
	}
}

export default App;
