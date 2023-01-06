import {NavBar} from '../../compunents/header/navbar';
import {Footer} from '../../compunents/Footer';
import {Text} from './text'
import {Hero} from './hero'
import './style.css'

export function Details(){
  return(
    <div>
      <NavBar/>
      <Hero/>
      <Text />
      <Footer/>
    </div>
  )
};