import React from "react";
import { request } from 'graphql-request';
import styled from "styled-components";
import { 
  StyledContainer,
} from '../primitives';

const BlogListContainer = styled.div`
  text-align: left;
  padding: 0 0 20em 0;
`

export const BlogList = (props) => {
  return (
    <StyledContainer>
      <BlogListContainer>
        <h1>Hello. This is a blog listing.</h1>
        <p>
          Please replace the contents of this file with the code required
          to replicate (as closely as possible) as the blog listing details
          from https://blog.dwellsy.com/.
        </p>

        <p>
          Please try to mimic the existing styles as closely as possible 
          using whatever tools and techniques you prefer. 
        </p>

        <p>
          At a minimum, we're looking to have 
        </p>
        <ol>
          <li>A list of blog articles</li>
          <li>in a card-like format</li>
          <li>using the data feed provided in App.tsx</li>
          <li>Ignore the low-quality placeholder hero component. It's a work in progress. </li>
          <li>Make any other changes as necessary to deliver a functional application</li>
          <li>Feel free to reuse any or all of the components provided.</li>
        </ol>
      </BlogListContainer>
    </StyledContainer>
  )
}