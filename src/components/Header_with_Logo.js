import React,{ Component } from 'react'


export const Header_with_Logo = ({logo}) => (
  <div className="ui container">
    <div className="ui row vertical segment">
      <h1 className="ui header">Header
          <div className="sub header">{`<Header_with_Logo/>`}</div>
      </h1>
    </div>
    <div className="ui row vertical segment">
      <div className="ui ignored message">
        <code>
          <span><b>import </b></span>
          <span>{`{Header_with_Logo}`} </span>
          <span><b>from </b></span>
          <span><font color="red">'./../components/Header_with_Logo'</font></span>
        </code>
      </div>
    </div>
    <div className="ui row vertical segment">
      <h3 className="ui header">Properties</h3>
      <table class ="ui celled striped table">
        <thead>
          <tr>
            <th>PropName</th>
            <th>PropType</th>
            <th>DefaultValue</th>
            <th>isRequired</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>logo</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="ui row vertical segment">
    <h3 className="ui header">Preview</h3>
      <div className="ui borderless main menu">
        <div className="left item">
          <a className="item"><img src={logo} alt="Pronto Logo" /></a>
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
  <a className="item"><img src={logo} alt="Pronto Logo" /></a>
</div>
<div className="right item">
  <a className="item"> Menu 1</a>
  <a className="item">Menu 2 </a>
</div>
</div>` }
        </pre>
      </div>
    </div>
  </div>
)
  
  
  
  