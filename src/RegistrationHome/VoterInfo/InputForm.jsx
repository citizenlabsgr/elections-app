import React from 'react';

export default class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.fetchRegistrationInfo = this.fetchRegistrationInfo.bind(this);
    }
    fetchRegistrationInfo(){
            /*our fetchCall
            fetch('').then(response=>response.json()).then(data=>{

            }).catch(function(){

            });*/
    }
    render() {
        return (
            <form onSubmit={this.fetchRegistrationInfo()}>
            <input type="text" name="firstName" ref="firstName"/>First Name 
            <input type="text" name="lastName" ref="lastName"/>Last Name 
            <input type="date" name="birthDate" ref="birthDate"/>Birth Date
            <input type="text" name="zip" ref="zip" pattern="[0-9]{5}"/>Zip Code
            <input type="submit" />
        </form>  
        )
    }

}