import React from 'react'

import { storiesOf } from '@storybook/react'
import './../assets/semantic/semantic.min.css'
import './../assets/css/main.css'
import logo from './../assets/img/pronto-logo-header.png'
import avartarImage from './../assets/img/steve.jpg'
import { Header } from './../components/Header'
import { Navigation} from './../components/Navigation'
import { DropdownAddListItem } from  './../components/DropdownAddListItem'
import { Avartar } from  './../components/Avartar'
import './../assets/js/jquery-3.2.1.min.js'
import './../assets/semantic/semantic.min.js'
import './../assets/semantic/components/accordion.js'
 

const seachOptions = [
  { key: 'Most Relevant', text: 'Most Relevant', value: '' },
  { key: 'Most Favorite', text: 'Most Favorite', value: '' },
  { key: 'Most Pinned',  text: 'Most Pinned', value: '' },
]

storiesOf('Header', module)
  .add('Default', () => <Header logo={logo} menu={['menu1','menu2']} />)

storiesOf('Navigation', module)
  .add('Tabs', () => <Navigation listTabs={['Tab1','Tab2']} />)

storiesOf('Dropdown', module)
  .add('addListItem', () => <DropdownAddListItem seachOptions={seachOptions} />)

storiesOf('Avatar', module)
  .add('Size', () => <Avartar image={avartarImage} size='small' />)


