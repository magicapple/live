import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './navs.jsx';
import Pannel from './pannel.jsx';
import List from './list.jsx';

// if不能放在jsx中，只能用表达式来做。
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component name="title">
        {false ?
          <Pannel key="1" name="tab1" >
            <List/>
          </Pannel>
          :
          <Pannel key="1" name="tab1" >
          </Pannel>          
        }
        <Pannel key="2" name="tab2" >panel2</Pannel>
        <Pannel key="3" name="tab3" >panel3</Pannel>
        <Pannel key="4" name="tab4" >panel4</Pannel>
      </Component>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./reactComp', () => {
    render(App)
  });
}