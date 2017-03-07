/**
 * Created by prashant on 3/3/17.
 */
import React from 'react'
import Page from './Page'

export default class Title extends React.Component {
  constructor() {
    super()
  }

  render() {
    const title = "TO THE NEW"
    return (
      <h1>{title}</h1>
    )
  }
}
