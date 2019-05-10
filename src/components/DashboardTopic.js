import React, { Component } from 'react';

class DashboardTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      title: 'Default title',
      description: 'Default description',
      subject: 'Stevens'
    }
  }

  render() {
    let body = null;
    let votingBtns = null;
    let courseName = null;
    let tileTitle = null;
    let tileDescription = null;


    if (this.state.votes !== 0) {
      votingBtns = (
        <div class="voting-btns">
          <a class="upvote"><i class="fas fa-caret-up"></i></a>
          <span class="vote-count">{this.state.votes} votes</span>
          <a class="downvote"><i class="fas fa-caret-down"></i></a>
        </div>
      );
    } else {
      votingBtns = (
        <div class="voting-btns">
          <a class="upvote"><i class="fas fa-caret-up"></i></a>
          <span class="vote-count">0 votes</span>
          <a class="downvote"><i class="fas fa-caret-down"></i></a>
        </div>
      );
    }

    if (this.state.title && this.state.title !== "Default title") {
      tileTitle = (
        <div class="topic-title">
          <h4>
            {this.state.title}
          </h4>
        </div>
      );
    } else {
      tileTitle = (
        <div class="topic-title">
          <h4>
            Default title
          </h4>
        </div>
      );
    }

    if (this.state.subject && this.state.subject != "Stevens") {
      courseName = (
        <div class="course-name">
          <a href="/hello">{this.state.subject}</a>
        </div>
      );
    } else {
      courseName = (
        <div class="course-name">
          <a href="#">Stevens</a>
        </div>
      );
    }

    if (this.state.description && this.state.description !== "Default description") {
      tileDescription = (
        <div class="topic-description">
          <p>{this.state.description}</p>
        </div>
      );
    } else {
      tileDescription = (
        <div class="topic-description">
          <p>Default description</p>
        </div>
      )
    }


    return (
      <div class="topic-tile">
        <div class="tile-contents">
            {votingBtns}
            <div class="tile-topic">
              {courseName}
              {tileTitle}
              {tileDescription}
              <div class="topic-comment">
                <button type="button" class="btn btn-primary btn-sm">Comment</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default DashboardTopic;