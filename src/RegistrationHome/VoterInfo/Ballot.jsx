import React from 'react';

export default class Ballot extends React.Component{
    constructor(props) {
        super(props);
    
    }
    fetchRegistrationInfo(event) {
        event.preventDefault();
        var precintID= this.props.precintID;
        fetch('https://michiganelections.io/api/ballots?/precint_id='+precintID).then(response => response.json()).then(data => {
           
        }).catch(function () {

        });
    }
    render(){
        return(
            <div></div>
        )
    }

} 