import React, { Component } from 'react'
import Home from './Pages/Home/index'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      filterMonth: 0,
      filterYear: 0,
      showNewOnly: false
    }
  }
  render() {
    return(
      <Home />
    )
  }
}

export default App