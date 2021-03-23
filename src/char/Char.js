import React from 'react';

const char = (props) => {

    const styles = {
        border: '1px solid #000',
        display: 'inline-block',
        margin: '5px',
        padding: '15px 15px',
        fontSize: '25px',
        borderRadius: '5px',
        textAlign: 'center',
        color: 'blue'
    }
    return ( 
        <div style={styles} onClick={props.click}>
            {props.character}
        </div>
     );
}
 
export default char;