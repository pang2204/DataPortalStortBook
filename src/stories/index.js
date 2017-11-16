import React from 'react'

import { storiesOf } from '@storybook/react'
import './../assets/semantic/semantic.min.css'
import './../assets/css/main.css'
import logo from './../assets/img/pronto-logo-header.png'
import pic from './../assets/img/steve.jpg'
import { Header } from './../components/Header'
import { NavBar_Tabs } from './../components/NavBar_Tabs'
import { Dropdown_Default } from  './../components/Dropdown_Default'
import { Dropdown_with_Title } from  './../components/Dropdown_with_Title'
import { Avartar_Mini_Size } from  './../components/Avartar_Mini_Size'
import { Avartar_Tiny_Size } from  './../components/Avartar_Tiny_Size'
import { Avartar_Small_Size } from  './../components/Avartar_Small_Size'
import './../assets/js/jquery-3.2.1.min.js'
import './../assets/semantic/semantic.min.js'
import './../assets/semantic/components/accordion.js'
 

storiesOf('Header', module)
  .add('Default', () => <Header logo={logo} menu={['menu1','menu2']} />)

storiesOf('Navbar', module)
  .add('Tabs', () => <NavBar_Tabs />)

storiesOf('Dropdown', module)
  .add('Dropdown_Default', () => <Dropdown_Default />)
  .add('Dropdown_with_Title', () => <Dropdown_with_Title />)

storiesOf('Avatar', module)
  .add('Avartar_Mini_Size', () => <Avartar_Mini_Size pic={pic} />)
  .add('Avartar_Tiny_Size ', () => <Avartar_Tiny_Size pic={pic} />)
  .add('Avartar_Small_Size ', () => <Avartar_Small_Size pic={pic} />)


