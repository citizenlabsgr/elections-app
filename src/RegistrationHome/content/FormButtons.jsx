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
      let classStr  = "form-button col-5 flex justify-content-center";
      classStr =  index === 0 ? classStr + ' offset-1' : classStr
      return (
        <div className={classStr}>
          <button type="button" className="form-button__button btn bg-citizen_labs_orange txt-white" key={index + buttonOption}
                  onClick={clickAction}><h3>{buttonOption}</h3></button>
        </div>);
    });
  }

  render() {
    return this.buttonArrayRender();
  }
}