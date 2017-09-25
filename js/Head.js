import React from 'react';
import * as audio from './audio';

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  clickHandler(event) {
    if (!this.state.completed || this.state.completed) {
      if (this.state.view === 'points') {
        audio.play("flip");
        audio.play("countdown");        
        this.setState({view: 'question', flipping: true});
      } else if (this.state.view === 'question') {
        audio.stop("countdown");
        audio.play("result")
        this.setState({view: 'answer'});
      } else {
        audio.play("flipBack");
        this.setState({view: 'points', completed: true, flipping: true});
      }
    }
    return;
  }


  render() {
    let style = {
        width: this.props.width + 'px',
        height: this.props.height + 'px',
        transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
        WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
      },
      front = this.state.completed
        ? <img src='assets/img/react.svg'/>
        : <span className='points'>{this.props.question.points}</span>,
      className = 'flipper';

    return (
      <div
        style={style}
        className={className}
        onClick={this.clickHandler.bind(this)}
        onTransitionEnd={this.transitionEndHandler.bind(this)}
      >
        <div className='card'>
          <div className='front'>
            {front}
          </div>
          <div className='back'>
            <span dangerouslySetInnerHTML={this.getLabelBack()}/>
            <img src='assets/img/react.svg'/>
          </div>
        </div>
      </div>
    );
  }

};

export default Head;
