import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './navs.jsx';
import Pannel from './pannel.jsx';
import List from './list.jsx';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component name="title">
        <Pannel name="tab1" >
          <List/>
        </Pannel>
        <Pannel name="tab2" />
        <Pannel name="tab3" />
        <Pannel name="tab4" />
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