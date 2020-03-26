import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import img from '../loading_spinner.gif'

const StyledLoading = styled.div`
  height: 30vh;
`;

let Laoading = ({ loading }) => (


  loading ?
    <StyledLoading style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>LOADING</h1>
    </StyledLoading> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Laoading = connect(
  mapStateToProps,
  null
)(Laoading)


export default Laoading;


