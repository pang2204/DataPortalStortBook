import React, {Component } from 'react'


export const Avartar = ({image, size}) =>(
  <div className="ui container">
    <div className="ui row vertical segment">
      <h1 className="ui header">Avartar 
        <div className="sub header">{`<Avartar />`}</div>
      </h1>
    </div>
    <div className="ui row vertical segment">
      <div className="ui ignored message">
        <code>
          <span><b>import </b></span>
          <span>{`{Avartar}`}</span>
          <span><b>from </b></span>
          <span><font color="red"> './../components/Avartar'</font></span>
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
            <td>image</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="ui row vertical segment">
      <h3 className="ui header">Preview</h3>
      <a className={"ui " + size +  " image"}><img src={image} /></a>
    </div>
    <div className="ui row vertical segment"> 
      <h3 className="ui header">Code</h3>
      <div className="ui ignored message">
        <pre>{ `<Avartar image={avartarImage} size='small'/>` }</pre>
      </div>
    </div>
  </div>
)
  
  

  
  