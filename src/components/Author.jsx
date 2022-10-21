import React from 'react';
import { useState } from 'react';


const Author = ({nameAuthor}) => {
    return (
        <div className='Author'>
            <p>{nameAuthor}</p>
        </div>
    );
};

export default Author;