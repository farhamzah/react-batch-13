import React from 'react'

export const MyButton = (props) => {
    return (
        <button 
        onClick = {props.changeMyNum}
          type="button"
          className="btn btn-secondary rounded-0"
          style={{width: "125px"}}
        > {props.myButton}
        </button>
    )
}

export default MyButton;