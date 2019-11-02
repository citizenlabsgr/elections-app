import React from 'react';
import InputForm from './VoterInfo/InputForm.jsx';


export default class RegistrationHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderRegistrationForm: false,
        };
        this.RenderRegistrationForm = this.RenderRegistrationForm.bind(this);
    }
    RenderRegistrationForm() {
        this.setState({ renderRegistrationForm: true });
    }
    render() {
        return (
            <div className="container">
                Do you know if you are registered?
                <div className="row">
                    <button className="col-sm">Yes, show me my ballot</button>
                    <div className="col-sm">
                        <button  onClick={this.RenderRegistrationForm}>No</button>
                        {this.state.renderRegistrationForm && (
                            <div>
                                <InputForm />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        )
    }

}