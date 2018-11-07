import React from 'react';
// import './index.css'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { add, addAsync, del } from './index.redux'
// import {add, del} from './index.redux'
// const Item = List.Item
// import 'antd-mobile/dist/antd-mobile.css'
class App extends React.Component {

  render() {
    // const store = this.props.store
    const add = this.props.add
    const del = this.props.del
    const addAsync = this.props.addAsync
    const number = this.props.number
    return (
      <div>
        <h1>now has {number} guns!</h1>
        <Button style={{ marginRight: "30px" }} type="primary" inline
          onClick={add}>add</Button>
        <Button style={{ marginRight: "30px" }} type="primary" inline
          onClick={del}>decrease</Button>
        <Button type="primary" inline
          onClick={addAsync}>addAsync</Button>
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
