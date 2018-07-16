import React from 'react'
import Styled from 'styled-components'

const MainContainer = Styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const SubContainer = Styled.div``

const MainText = Styled.div`
    font-size: ${props => props.theme['sub-big-unit']};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`

const MinorText = Styled.div`
    font-style: italic;
    text-align: center;
    text-transform: lowercase;
`

export default class extends React.Component {
    render() {
        return (
            <MainContainer>
                <SubContainer>
                    <MainText>We can't support your browser</MainText>
                </SubContainer>
                <SubContainer>
                    <MinorText>for using service you should</MinorText>
                    <MinorText>update your browser</MinorText>
                    <MinorText>or</MinorText>
                    <MinorText>use different browser</MinorText>
                </SubContainer>
            </MainContainer>
        )
    }
}
