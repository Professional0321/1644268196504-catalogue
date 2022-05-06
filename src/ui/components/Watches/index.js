import React from 'react';
import Heading from '@tds/core-heading';
import Card from '@tds/core-card'
import FlexGrid from "@tds/core-flex-grid";
import Box from '@tds/core-box'
import HairlineDivider from '@tds/core-hairline-divider'
import PriceLockup from '@tds/core-price-lockup'
import CalloutParagraph from '@tds/community-callout-paragraph'
import Image from '@tds/core-image'
import Text from "@tds/core-text";
import styled from 'styled-components';
import { colorTelusPurple } from '@tds/core-colours'
import WatchImg from '../../static/img/watch.jpg'

const StyledParagraph = styled.h2({
    color: colorTelusPurple,
    fontWeight: 500,
    fontSize: 19
})
const Headings = styled.h1({
    display: "flex",
    justifyContent: "center"
})

const Watches = () => {

    return (
        <>
            <Headings >
                Watches
            </Headings>
            <FlexGrid >
                <FlexGrid.Row>
                    <FlexGrid.Col >
                        <Card variant="defaultWithBorder">
                            <Box vertical={2}>
                                <Image
                                    src={WatchImg}
                                    rounded="corners"
                                    width={150}
                                    height={150}
                                    alt="watch"
                                />
                                <Heading level="h4">Apple</Heading>
                                <StyledParagraph>Watch Series 6(GPS+Cellular)-Stainless Steel</StyledParagraph>
                                <Box between={3}>
                                    <Box inline between={3}>
                                        <Box between={0}>
                                            <PriceLockup
                                                size="small"
                                                price="55"
                                                rateText="/mo."
                                                signDirection="left"
                                            />
                                        </Box>
                                        <HairlineDivider vertical />
                                        <Box between={0}>
                                            <PriceLockup
                                                size="small"
                                                price="55"
                                                rateText="Upfront"
                                                signDirection="left"
                                            />
                                        </Box>
                                    </Box>
                                    <CalloutParagraph className='marginLines'>
                                        Get 3 month of Apple Fitness + free when you buy an Apple Watch
                                    </CalloutParagraph>
                                    <Text>Retail Price: $935</Text>
                                </Box>
                            </Box>
                        </Card>
                    </FlexGrid.Col>
                    <FlexGrid.Col >
                        <Card variant="defaultWithBorder">
                            <Box vertical={2}>
                                <Image
                                    src={WatchImg}
                                    rounded="corners"
                                    width={150}
                                    height={150}
                                    alt="watch"
                                />
                                <Heading level="h4">Apple</Heading>
                                <StyledParagraph>Watch Series 6(GPS+Cellular)-Stainless Steel</StyledParagraph>
                                <Box between={3}>
                                    <Box inline between={3}>
                                        <Box between={0}>
                                            <PriceLockup
                                                size="small"
                                                price="55"
                                                rateText="/mo."
                                                signDirection="left"
                                            />
                                        </Box>
                                        <HairlineDivider vertical />
                                        <Box between={0}>
                                            <PriceLockup
                                                size="small"
                                                price="55"
                                                rateText="Upfront"
                                                signDirection="left"
                                            />
                                        </Box>
                                    </Box>
                                    <CalloutParagraph className='marginLines'>
                                        Get 3 month of Apple Fitness + free when you buy an Apple Watch
                                    </CalloutParagraph>
                                    <Text>Retail Price: $935</Text>
                                </Box>
                            </Box>
                        </Card>
                    </FlexGrid.Col>
                    <FlexGrid.Col >
                        <Card variant="defaultWithBorder">
                            <Box vertical={2}>
                                <Image
                                    src={WatchImg}
                                    rounded="corners"
                                    width={150}
                                    height={150}
                                    alt="watch"
                                />
                                <Heading level="h4">Apple</Heading>
                                <StyledParagraph>Watch Series 6(GPS+Cellular)-Stainless Steel</StyledParagraph>
                                <Box between={3}>
                                    <Box inline between={3}>
                                        <Box between={0}>
                                            <PriceLockup
                                                size="small"
                                                price="55"
                                                rateText="/mo."
                                                signDirection="left"
                                            />
                                        </Box>
                                        <HairlineDivider vertical />
                                        <Box between={0}>
                                            <PriceLockup
                                                size="small"
                                                price="55"
                                                rateText="Upfront"
                                                signDirection="left"
                                            />
                                        </Box>
                                    </Box>
                                    <CalloutParagraph className='marginLines'>
                                        Get 3 month of Apple Fitness + free when you buy an Apple Watch
                                    </CalloutParagraph>
                                    <Text >Retail Price: $935</Text>
                                </Box>
                            </Box>
                        </Card>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </>
    )
}

export default Watches;
