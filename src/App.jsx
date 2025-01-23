
import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import { useEffect } from 'react';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';

function App() {
	const [scroll, setScroll] = useState(false);
	
	useEffect(() => {
		document.querySelector(":root").onscroll = handleScroll;
		console.log(document.querySelector(":root"));
	})

	return (
		<>
		<NavBar scrolling={scroll} />

		<main>
			<Home />

			<About />
			
			<section id="shows" className="shows-section">
				<h2>Our Shows</h2>
				<div className="show-cards">
					<div className="card">
						<h3>Forest Guardians</h3>
						<p>Teams compete in real-world challenges like reforestation and biodiversity conservation.</p>
					</div>
					<div className="card">
						<h3>The Eco-Build Challenge</h3>
						<p>Design and build sustainable shelters using eco-friendly materials.</p>
					</div>
					<div className="card">
						<h3>Forest Quest</h3>
						<p>A survival competition with a focus on forest preservation and sustainability.</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	
		</>
	)
	
	function handleScroll(e){
		const isScrolling = e.target.scrollTop > 10;
		console.log(e.target.scrollTop, isScrolling)
		scroll != isScrolling && (setScroll(isScrolling));
	}

}

export default App
