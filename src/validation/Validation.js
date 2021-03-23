import React from 'react';

const validation = (props) => {

    let validationText = 'This is good';

    if(props.inputLength <= 5) {
        validationText = 'This name must be 5 characture'
    }

    return ( 
        <div>
            <p>{validationText}</p>
        </div>
     );
}
 
export default validation;