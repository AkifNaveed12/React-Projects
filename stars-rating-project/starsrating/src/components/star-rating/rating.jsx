import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './styles.css'

const Rating = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    //functions
    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }


    return (
        <div className='star-rating'>
            <div className='box'>
                <h1>Star Rating <span>Visulalizer</span></h1>
            <div className='stars'>
            {
            [...Array(noOfStars)].map((_,index) => {
                index += 1;   //validating that map starts from index 1
                return  (
                <FaStar 
                key={index}
                onClick={ () => handleClick(index)}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onMouseMove={ () => handleMouseEnter(index)}
                onMouseLeave={ () => handleMouseLeave()}
                size={40}
                />

                );
            })}
            </div>
            </div>
        </div>
    );
}

export default Rating;
