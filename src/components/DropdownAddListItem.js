import React, { Component} from 'react'
import { Dropdown } from 'semantic-ui-react'


export const DropdownAddListItem = ({seachOptions}) => (
  <div className="ui container">
    <div className="ui row vertical segment">
      <h1 className="ui header">Dropdown 
        <div className="sub header">{`<DropdownAddListItem />`}</div>
      </h1>
    </div>
    <div className="ui row vertical segment">
      <div className="ui ignored message">
        <code>
          <span><b>import </b></span>
          <span>{`{DropdownAddListItem }`} </span>
          <span><b>from </b></span>
          <span><font color="red">'./../components/DropdownAddListItem '</font></span>
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
            <td>seachOptions</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="ui row vertical segment">
      <h3 className="ui header">Preview</h3>
      <Dropdown placeholder='Select Option' selection options={seachOptions} />
    </div>
    <div className="ui row vertical segment"> 
      <h3 className="ui header">Code</h3>
      <div className="ui ignored message">
        <pre>{ `<DropdownAddListItem  seachOptions={seachOptions} />` }</pre>
      </div>
    </div>
  </div>
)
 