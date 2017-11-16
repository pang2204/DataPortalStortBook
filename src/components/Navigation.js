import React, { Component } from 'react'

export const Navigation = ({listTabs}) => (
  <div className="ui container">
    <div className="ui row vertical segment">
      <h1 className="ui header">Navigation
        <div className="sub header">{`<Navigation />`}</div>
      </h1>
    </div>
    <div className="ui row vertical segment">
      <div className="ui ignored message">
        <code>
          <span><b>import </b></span>
          <span>{`{Navigation}`} </span>
          <span><b>from </b></span>
          <span><font color="red">'./../components/Navigation'</font></span>
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
            <td>listName</td>
            <td>List(String)</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="ui row vertical segment">
      <h3 className="ui header">Preview</h3>
      <div className="ui secondary menu nav-item">
        <div className="ui secondary pointing menu">
          <a className="item active" >{listTabs[0]}</a>
          <a className="item" href="#" >{listTabs[1]}</a>
        </div>
      </div>
    </div>
    <div className="ui row vertical segment"> 
      <h3 className="ui header">Code</h3>
      <div className="ui ignored message">
        <pre>{ `<Navigation listTabs={['Tab1','Tab2']}/>` }</pre>
      </div>
    </div>
  </div>
)
