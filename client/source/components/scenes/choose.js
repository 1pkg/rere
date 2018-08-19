import { map } from 'lodash'
import React from 'react'

import { History } from '~/helpers'
import { Full as Toolbar } from './../blocks/toolbar'
import { Effect as Subject } from './../blocks/subject'
import { Choose } from './../blocks/option'
import Base from './base'

export default class extends React.Component {
    componentDidMount() {
        History.push(this.props.state.task.label)
    }

    subject() {
        return (
            <Subject
                subject={this.props.state.task.subject}
                effects={this.props.state.task.effects}
                shaders={this.props.state.shaders}
            />
        )
    }

    options() {
        return map(this.props.state.task.options, (option, index) => {
            return (
                <Choose
                    key={index}
                    trigger={this.props.trigger}
                    index={index + 1}
                    option={option}
                />
            )
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
