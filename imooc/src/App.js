import React from 'react';
// import './index.css'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { add, addAsync, del } from './index.redux'
import axios from 'axios'
// console.log(axios)
// import {add, del} from './index.redux'
// const Item = List.Item
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component {

  state = {
    data: {
      user: ''
    }
  }
  request = () => {
    axios.get('/data').then(res => {
      if(res.status === 200) {
        console.log(res)
        this.setState({
          data: res.data[0]
        })
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.data.user}
        </div>
        <h1>now has {this.props.number} guns!</h1>
        <Button style={{ marginRight: "30px" }} type="primary" inline
          onClick={this.props.add}>add</Button>
        <Button style={{ marginRight: "30px" }} type="primary" inline
          onClick={this.props.del}>decrease</Button>
        <Button type="primary" inline
          onClick={this.props.addAsync}>addAsync</Button>
          <Button type="primary" inline
            onClick={this.request}>axios</Button>
      </div>
    )
  }
}
const mapStateProps = (state) => {
  return { number: state }
}
const actionsCreators = { add, addAsync, del }
App = connect(mapStateProps, actionsCreators)(App)
export default App;
