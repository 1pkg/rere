import React from 'react'

import { Env, Device } from '~/helpers'
import Toolbar from './base'
import { Facebook, Fetch, Home, Rating, Reddit, Twitter } from './../button'
import { Disclaimer, Download, Feedback } from './../modal'

export default class extends React.Component {
    cordova() {
        return {
            Disclaimer,
            Feedback,
            Reddit,
            Twitter,
            Facebook,
            Home,
            Rating,
            Fetch,
        }
    }

    mobile() {
        return {
            Download,
            Disclaimer,
            Reddit,
            Twitter,
            Facebook,
            Home,
            Rating,
            Fetch,
        }
    }

    desktop() {
        return {
            Disclaimer,
            Reddit,
            Twitter,
            Facebook,
            Home,
            Rating,
            Fetch,
        }
    }

    render() {
        let actions = Env.cordova()
            ? this.cordova()
            : Device.mobile()
                ? this.mobile()
                : this.desktop()

        return (
            <Toolbar
                actions={actions}
                trigger={this.props.trigger}
                settings={this.props.settings}
                handled={{}}
            />
        )
    }
}