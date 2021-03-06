import React, { Component } from 'react';
import Style from './Top.css';
import Logo from '../SVG';

export class Page extends Component {
	constructor() {
		super();
		this.state = {
			phone: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ phone: event.target.value });
	}
	render() {
		return (
			<div className="header-container">
				<Logo className="logo" />
				<header className="head-container">
					<h1>Drive toward what matters.</h1>
					<p className="text-container">Sign up to drive</p>
					<p className="text-container">
						Let's start with your phone number - we'll text you a code to verify your phone.
					</p>
				</header>
				<main>
					<form>
						<label>
							<input className="radio-button" type="radio" name="car" /> I have a car
							<input className="radio-button" type="radio" name="car" /> I need a car
						</label>
						<br />
						<input
							className="phone-number-box"
							type="number"
							name="numbers"
							placeholder="Mobile Phone Number"
							value={this.state.phone}
							onChange={this.handleChange}
							required
						/>
						<input className="agree-checkbox" type="checkbox" name="agree" required /> I agree to {''}
						<a target="_self" href="#">
							Terms of Service
						</a>
						<br />
						<button className="next-button">Next</button>
						<p>Already applied?</p>
						<a target="_self" href="#">
							Check the status of your application here
						</a>
					</form>
				</main>
			</div>
		);
	}
}

export default Page;
