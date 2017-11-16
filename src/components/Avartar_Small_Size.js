import React from 'react'


export const Avartar_Small_Size = ({pic}) => (
  <div className="ui container">
    <div className="ui row vertical segment">
      <h1 className="ui header">Avartar
          <div className="sub header">{`<Avartar_Small_Size/>`}</div>
      </h1>
    </div>
    <div className="ui row vertical segment">
      <div className="ui ignored message">
        <code>
          <span><b>import </b></span>
          <span>{`{Avartar_Small_Size}`} </span>
          <span><b>from </b></span>
          <span><font color="red">'./../components/Avartar_Small_Size'</font></span>
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
            <td>Pic</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="ui row vertical segment">
    <h3 className="ui header">Preview</h3>
    <img class="ui small circular image" src={pic} />
    </div>
    <div className="ui row vertical segment"> 
      <h3 className="ui header">Code</h3>
      <div className="ui ignored message">
        <pre>{ `<img class="ui small circular image" src={pic} />` }</pre>
      </div>
    </div>
  </div>
)