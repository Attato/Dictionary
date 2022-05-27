import React, { useState } from 'react'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { Link } from 'react-router-dom';
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

console.log(allWords)
const Index = () => {	
    return (	
		<motion.div className="index" initial="hidden" whileInView="visible">
			<Header/>
			<motion.div variants={AnimationTop} custom={4} className="airplane"></motion.div>
			<div className="wrap">		
				<div className="index__flex__column">
					<motion.div variants={AnimationTop} custom={1} className="index__titles">
						Привет<span className="blue">!</span> Какое <span className="blue underline">загадал</span> слово<span className="blue">?</span>
					</motion.div>
					<input type="text" className="hidden__word" maxLength="25" autoFocus={true}/>
				</div>
			</div>
			<Footer/>
		</motion.div>  
    );
};

export default Index;