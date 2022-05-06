import React from "react";
import Heading from "@tds/core-heading";
import Card from "@tds/core-card";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import PriceLockup from "@tds/core-price-lockup";
import Image from "@tds/core-image";
import Text from "@tds/core-text";
import { colorTelusPurple } from "@tds/core-colours";
import styled from "styled-components";

const StyledParagraph = styled.p({
  color: colorTelusPurple,
});
const Headings = styled.h1({
  display: "flex",
  justifyContent: "center",
});
const IPhones = () => {
  return (
    <>
      <Headings>IPhones</Headings>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col>
            <Card variant="defaultWithBorder">
              <Box vertical={3}>
                <Image
                  src="https://media.istockphoto.com/photos/silver-colored-mobile-phone-mockup-with-white-screen-picture-id1307689983?b=1&k=20&m=1307689983&s=170667a&w=0&h=-Cd7BTXZst6gDpkO_j19j2qz9XanY9YCdjtem25vG8w="
                  rounded="corners"
                  width={200}
                  height={200}
                  alt="Iphone"
                />
                <Heading level="h4">HUAWEI</Heading>
                <StyledParagraph>P30 Lite</StyledParagraph>
                <Box between={1}>
                  <PriceLockup
                    size="small"
                    price="55"
                    bottomText="Telus easy Payment Applied. Taxes due upfront"
                    signDirection="left"
                  />
                  <Text> Retail price:$470</Text>
                </Box>
              </Box>
            </Card>
          </FlexGrid.Col>
          <FlexGrid.Col>
            <Card variant="defaultWithBorder">
              <Box vertical={2}>
                <Image
                  src="https://media.istockphoto.com/photos/silver-colored-mobile-phone-mockup-with-white-screen-picture-id1307689983?b=1&k=20&m=1307689983&s=170667a&w=0&h=-Cd7BTXZst6gDpkO_j19j2qz9XanY9YCdjtem25vG8w="
                  rounded="corners"
                  width={200}
                  height={200}
                  alt="Iphone"
                />
                <Heading level="h4">HUAWEI</Heading>
                <StyledParagraph>P30 Lite</StyledParagraph>
                <Box between={3}>
                  <PriceLockup
                    size="small"
                    price="55"
                    bottomText="Telus easy Payment Applied. Taxes due upfront"
                    signDirection="left"
                  />
                  <Text> Retail price:$470</Text>
                </Box>
              </Box>
            </Card>
          </FlexGrid.Col>
          <FlexGrid.Col>
            <Card variant="defaultWithBorder">
              <Box vertical={2}>
                <Image
                  src="https://media.istockphoto.com/photos/silver-colored-mobile-phone-mockup-with-white-screen-picture-id1307689983?b=1&k=20&m=1307689983&s=170667a&w=0&h=-Cd7BTXZst6gDpkO_j19j2qz9XanY9YCdjtem25vG8w="
                  rounded="corners"
                  width={200}
                  height={200}
                  alt="Iphone"
                />
                <Heading level="h4">HUAWEI</Heading>
                <StyledParagraph>P30 Lite</StyledParagraph>
                <Box between={3}>
                  <PriceLockup
                    size="small"
                    price="55"
                    bottomText="Telus easy Payment Applied. Taxes due upfront"
                    signDirection="left"
                  />
                  <Text> Retail price:$470</Text>
                </Box>
              </Box>
            </Card>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </>
  );
};

export default IPhones;
