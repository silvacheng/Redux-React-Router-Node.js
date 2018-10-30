import React from 'react';
import './index.css'
import {Button, List} from 'antd-mobile'
const Item = List.Item
// import 'antd-mobile/dist/antd-mobile.css'
class App extends React.Component {

  state = {
    solders: ['11', '22', '33']
  }
  componentWillMount() {
    // console.log('组件将要加载了。。')
  }

  componentDidMount() {
    // console.log('组件加载完毕。。')
  }
  addSolder = () => {
    console.log(`add solder!`)
    this.setState({
      solders: [...this.state.solders, '新兵' + Math.random()]
    })
  }
  render() {
    // console.log('组件正在加载中。。。')
    return (
      <div>
        <Button type="primary" size="small" inline onClick={this.addSolder}>新增</Button>
        <List
          renderHeader={() => '士兵列表'}
        >
          {this.state.solders.map(v => {
            return (
              <Item key={v}>
                {v}
              </Item>
            )
          })}

        </List>
        {/* <ul>
          {this.state.solders.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul> */}
      </div>
    )
  }
}

export default App;
