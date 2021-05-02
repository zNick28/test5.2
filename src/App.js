import React, { Component } from 'react'
import {Button,message} from 'antd'

import './App.less'

export default class App extends Component {
  clickMessage = () => {
    message.success('test message')
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick = {this.clickMessage}>Button</Button>
      </div>
    )
  }
}

