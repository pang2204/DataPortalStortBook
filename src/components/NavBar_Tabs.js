import React, { Component} from 'react'


export class NavBar_Tabs extends Component{
  render(){
    return(
      <div className="ui container">
        <div className="ui row vertical segment">
          <h1 className="ui header">NavBar
            <div className="sub header">{`<NavBar_Tabs />`}</div>
          </h1>
        </div>
        <div className="ui row vertical segment">
          <div className="ui ignored message">
            <code>
              <span><b>import </b></span>
              <span>{`{NavBar_Tabs}`} </span>
              <span><b>from </b></span>
              <span><font color="red">'./../components/NavBar_Tabs'</font></span>
            </code>
          </div>
        </div>
        <div className="ui row vertical segment">
          <h3 className="ui header">Preview</h3>
          <div className="ui secondary menu nav-item">
            <div className="ui secondary pointing menu">
              <a className="item active" href="#">Search</a>
              <a className="item" href="#">Company</a>
            </div>
          </div>
        </div>
        <div className="ui row vertical segment"> 
          <h3 className="ui header">Code</h3>
          <div className="ui ignored message">
            <pre>
{ `<div className="ui secondary menu nav-item">
    <div className="ui secondary pointing menu">
      <a className="item active" href="#">Search</a>
      <a className="item" href="#">Company</a>
    </div>
</div>` }
            </pre>
          </div>
        </div>
      </div>
    )
  }
}