import {useState, useEffect} from 'react';
import '../index.css';

const DayNightToggle = ({}) => {
    const [isDark,setIsDark]= useState(false);
    
    useEffect(()=> {
        document.body.className= isDark ? 'dark-mode' : 'light-mode'; 

        // change all cards class
        const cards = document.querySelectorAll('.cards');
        cards.forEach(card => {
            card.className = `card ${isDark ? 'dark-mode': 'light-mode'}`;
        });

        const avatar = document.querySelector('.Avatar');
        if (avatar) {
        avatar.className = `avatar ${isDark ? 'dark-mode' : 'light-mode'};`
        }

        const toggle = document.querySelector('.toggle');
        if (toggle) {
            toggle.classList.remove ('dark-mode', 'light-mode'); 
            toggle.classList.add(isDark ? 'dark-mode' : 'light-mode');
        }
    }, [isDark]);

    return (
        <button onClick={() => setIsDark(prev => !prev)}>
            {isDark ? "☀️" : "🌙"}
        </button>
    )
}

export default DayNightToggle;