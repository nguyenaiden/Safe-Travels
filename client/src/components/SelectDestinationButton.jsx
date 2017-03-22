import React from 'react';

class SelectDestinationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addToList: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.selectDestination(this.props.destination);
    this.setState({
      addToList: true,
    });
  }

  render() {
    return (
      <div className="select-destination-button">
        <button href="#" className="btn btn-primary" onClick={this.onClick}>
          {this.state.addToList ? 'Added!' : 'Add to Trip!'}
        </button>
      </div>);
  }
}

export default SelectDestinationButton;