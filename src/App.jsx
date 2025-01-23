
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
		document.body.onscroll = handleScroll;
	})

	return (
		<>
		<NavBar scrolling={scroll} />

		<main>
			<Home />

			<About />
			
			<section id="shows" class="shows-section">
				<h2>Our Shows</h2>
				<div class="show-cards">
					<div class="card">
						<h3>Forest Guardians</h3>
						<p>Teams compete in real-world challenges like reforestation and biodiversity conservation.</p>
					</div>
					<div class="card">
						<h3>The Eco-Build Challenge</h3>
						<p>Design and build sustainable shelters using eco-friendly materials.</p>
					</div>
					<div class="card">
						<h3>Forest Quest</h3>
						<p>A survival competition with a focus on forest preservation and sustainability.</p>
					</div>
				</div>
			</section>
	
			<section id="about" class="about-section">
				<h2>About Us</h2>
				<p>At Forest Futures, we combine entertainment and education to promote sustainability and forest conservation.
				   Join us in our journey to create a greener future.</p>
			</section>

			<Footer />
		</main>
	
		</>
	)
	
	function handleScroll(e){
		const isScrolling = e.target.scrollTop > 10;
		scroll != isScrolling && (setScroll(isScrolling));
	}

}

export default App
