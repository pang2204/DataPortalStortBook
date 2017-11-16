import React, { Component} from 'react'


export const Header_Default = () => (
  <div className="ui container">
    <div className="ui row vertical segment">
      <h1 className="ui header">Header
          <div className="sub header">{`<Header default/>`}</div>
      </h1>
    </div>
    <div className="ui row vertical segment">
      <div className="ui ignored message">
        <code>
          <span><b>import </b></span>
          <span>{`{Header_Default}`} </span>
          <span><b>from </b></span>
          <span><font color="red">'./../components/Header_Default'</font></span>
        </code>
      </div>
    </div>
    <div className="ui row vertical segment">
      <h3 className="ui header">Preview</h3>
      <div className="ui borderless main menu">
        <div className="left item">
          <a className="item">logo</a>
        </div>
        <div className="right item">
          <a className="item"> Menu 1</a>
          <a className="item">Menu 2 </a>
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



