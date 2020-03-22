// import React from 'react'
// //link to navigate


// export default NavBar


import React from 'react';
import { connect } from 'react-redux';
import { getLaunches } from '../actions/launchesActions'

// const NavBar = () => {
//   return (
//     <>
//     <div>
//       <button id="" className="">
//        HISTORY PAGE
//       </button>
//     </div>
//     </>
//   )
// }

let styles = {
  backgroundColor: 'grey',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'green ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getLaunches}
      >Press to see Launches</button>
    );
  }

};

const mapDispatchToProps = {
  getLaunches: getLaunches,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
