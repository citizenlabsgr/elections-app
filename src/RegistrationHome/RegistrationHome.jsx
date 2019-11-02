import React from 'react';
import InputForm from './VoterInfo/InputForm.jsx';
import BackToTop from '../components/back-to-top/back-to-top.component.jsx';
import JumpLinks from '../components/jump-links/jump-links.component.jsx';
import FormButtons from '../RegistrationHome/content/FormButtons.jsx';



export default class RegistrationHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons:true,
      renderRegistrationForm: false,
      renderBallot:false,
    };
    this.introText='Do you know if you are registered?';
    this.buttonOptions=['Yes, show me my ballot','No, find my registration status' ];
    this.ballotItems = [
      {id: 'some-uuid-1', name: 'Ballot Item One'},
      {id: 'some-uuid-2', name: 'Ballot Item Two'}
    ];
    this.RenderRegistrationForm = this.RenderRegistrationForm.bind(this);
    this.renderVoterBallot = this.renderVoterBallot.bind(this);
  }

  RenderRegistrationForm() {
    this.setState({ renderRegistrationForm: true,showButtons:true });
  }
  renderVoterBallot(){
    this.setState({renderBallot:true});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="who-are-you">
          <div className="who-are-you__into-text row">
            <div className="col">{this.introText}</div>
          </div>
          <div className="row">
            {this.state.showButtons&&(
              <FormButtons className="col-6" buttonText={this.buttonOptions} showAction={this.RenderRegistrationForm}/>
            )}
            {this.state.renderRegistrationForm&&(
              <InputForm className="col-6" />
            )}
            {/*<div className="col-6">Find ballot form here</div>
            <div className="col-6">Check Registration form here<button /></div>*/}
          </div>
        </div>
        <div className="ballot">
          <div className="ballot__into-test row">
            <div className="col">Into text</div>
            {/*this.state.renderBallot&&(
              renderBallot things
            )*/}
          </div>
          <div className="row">
            <div className="col-3"><JumpLinks ballot={this.ballotItems}/></div>
            <div className="col-9">
              {this.ballotItems.map(ballotItem => (<div id={`#ballot-item-${ballotItem.id}`}><BackToTop/></div>))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}