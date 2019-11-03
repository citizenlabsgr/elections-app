import React from 'react';

export default class Positions extends React.Component {
    constructor(props) {
        super(props);

        this.formatPositionData = this.formatPositionData.bind(this);
    }
    formatPositionData() {
        let positions = [];
        this.props.positions.map(function (position, index) {

            positions.push(`<div keyseed=${index}>${position.name}`);

            position.candidates.forEach(function (candidate) {
                positions.push(`<div keyseed=${candidate.id}>${candidate.name} ${candidate["party"].name}</div>`);
            });
            positions.push(`</div>`);

        });
        return positions;
    }
    render() {

        return (
            <div>{this.formatPositionData()}</div>
        )
    }
}