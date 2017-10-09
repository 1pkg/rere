// @flow

import React from 'react';

import * as Model from './../../model';
import Trigger from './../../actions/trigger';
import * as Actions from './../../actions/types';

import Header from './../shared/header';
import Image from './../shared/image';
import ToolBar from './../shared/toolbar';
import Grid from './../shared/grid';
import Next from './next';

export default class Main extends React.Component {
  props: {
    trigger: Trigger,
    state: Model.State,
  }

  render() {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center',
        height: '100vh',
      }}>
        <Header score={this.props.state.score}/>
        <Image subject={this.props.state.task.subject} effects={this.props.state.task.effects}/>
        <ToolBar trigger={this.props.trigger} assists={this.props.state.assists} timestamp={NaN} disabled={true}/>
        <Grid trigger={this.props.trigger} options={this.props.state.task.options} option={this.props.state.task.option}/>
        <Next trigger={this.props.trigger}/>
      </div>
    );
  }
}
