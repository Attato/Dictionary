import React, { useMemo, useState } from 'react'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
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
	
	const isPalindrome = useMemo(() => {
		return searchValue === searchValue.split("").reverse().join("");
	  }, [searchValue]);

    return (	
		<motion.div className="index" initial="hidden" whileInView="visible">
			<Header/>
			<motion.div variants={AnimationTop} custom={4} className="airplane"></motion.div>
			<div className="wrap">		
				<div className="index__flex__column">
					<motion.div variants={AnimationTop} custom={1} className="index__titles">
						Привет<span className="blue">!</span> Я <span className="blue underline">разгадаю</span> палиндром<span className="blue">!</span>
					</motion.div>
					<input type="text" className="hidden__word" maxLength="25" value={searchValue} autoFocus={true} onChange={e => setSearchValue(e.target.value)}/>
				</div>
				<div className="words__column">

					<li>Палиндром? {isPalindrome ? "Да." : "Нет."}</li>
				</div>
			</div>
			
			<Footer/>
		</motion.div>  
    );
};

export default Index;