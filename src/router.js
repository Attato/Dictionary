import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Index from "pages/Index";
import Tickets from 'pages/Tickets';
import NotFound from "pages/Error";

const Router = () => {
    const location = useLocation();

    return(
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/AirTickets" element={<Index />} />  
                <Route path="/Tickets" element={<Tickets />} />  
                <Route path="*" element={<NotFound />} />             
            </Routes>
        </AnimatePresence>
    ) 
}

export default Router;