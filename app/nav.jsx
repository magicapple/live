import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: #ccc;
  display: inline-block;
  border: 1px solid #000;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background: #ff0;
    color: #f00;
  }
`


class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(...arg) {
    console.log('nav', arg);
    return true;
  }

  render() {
    console.log(this.props);
    return (
      <Div {...this.props} >
          {this.props.name}
      </Div>
    )
  }
}

export default Nav;