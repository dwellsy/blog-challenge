import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  padding-top: 20vh;
`

export const Loading = () => {
  return <LoadingContainer><img src="/images/loading.gif" alt="Loading" /></LoadingContainer>
}