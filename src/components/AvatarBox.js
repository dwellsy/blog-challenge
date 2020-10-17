import React from "react";
import styled from "styled-components";

const AvatarBoxDiv = styled.div`
  background-color: rgb(0, 0, 0);
  font-weight: 400;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.9px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
`

const LargeAvatarBoxDiv = styled(AvatarBoxDiv)`
  height: 64px;
  width: 64px;
  font-size: 48px;
`

const SmallAvatarBoxDiv = styled(AvatarBoxDiv)`
  height: 24px;
  width: 24px;
  font-size: 12px;
`

export const AvatarBox = (props) => {
  const letter = props.text[0];

  if(props.size && props.size === "small")
    return <SmallAvatarBoxDiv>{letter}</SmallAvatarBoxDiv>

  return <LargeAvatarBoxDiv>{letter}</LargeAvatarBoxDiv>
}