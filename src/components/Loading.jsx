import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import img from '../loading_spinner.gif'

const StyledLoading = styled.div`
  /* height: 30vh; */
`;

let Loading = ({ loading }) => (


  loading ?
    <StyledLoading style={{ textAlign: 'center' }}>
      <img data-testid="loading-img-elements" src={img} alt='loading' />
      <h1>LOADING</h1>
    </StyledLoading> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Loading = connect(
  mapStateToProps,
  null
)(Loading)


export default Loading;


