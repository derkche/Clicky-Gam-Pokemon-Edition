import React, { Component } from "react";
import PokemonCard from "../PokemonCard";
import Header from "../Header";
import friends from "../../pokemon.json";
import "./Game.css";

class Game extends Component {
	state = {
		friends,
		message: "Click on any image to begin!",
		score: 0,
		maxScore: 0
	};

	handleClick = (id, clicked) => {

		const imageOrder = this.state.friends;

		if (clicked === true) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Sorry, you guessed that one already...",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});
			const { maxScore, score } = this.state;
			const newScore = score + 1;
			const newmaxScore = newScore > maxScore ? newScore : maxScore;
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Keep going!",
				score: newScore,
				maxScore: newmaxScore,
			})
		}
	};

	render() {
		return (
			<div className="wrapper">
				<Header />
				<div className="row d-flex justify-content-center message-bar">
					<p className="gameMessage"> {this.state.message}</p>
					<p className="gameScores">Score: {this.state.score} | Max Score: {this.state.maxScore}</p>
				</div>
				<div className="container">
					<div className="row d-flex justify-content-center">
						{this.state.friends.map(image => (
							<PokemonCard
								key={image.id}
								id={image.id}
								name={image.name}
								clicked={image.clicked}
								image={image.image}
								handleClick={this.handleClick}
							/>
						))}
					</div>

				</div>
			</div>
		);
	}
};

export default Game;