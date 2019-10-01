import React from 'react';

const Square = (props) => {
        return(
            <button className="square" onClick={()=>props.onClick()} style={{width:50, height:50, padding: '16px'}}>
                {props.value}
            </button>
        );
}

export default Square;