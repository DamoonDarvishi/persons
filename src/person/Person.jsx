import React from 'react';

const person = ({name, age, click, changed}) => {
    return ( 
        <div>
            <p onClick={click}>My name is : {name}</p>
            <p>My age is : {age}</p>
            <input type="text" onChange={changed}/>
        </div>
     );
}
 
export default person;