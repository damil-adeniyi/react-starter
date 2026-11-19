import './card.css';

function Cards() {
	return (
        <section class="card-container">
            
            {/* CSS Card  */}
			<div class="card css-card">
				<div class="logo-wrapper">
					<svg viewBox="0 0 128 128" xmlns="http://w3.org">
						<path
							fill="#264DE4"
							d="M18.8 114.1L8.7 1.4h110.6l-10.1 112.7-45.3 12.5z"
						/>
						<path fill="#2965F1" d="M64 117l36.6-10.1 8.6-96.3H64z" />
						<path
							fill="#EBEBEB"
							d="M64 51.4H45.7l-1.3-14.2H64V23.4H29.3l.3 3.7 3.4 38.1H64V51.4zm0 35.9h-.1l-15.4-4.2-1-11H33.6l1.9 21.7 28.4 7.9h.1V87.3z"
						/>
						<path
							fill="#FFFFFF"
							d="M63.9 51.4v13.8h17l-1.6 17.9-15.4 4.2v14.4l28.4-7.9.2-2.3 3.3-36.4.3-3.7H63.9zm0-28v13.8h33.4l.3-3.1.6-7 .3-3.7H63.9z"
						/>
					</svg>
				</div>
				<h2>CSS</h2>
				<p>
					Cascading Style Sheets control the visual presentation, layout,
					responsive grids, and animations of modern websites.
				</p>
				<a href="#css" class="card-btn css-btn">
					Learn CSS
				</a>
			</div>

			{/* JavaScript Card */}
			<div class="card js-card">
				<div class="logo-wrapper">
					<svg viewBox="0 0 128 128" xmlns="http://w3.org">
						<rect width="128" height="128" rx="16" fill="#F7DF1E" />
						<path
							d="M86.2 96.3c2.8 4.6 6.5 8 13 8 5.5 0 9-2.7 9-6.5 0-4.5-3.6-6.1-9.6-8.7l-3.3-1.4c-9.5-4-15.8-9.1-15.8-19.8 0-9.9 7.5-17.4 19.3-17.4 8.4 0 14.4 2.9 18.7 10.6l-10.2 6.6c-2.3-4-4.7-5.6-8.5-5.6-3.9 0-6.3 2.4-6.3 5.6 0 3.9 2.4 5.5 8 7.9l3.3 1.4c11.2 4.8 17.5 9.7 17.5 20.7 0 11.9-9.3 18.4-21.9 18.4-12.3 0-20.2-5.8-24.1-13.5l10.9-6.3zm-46.8 1.2c2.1 3.7 4 6.9 8.6 6.9 4.4 0 7.2-1.7 7.2-8.4V51.4h13.4v44.8c0 13.6-8 19.8-19.6 19.8-10.5 0-16.6-5.4-19.7-12l10.1-6.5z"
							fill="#000000"
						/>
					</svg>
				</div>
				<h2>JavaScript</h2>
				<p>
					The programming language of the web. Used to create dynamic,
					interactive user experiences and full-stack applications.
				</p>
				<a href="#javascript" class="card-btn js-btn">
					Learn JavaScript
				</a>
			</div>

			{/* React Card */}
			<div class="card react-card">
				<div class="logo-wrapper">
					<svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://w3.org">
						<circle cx="0" cy="0" r="2.05" fill="#61dafb" />
						<g stroke="#61dafb" stroke-width="1" fill="none">
							<ellipse rx="11" ry="4.2" />
							<ellipse rx="11" ry="4.2" transform="rotate(60)" />
							<ellipse rx="11" ry="4.2" transform="rotate(120)" />
						</g>
					</svg>
				</div>
				<h2>React</h2>
				<p>
					A declarative JavaScript library for building fast, component-based
					user interfaces for web and native platforms.
				</p>
				<a href="#react" class="card-btn react-btn">
					Learn React
				</a>
			</div>
			
		</section>
	);
}

export { Cards };
