import React from "react";
import styled from "styled-components";
import { AvatarBox } from "./AvatarBox";

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-justify: center;
  align-items: center;
`

const Separator = styled.div`
  color: rgb(255, 255, 255);
  display: inline;
  margin: 0 0.5em 0 0.5em;
  ::before {
    content: "-";
  }
`

export const Avatar = (props) => {
  return (
    <AvatarContainer>
      <AvatarBox text={props.text} /> 
      <Separator />
      {props.text}
    </AvatarContainer>
  )
}