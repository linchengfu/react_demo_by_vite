import React, { Component } from 'react';

class Input extends Component {
  textInput: HTMLElement | null = null;

  componentDidMount() {
    this.textInput?.focus();
  }

  public showInfo = () => {
    console.log('this is callback ref');
  };

  render() {
    return (
      <div>
        <input
          ref={(element) => {
            this.textInput = element;
          }}
        />
        <button onClick={() => this.handleClick()}>click</button>
      </div>
    );
  }

  private handleClick = () => {
    console.log(this.textInput);
  };
}

class TopInput extends Component {
  public inputRef: Input | null = null;

  public executeChildren = () => {
    this.inputRef?.showInfo();
  };
  render() {
    return (
      <div>
        <Input
          ref={(element) => {
            this.inputRef = element;
          }}
        />
        <button onClick={() => this.executeChildren()}>click_2</button>
      </div>
    );
  }
}

export default TopInput;
