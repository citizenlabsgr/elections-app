import React from 'react';

export default class FormButtons extends React.Component {
    constructor(props) {
        super(props);
       this.buttonArrayRender = this.buttonArrayRender.bind(this);
    }
    buttonArrayRender(){
        var clickAction = this.props.showAction;
        var buttonOptions = this.props.buttonText;
        return buttonOptions.map((buttonOption,index)=> {
         return <button key={index+buttonOption} onClick={clickAction}> {buttonOption} </button>
        });
  
    }
    render(){
        return (
           <div>  {this.buttonArrayRender()}</div>
           
        )
    }
}