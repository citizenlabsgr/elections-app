import React from 'react';

export default class Ballot extends React.Component {
    constructor(props) {
        super(props);

    }
    fetchRegistrationInfo(event) {
        event.preventDefault();
        var precintID = this.props.precintID;
        var ballotItems = [];
        var proposals = [];
        var positions = [];
        //give me positions on next upcoming ballot
        fetch('https://michiganelections.io/api/positions/?precint_id=' + precintID).then(response => response.json()).then(data => {
            //do something with info that gets returned
            positions = data;
           

        
        }).catch(function () {

        });
        //give me proposals on next upcoming ballot
        fetch('https://michiganelections.io.api/proposals/?precint_id=' + precintID).then(response => response.json()).then(data => {
            proposals = data;
        }).catch(function () {

        });
        //format ballot items into something to send to registrationHome


    }
    render() {
        return (
            <div></div>
        )
    }

} 