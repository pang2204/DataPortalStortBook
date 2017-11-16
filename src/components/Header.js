import React, {Component } from 'react'


export const Header = ({logo, menu}) => (
    <div className="ui container">
    <div className="ui row vertical segment">
      <h1 className="ui header">Header
          <div className="sub header">{`<Header />`}</div>
      </h1>
    </div>
    <div className="ui row vertical segment">
      <div className="ui ignored message">
        <code>
          <span><b>import </b></span>
          <span>{`{Header }`} </span>
          <span><b>from </b></span>
          <span><font color="red">'./../components/Header '</font></span>
        </code>
      </div>
    </div>
    <div className="ui row vertical segment">
      <h3 className="ui header">Preview</h3>
      <div className="ui borderless main menu">
        <div className="left item">
          <a className="item"><img src={logo}/></a>
        </div>
        <div className="right item">
        {menu.map((value,i)=> <div class="item" key={i}>{value}</div>)}
        </div>
      </div>
    </div>
    <div className="ui row vertical segment"> 
      <h3 className="ui header">Code</h3>
      <div className="ui ignored message">
        <pre>
  { `<div className="ui borderless main menu">
  <div className="left item">
    <a className="item">logo</a>
  </div>
  <div className="right item">
    <a className="item"> Menu 1</a>
    <a className="item">Menu 2 </a>
  </div>
  </div` }
        </pre>
      </div>
    </div>
  </div>
  )
  
  

  
  