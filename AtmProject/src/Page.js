/**
 * Created by prashant on 3/3/17.
 */
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import style from './style.css';

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick() {
    var count = this.state.count + 1;
    this.setState({count: count});
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
