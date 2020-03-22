// import React from 'react'
// import Button from '../Button'
import React from 'react';
import { connect } from 'react-redux'
import { getLaunches } from '../../actions/launchesActions'


// const imgStyle = {
//   hight: 'auto',
//   width: '80%',
//   border: '4px solid RebeccaPurple ',
//   borderRadius: '5%'
// };
class Launches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
componentDidMount() {
  this.props.getLaunches();
}

// const launchesStyle = {
//   width: '50%',
//   margin: '0 auto',
//   color: 'olive'
// }
// const errorMessage = {
//   color: 'red'
// }

render(launches){
console.log('==>>', launches)
  return (launches ?
     (<div >
      {launches.error && <h2>{launches.error}</h2>}
      {launches.mission_name && <div>
        <h1>{launches.launch_year}</h1>
        {/* <img style={imgStyle} src={launches.urlToImage} alt="" /> */}
        {/* <h2>{launches.description}</h2> */}
        {/* <a href={launches.url} target="_blank">READ MORE</a> */}
      </div>}
    </div> ) :
    'null')
      };
      }

const mapStateToProps = (state) => ({
  launches: state.Launches,
})

Launches = connect(
  mapStateToProps,
  {getLaunches},
  null
)(Launches)

export default Launches;


