import React from 'react';

export default class Positions extends React.Component {
    constructor(props) {
        super(props);

        this.formatPositionData = this.formatPositionData.bind(this);
    }
    formatPositionData() {
        var positions = this.props.positions.map((position, index) => {
            return (
                <div key={position.name}  >{position.name}
                    {
                        position.candidates.map((candidate)=> {
                            return (
                                <li key={candidate.id}> {candidate.name} - {candidate["party"].name}</li>
                            )
                        })
                    }
            </div>
            )
        });
        return positions;
    }
    render() {

        return (
            <div>{this.formatPositionData()}</div>
        )
    }
}