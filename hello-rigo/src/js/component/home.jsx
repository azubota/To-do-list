import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
//create your first component
class TodoList extends React.Component {
	//initial setup
	constructor() {
		super();
		this.state = {
			todos: ["walk the dog"],
			input: ""
		};
	}
	//Enter Function
	hakuna = e => {
		if (e.key === "Enter") {
			let x = this.state.todos;
			let y = this.state.input;
			if (y == "" || y == " ") {
				this.setState({ todos: x, input: "" });
			} else {
				x.push(this.state.input);
				this.setState({ todos: x, input: "" });
			}
		}
	};

	//input reciever
	matata = e => {
		this.setState({ input: e.target.value });
	};
	mufasa = ind => {
		let x = this.state.todos;
		x.splice(ind, 1);
		this.setState({ todos: x });
	};
	//render
	render() {
		return (
			<div className="bg-warning d-flex flex-wrap row">
				<input
					onKeyPress={this.hakuna}
					onChange={this.matata}
					value={this.state.input}
					className="p-1 col-12"
					placeholder="What needs to be done?"
				/>
				<ul className="col-12 m-0">
					<div className="row">
						{this.state.todos.map((coco, any) => {
							return (
								<div
									className="col-12 border border-danger bg-success pt-2 pb-2 pl-3 pr-3 w-10 mw-100"
									key={any}
									onClick={() => this.mufasa(any)}>
									<li>{coco}</li>
								</div>
							);
						})}
					</div>
				</ul>
			</div>
		);
	}
}
export class Home extends React.Component {
	render() {
		return (
			<div
				id="mainMan"
				className="bg-primary container-fluid d-flex justify-content-center flex-column row">
				<div className="mx-auto fixed-top col-6 mt-5">
					<div id="title" className="d-flex justify-content-center">
						<h2>TO DO</h2>
					</div>
					<div id="mainContainer">
						<TodoList />
					</div>
				</div>
			</div>
		);
	}
}
