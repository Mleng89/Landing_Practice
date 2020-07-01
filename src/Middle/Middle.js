import React from 'react';
import Style from './Middle.css';

function Middle() {
	return (
		<div className="middle-car-block">
			<section className="no-car-text">
				<h2>Don't have a car? </h2>
				<h3>Get a flexible rental with Lyft Express Drive</h3>
			</section>
			<div className="list-items">
				<ul>
					<li>Drive your way</li>
					<p>Get a car any time—and return it when you want.</p>
					<li>Cut Costs</li>
					<p>Insurance and standard maintenance are always included.</p>
					<li>Unlimited Lyft Miles</li>
					<p>Drive unlimited miles for Lyft and get extra miles for personal use.</p>
				</ul>
			</div>
			<p>
				The more you drive, the less you pay with all inclusive rentals designed to help you earn on your terms.
			</p>
			<a target="_self" href="#">
				Learn more
			</a>
		</div>
	);
}

export default Middle;
