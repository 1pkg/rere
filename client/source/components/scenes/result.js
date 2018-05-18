import Lodash from 'lodash'
import React from 'react'

import { Partial as Toolbar } from './../blocks/toolbar'
import { Source as Subject } from './../blocks/subject'
import { Correct, Wrong } from './../blocks/option'
import Base from './base'

export default class extends React.Component {
    subject() {
        return <Subject subject={this.props.state.task.subject} />
    }

    options() {
        return Lodash.map(this.props.state.task.options, (option, index) => {
            ++index
            const Option = this.props.state.option === index ? Correct : Wrong
            return <Option key={index} option={option} />
        })
    }

    render() {
        return (
            <Base
                state={this.props.state}
                trigger={this.props.trigger}
                subject={this.subject()}
                options={this.options()}
                toolbar={Toolbar}
            />
        )
    }
}
