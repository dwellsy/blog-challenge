import React from 'react';
import styled from 'styled-components';
import { 
  StyledCircularButton, 
  StyledContainer,
  StyledTitle,
} from '../primitives';
import { Avatar } from './Avatar';

const StyledMarquee = styled.div`
  position: absolute;
  left: 10vw;
  top: 10%;
  color: white;
  text-align: left;
  padding-top: 2em;
`

const StyledHeader = styled.div`
  text-align: left;
  position: relative;
  height: 740px;
  background-image: url("https://i2.wp.com/blog.dwellsy.com/wp-content/uploads/2020/08/voting-picture-id1198958341.jpg?w=1200&amp");
  background-size: cover;
`

export const Hero = (props) => {
  console.log(props.post);

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledMarquee><Avatar text={props.post.category} /></StyledMarquee>
        <StyledTitle>{props.post.title}!</StyledTitle>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Hero;