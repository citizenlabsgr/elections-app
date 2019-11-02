import React from 'react';

export default class FormButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttonArrayRender = this.buttonArrayRender.bind(this);
  }

  buttonArrayRender() {
    const clickAction = this.props.showAction;
    const buttonOptions = this.props.buttonText;
    return buttonOptions.map((buttonOption, index) => {
      return (
        <div className="col-6 flex justify-content-center">
          <button key={index + buttonOption} onClick={clickAction}> {buttonOption} </button>
        </div>);
    });
  }

  render() {
    return this.buttonArrayRender();
  }
}