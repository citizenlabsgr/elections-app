import React from 'react';
import BackToTop from '../components/back-to-top/back-to-top.component.jsx';
import Footer from '../components/footer/footer.component.jsx';
import JumpLinks from '../components/jump-links/jump-links.component.jsx';
import FormButtons from '../RegistrationHome/content/FormButtons.jsx';
import RegistrationStatus from './content/RegistrationStatus.jsx';
import Ballot from './VoterInfo/Ballot.jsx';
import InputForm from './VoterInfo/InputForm.jsx';

export default class RegistrationHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: true,
      renderRegistrationForm: false,
      renderBallot: false,
      showRegistrationStatus: false,
      renderStatus: false,
      userInfo: []
    };
    this.buttonOptions = ['YES', 'NO'];
    this.ballotItems = [
      {id: 'some-uuid-1', name: 'Ballot Item One'},
      {id: 'some-uuid-2', name: 'Ballot Item Two'}
    ];
    this.RenderRegistrationForm = this.RenderRegistrationForm.bind(this);
    this.RenderVoterBallot = this.RenderVoterBallot.bind(this);
    this.SetUserInfo = this.SetUserInfo.bind(this);
  }

  RenderRegistrationForm(event) {
    var showStatus = this.state.showRegistrationStatus;
    if(event.target.innerText === 'No, find my registration status') {
      showStatus = true;
    }
    this.setState({renderRegistrationForm: true, showRegistrationStatus: showStatus});
  }

  RenderVoterBallot() {
    this.setState({renderBallot: true});
  }

  SetUserInfo(userData) {
    this.setState({
      showButtons: false,
      renderRegistrationForm: false,
      userInfo: userData,
      renderBallot: userData['registered'],
      renderStatus: this.state.showRegistrationStatus
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid bg-ivory">
          <div className="who-are-you">
            <div className="who-are-you__into-text row">
              <div className="who-are-you__image col-6 flex justify-content-center align-items-center py-6">
                <img src="https://www.fillmurray.com/200/200"/>
              </div>
              <div className="who-are-you__text col-6 flex flex-column justify-content-center align-items-center p-5">
                <p>
                  We get it, elections and ballots can be overwhelming. And you probably have a lot of questions, am I
                  right? How do I know if I’m registered? How can I register? How do I find out where I need to go?
                </p>
                <p>
                  Don’t worry - we have you covered. Simply follow the steps and you’ll be informed and ready to vote!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="sample-ballot" className="container-fluid bg-charcoal_gray">
          <div className="make-a-choice">
            <div className="make-a-choice__header row justify-content-center txt-white">
              <h2 className="col-4">
                Are you currently registered to vote?
              </h2>
            </div>
            <div className="row">
              {this.state.showButtons && (
                <FormButtons buttonText={this.buttonOptions} showAction={this.RenderRegistrationForm}/>
              )}
              {this.state.renderRegistrationForm && (
                <InputForm className="col-6" setRegistrantInfo={this.SetUserInfo}/>
              )}
              {/*<div className="col-6">Find ballot form here</div>
               <div className="col-6">Check Registration form here<button /></div>*/}
            </div>
          </div>
          {this.state.renderStatus && (
            <RegistrationStatus status={this.state.userInfo['registered']}/>
          )}
        </div>
        {this.state.renderBallot && (
          <div className="ballot">
            <div className="ballot__into-test row">
              <div className="col">Into text</div>

              <Ballot precintID={this.state.userInfo['precinct'].id}/>

            </div>
            <div className="row">
              <div className="col-3"><JumpLinks ballot={this.ballotItems}/></div>
              <div className="col-9">
                {this.ballotItems.map(ballotItem => (<div id={`#ballot-item-${ballotItem.id}`}><BackToTop/></div>))}
              </div>
            </div>
          </div>
        )}
        <Footer/>
      </div>
    );
  }
}