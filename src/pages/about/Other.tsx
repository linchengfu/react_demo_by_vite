import React, { Component, PureComponent } from 'react';

class Children extends Component {
  public state = {
    name: 'lin',
  };

  public print() {
    console.log('print');
  }

  public render() {
    return <div>{this.state.name}</div>;
  }
}

export default class Father extends Component {
  public ref = React.createRef<any>();

  public name = 'lin';
  public handleChange(e: any) {}

  public handleClick() {
    this.ref.current.print();
  }

  public render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>click</button>
        <Children ref={this.ref} />
      </>
    );
  }
}
