import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import configStore from 'redux/store/index'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import { counter } from './index.redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => { }
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

// function render() {
//     ReactDOM.render(<App store={store} add={add} del={del} addAsync={addAsync} />, document.getElementById('root'));
// }
const Second = () => {
  return <h1>Second</h1>
}
const Third = () => {
  return <h1>Third</h1>
}
// class Test extends React.Component{
//   render(){
//     return(
//       <h3>测试组件</h3>
//     )
//   }
// }
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">First</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
          <li>
            <Link to="/third">Third</Link>
          </li>
        </ul>
        <Route path="/" exact component={App}></Route>
        <Route path="/second" component={Second}></Route>
        <Route path="/third" component={Third}></Route>
      </div>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)

// render()

// 订阅
// store.subscribe(render)

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import { createStore } from 'redux'

// function counter(state=0, action) {
//     switch(action.type) {
//         case 'add':
//             return state + 1
//         case 'del': 
//             return state - 1
//         default:
//             return 10        
//     }
// }

// 1.新建store
// const store = createStore(counter)

// const init = store.getState()
// console.log(init)

// function listener() {
//     const current = store.getState()
//     console.log(`当前state为  ---> ${current}`)
// }
// store.subscribe(listener)
// 2.派发事件
// store.dispatch({type: 'add'})
// store.dispatch({type: 'add'})
// store.dispatch({type: 'add'})
// store.dispatch({type: 'del'})

// 把store.dispatch方法传递给组件，内部可以调用修改状态
// Subscribe订阅render函数, 每次修改都重新渲染
// Redux相关内容，移到单独的文件redux.js单独管理























