import React, { useState } from 'react'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { allWords } from './words';
import { motion } from 'framer-motion';
import "./Index.scss"

const AnimationTop = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
		transition: {delay: custom * 0.2},
    }),
}


const Index = () => {	
	const [searchValue, setSearchValue] = useState("")


    return (	
		<motion.div className="index" initial="hidden" whileInView="visible">
			<Header/>
			<motion.div variants={AnimationTop} custom={4} className="airplane"></motion.div>
			<div className="wrap">		
				<div className="index__flex__column">
					<motion.div variants={AnimationTop} custom={1} className="index__titles">
						Привет<span className="blue">!</span> Какое <span className="blue underline">загадал</span> слово<span className="blue">?</span>
					</motion.div>
					<input type="text" className="hidden__word" maxLength="25" value={searchValue} autoFocus={true} onChange={e => setSearchValue(e.target.value)}/>
				</div>
				<div className="words__column">
					{allWords
					.filter(allWords => allWords.match(new RegExp(searchValue, "i")))
					.sort(function(a, b) {
						return b.length - a.length;
					})			
					.map(allWords => {
						if(searchValue.length >= 2) {
							return <li key={allWords}>{allWords.length}. {allWords}</li>
						}
					})}
				</div>
			</div>
			
			<Footer/>
		</motion.div>  
    );
};

export default Index;