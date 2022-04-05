import React, { Component } from 'react';

interface SubProps {
  onRef: (ref: any) => void;
}
interface SubState {
  name: string;
}

class Sub extends Component<SubProps, SubState> {
  name = 'Sub';
  onCallback() {
    console.log('callback');
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  render() {
    return <div />;
  }
}

class Super extends Component {
  customRef: Sub | null = null;

  handleClick() {
    this.customRef?.onCallback();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>onRef</button>
        <Sub
          onRef={(node: Sub | null) => {
            this.customRef = node;
          }}
        />
      </div>
    );
  }
}

export default Super;
