import React from 'react'
import Clock from 'react-icons/lib/fa/clock-o'
import Styled from 'styled-components'

import Trigger from '~/actions/trigger'
import { Timestamp } from '~/helpers'
import Button from './button'

const Container = Styled.div`
    display: flex;
    align-items: center;
`

const Period = Styled.div`
    font-size: 0.7rem;
    font-style: italic;
    text-transform: lowercase;
    margin-right: 0.1rem;
`

export default class extends React.Component {
    tick = async () => {
        this.setState(state => {
            let timestamp = Timestamp.current()
            let current = state.period - (timestamp - state.timestamp)
            if (current <= 0) {
                this.props.trigger.call(Trigger.ACTION_CHOOSE, -1)
            }
            return { ...state, current }
        })
    }

    constructor(props) {
        super(props)
        this.interval = null
        this.state = {
            timestamp: null,
            period: null,
            current: null,
        }
    }

    componentDidMount() {
        this.setState(state => {
            return {
                timestamp: this.props.timestamp,
                period: this.props.settings['choose-period'],
                current: null,
            }
        })
        this.interval = window.setInterval(this.tick, TIMER_TICK_INTERVAL)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    glyph() {
        return (
            <Container>
                <Period>{this.state.current}</Period>
                <Clock />
            </Container>
        )
    }

    render() {
        return <Button glyph={this.glyph()} />
    }
}
