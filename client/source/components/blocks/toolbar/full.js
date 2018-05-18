import React from 'react'

import {
    Disclaimer,
    Facebook,
    Fetch,
    Land,
    Reddit,
    Remake,
    Report,
    Star,
    Timer,
    Toggle,
    Twitter,
} from './../widgets'
import Toolbar from './base'

export default class extends React.Component {
    render() {
        return (
            <Toolbar
                actions={{
                    Toggle,
                    Reddit,
                    Twitter,
                    Facebook,
                    Star,
                    Disclaimer,
                    Land,
                    Timer,
                    Report,
                    Remake,
                    Fetch,
                }}
                trigger={this.props.trigger}
                settings={this.props.settings}
                handled={this.props.handled}
                timestamp={this.props.timestamp}
                full={this.props.full}
                toggle={this.props.toggle}
            />
        )
    }
}
