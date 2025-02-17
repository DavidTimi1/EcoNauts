
import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import { useEffect } from 'react';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Mission from './components/mission';
import Innovations from './components/innovations';
import ContactUs from './components/contact';

function App() {
	const [scroll, setScroll] = useState(false);

	return (
		<>
		<NavBar scrolling={scroll} />

		<main>
			<Home />

			<About />

			<Mission />

			<Innovations />

			<ContactUs />

			<Footer />
		</main>
	
		</>
	)
	
	// function handleScroll(e){
	// 	const isScrolling = document.body.scrollTop > 10;
	// 	console.log(document.body.scrollTop, isScrolling);
	// 	scroll != isScrolling && (setScroll(isScrolling));
	// }

}

export default App
