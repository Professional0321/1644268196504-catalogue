import React from "react";
import { Link } from "react-router-dom";
import Box from "@tds/core-box";
import styled from "styled-components";
const Headings = styled.h1({
  display: "flex",
  justifyContent: "center",
});
const StyledLi = styled.li({
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
});
const Home = () => {
  return (
    <>
      <Box between={3}>
        <Headings>Home</Headings>
        <Headings> List of pages </Headings>
        <StyledLi>
          1-<Link to="watches">Watches</Link>
        </StyledLi>
        <StyledLi>
          2- <Link to="iphones">Iphones</Link>
        </StyledLi>
      </Box>
    </>
  );
};

export default Home;
