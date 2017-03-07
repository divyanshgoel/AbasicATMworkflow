/**
 * Created by prashant on 3/3/17.
 */
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Stats from './Stats'
import style from './style.css';

export default class Page extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div>
        <Header />
        <Stats />
        <Footer />
      </div>
    )
  }
}
