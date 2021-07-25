// implement MovieCard component here
import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h1>{ movie.title }</h1>
      </div>
    );
  }
}
