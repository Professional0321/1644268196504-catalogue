import 'regenerator-runtime/runtime'
import React, { useState, useEffect } from "react";
import Heading from "@tds/core-heading";
import Card from "@tds/core-card";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import PriceLockup from "@tds/core-price-lockup";
import Image from "@tds/core-image";
import Text from "@tds/core-text";
import { colorTelusPurple } from "@tds/core-colours";
import styled from "styled-components";
import iPhoneImg from '../../static/img/iphone.jpg'

const StyledParagraph = styled.p({
  color: colorTelusPurple,
});
const Headings = styled.h1({
  display: "flex",
  justifyContent: "center",
});
const IPhones = () => {
  const [iPhoneDatas, setIphoneDatas] = useState([]);

  useEffect(() => {
    (async () => {
      fetch('http://localhost:8081/iphones')
        .then(response => response.json()).then(data => setIphoneDatas(data.data))
    })()
  }, [])

  return (
    <>
      <Headings>IPhones</Headings>
      <FlexGrid>
        <FlexGrid.Row>
          {iPhoneDatas && iPhoneDatas.length > 0 && iPhoneDatas.map((ev, index) => (
            <FlexGrid.Col key={`iphone-${index}`}>
              <Card variant="defaultWithBorder">
                <Box vertical={3}>
                  <Image
                    src={iPhoneImg}
                    rounded="corners"
                    width={200}
                    height={200}
                    alt="Iphone"
                  />
                  <Heading level="h4">{ev.name}</Heading>
                  <StyledParagraph>{ev.brand}</StyledParagraph>
                  <Box between={1}>
                    <PriceLockup
                      size="small"
                      price="55"
                      bottomText="Telus easy Payment Applied. Taxes due upfront"
                      signDirection="left"
                    />
                    <Text> Retail price:${ev.price}</Text>
                  </Box>
                </Box>
              </Card>
            </FlexGrid.Col>
          ))}
        </FlexGrid.Row>
      </FlexGrid>
    </>
  );
};

export default IPhones;
