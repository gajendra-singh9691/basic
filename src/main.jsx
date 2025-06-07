import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import MyForm from './MyForm'
import Profile from './Profile';
import Greeting from './Greeting';
import UserCard from './UserCard';
import Event from './Event'
import UseState from './UseState';
import UseEffect from './UseEffect';
import Forms from './Forms';
import Userdatashow from './Userdatashow';

createRoot(document.getElementById('root')).render(


  <StrictMode>
    {/* <App /> */}
          {/* <About name="jay" city="jaipur" /> */}
          {/* <MyForm /> */}
          {/* <Greeting name="Gajendra" />} */}
          {/*<Profile />*/}
          {/* // <UseEffect /> */}
          {/* <UserCard name="Gajendra Singh" age="21" location="Mandsaur"/> */}
          {/* <Event /> */}
          {/* <UseState /> */}
    <Forms />
    
    <Userdatashow />
  </StrictMode>
)

