import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer container-fluid bg-teal txt-black">
        <div className="row justify-content-center">
          {/* TODO: Update links */}
          <div className="col-3 flex flex-column justify-content-start py-4">
            <a href="#add_location_here" title="Link to Glossary of Terms">Glossary of Terms</a>
            <a href="#add_location_here" title="Link to Find Your Polling Station">Find Your Polling Station</a>
          </div>
          <div className="col-3 flex flex-column justify-content-start py-4">
            <a href="#add_location_here" title="Link to Do’s and Dont’s of Voting">Do’s and Dont’s of Voting</a>
            <a href="#add_location_here" title="Link to Know Your Voting Rights">Know Your Voting Rights</a>
          </div>
          <div className="col-3 flex flex-column justify-content-start py-4">
            <a href="#add_location_here" title="Link to On Voting Day">On Voting Day</a>
          </div>
        </div>
      </footer>
    );
  }
}