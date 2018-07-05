import React, { Component } from 'react';
import Star from './Star';
//import PropTypes from 'prop-types';
import './Style.css';

class StarRating extends Component {

  constructor(props) {
      super(props);
      this.state = {
        starsSelected: props.starSelected || 0,
        totalStars: 5
      };
      this.change = this.change.bind(this);
  }

  change(starsSelected) {
      this.setState({starsSelected})
  }

  render() {
      const {totalStars} = this.state;
      const {starsSelected} = this.state;
      return (
        <div className="star-rating">
          {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
              selected={i<starsSelected}
              onClick={() => this.change(++i)}
            />          
          )}
          <p>{starsSelected} of {totalStars} stars</p>
        </div>
      )
  }
}
/*
StarRating.propTypes = {
    totalStars: PropTypes.number.isRequired
}

StarRating.defaultProps = {
    totalStars: 5
}*/

export default StarRating;
