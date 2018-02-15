import React from 'react';
import './header.css';
export default class Header extends React.Component{
  render(){
    return (
      <header class="header"><strong>{this.props.value.title}</strong></header>
    )
  }
}