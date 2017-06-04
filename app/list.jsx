import React from 'react';

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(...arg) {
    console.log('list', arg);
    return true;
  }

  render() {
    return (
      <div className='list'>
          list
      </div>
    )
  }
}

export default List;