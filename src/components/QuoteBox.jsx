import React from 'react';


const QuoteBox = ({phrase}) => {
    return (
        <div className='phrase'>
            <i className="fa-solid fa-quote-left"></i>
            <p>{phrase}</p>
        </div>
    );
};

export default QuoteBox;