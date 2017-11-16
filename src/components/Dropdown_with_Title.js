import React, { Component} from 'react'
import { Dropdown } from 'semantic-ui-react'

const seachOptions = [
  { key: 'Most Relevant', text: 'Most Relevant', value: 'angular' },
  { key: 'Most Favorite', text: 'Most Favorite', value: 'css' },
  { key: 'Most Pinned',  text: 'Most Pinned', value: 'design' },
]

const DropdownSearchSelection = () => (
  <Dropdown placeholder='Select Option' selection options={seachOptions} />
)

export class Dropdown_with_Title extends Component{
  render(){
    return(
      <div className="ui container">
        <div className="ui row vertical segment">
          <h1 className="ui header">Dropdown
            <div className="sub header">{`<Dropdown_with_Title />`}</div>
          </h1>
        </div>
        <div className="ui row vertical segment">
          <div className="ui ignored message">
            <code>
              <span><b>import </b></span>
              <span>{`{Dropdown_with_Title}`} </span>
              <span><b>from </b></span>
              <span><font color="red">'./../components/Dropdown_with_Title'</font></span>
            </code>
          </div>
        </div>
        <div className="ui row vertical segment">
          <h3 className="ui header">Preview</h3>
          <h3 class="ui divided header">Title</h3>
          <DropdownSearchSelection />
        </div>
        <div className="ui row vertical segment"> 
          <h3 className="ui header">Code</h3>
          <div className="ui ignored message">
            <pre>{ 
`<h3 class="ui divided header">[Title]</h3>
<DropdownSearchSelection />` }
            </pre>
          </div>
        </div>
      </div>
    )
  }
}