import React from 'react';
import Positions from '../content/Positions.jsx';
import Proposals from '../content/Proposals.jsx';

export default class Ballot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ballotFetched: false,
            upcomingProposals: [],
            impendingPositions: []
        }
        this.fetchBallotInfo = this.fetchBallotInfo.bind(this);

    }
    componentDidMount() {
        this.fetchBallotInfo();
    }
    fetchBallotInfo() {
        var precintID = this.props.precintID;
        var ballotItems = [];
        //give me positions on next upcoming ballot
        fetch('https://michiganelections.io/api/positions/?precinct_id=' + precintID).then(response => response.json()).then(data => {
            //do something with info that gets returned
            this.setState({impendingPositions:data,ballotFetched:true});
        }).catch(function () {

        });
        //give me proposals on next upcoming ballot
        fetch('https://michiganelections.io/api/proposals/?precinct_id=' + precintID).then(response => response.json()).then(data => {
            this.setState({upcomingProposals:data,ballotFetched:true });
        }).catch(function () {

        });


    }
    render() {
        return (
            <div>
                {this.state.ballotFetched && (
                    <div>This is your ballot information
                        <Positions data={this.state.impendingPositions} />
                        <Proposals data={this.state.upcomingProposals} />
                    </div>
                )}
            </div>

        )
    }

} 