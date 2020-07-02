import React from 'react';
import Style from './Middle-2.css';

function MiddleTwo() {
	return (
		<main className="middle-container">
			<div className="middle-container__text">
				<h2> What is Lyft?</h2>
				<p>
					Lyft matches drivers with passengers who request rides through our smartphone app,
					<br />and passengers pay automatically through the app.
				</p>

				<p>
					Whether you’re trying to offset costs of your car, cover this month’s bills, or fund your <br />
					dreams, Lyft will get you there. So, go ahead. Be your own boss.
				</p>
				<div>
					<h2>Why Lyft?</h2>
					<ul className="middle-container__imgtext">
						<img src="https://cdn.lyft.com/brochure/drive-for-lyft-tip.7440fd0f.svg" />
						<li>Keep Your Tips</li>
						<img src="https://cdn.lyft.com/brochure/drive-for-lyft-pay.5aee158d.svg" />
						<li>Make More Money</li>
						<img src="https://cdn.lyft.com/brochure/drive-for-lyft-community.fcd40aa7.svg" />
						<li>Best Community</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
export default MiddleTwo;
