import React from 'react'
import { Header } from 'semantic-ui-react'


const HeaderLogo = () => {
  return(
    <div className="HeaderLogo">

    <Header as='h1' dividing className="centered">
      <h1>  F i n c a <br/> T r a n q u i l a </h1>
      <h5> Naranjito, Costa Rica</h5>
    </Header>
        <img className="TucanTwo" src="tucan.gif"/>
    </div>
  )
}

export default HeaderLogo
