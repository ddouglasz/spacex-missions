import React from 'react';

let styles = {
  backgroundColor: 'grey',
  width: '50px',
  height: '30px',
  borderRadius: '3px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

const Button = ({
  classes,
  // disabled,
  submit = false,
  name,
  id
}) => {
  return (
    <button
      style={{ ...styles, backgroundColor: 'green ', cursor: 'pointer'}}
      className={classes}
      type={submit ? 'submit' : 'button'}
      // disabled={disabled}
      onClick={props}
      // id={id}
    >
      {name}
    </button>
  )
}


export default Button;
