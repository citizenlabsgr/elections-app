import React from 'react';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            birthDate: "",
            zipCode: ""
        }
        this.fetchRegistrationInfo = this.fetchRegistrationInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    fetchRegistrationInfo(event) {
        event.preventDefault();
        fetch('https://michiganelections.io/api/registrations?first_name=' + this.state.firstName + '&last_name=' + this.state.lastName + '&birth_date=' + this.state.birthDate + '&zip_code=' + this.state.zipCode).then(response => response.json()).then(data => {
            this.props.setRegistrantInfo(data);    
        }).catch(function () {

        });
    }
    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.fetchRegistrationInfo}>
                <label>First Name <input type="text" name="firstName" onChange={e => this.handleChange(e)} /></label>
                <label>Last Name <input type="text" name="lastName" onChange={e => this.handleChange(e)} /></label>
                <label>Birth Date <input type="date" name="birthDate" onChange={e => this.handleChange(e)} /></label>
                <label>Zip Code <input type="text" name="zipCode" onChange={e => this.handleChange(e)} pattern="[0-9]{5}" /></label>
                <input type="submit" />
            </form>
        )
    }

}