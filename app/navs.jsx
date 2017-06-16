import React from 'react';
import Nav from './nav.jsx';
import Pannel from './pannel.jsx';


class Navs extends React.Component {

  constructor(props) {
    super(props);
    this._getPanel = this._getPanel.bind(this);
    this.state = {
        children: props.children
    }
  }

  shouldComponentUpdate(...arg) {
    console.log('navs', arg);
    return true;
  }

  _getPanel() {
    var tab = [];
    var panel = [];
    React.Children.forEach(this.state.children, function (children, index) {
        console.log(children.props);
        const props = {
            name: children.props.name,
            active: children.props['data-active'] || "false",
            key: index
        };
        console.log('-------');
        console.log(props);
        tab.push (<Nav {...children.props} />);
        panel.push(children);
        console.log(children, index);
    });

    return {tab: tab, panel: panel};
  }

  render() {
    const opt = this._getPanel();
    return (
      <div className="navs">
          <div className="navContainer">
              {opt.tab}
          </div>
          <div className="navPannel">
              {opt.panel}
          </div>
      </div>
    )
  }
}

export default Navs;