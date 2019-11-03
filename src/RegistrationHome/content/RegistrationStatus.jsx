import React from 'react';

export default class RegistrationStatus extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        var registrationText=(this.props.status)?"registered":"not registered";
        return(
            <div>You are {registrationText}</div>
        )
    }
    
}