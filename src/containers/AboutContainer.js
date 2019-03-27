import React from 'react'
import { Grid } from 'semantic-ui-react'

class AboutContainer extends React.Component{
  render(){
    return(
      <div className="AboutContainer">
        <h1> About Us </h1>
        <Grid columns={2} padded='horizontally'>
              <Grid.Column>
              <h4>Finca Tranquila is an equestrian theme gated residential community in Costa Rica.
      This private neighborhood is located in the foothills of the mountains on the
      central pacific coast just outside Quepos in the quaint town of Naranjito. We are
      far enough from town to enjoy the tranquility & peacefulness of the country, yet
      close enough to benefit from the necessities and luxuries of town.</h4>
              </Grid.Column>
              <Grid.Column>
              <h4>The Costa Rican people "Ticos"
are among the friendliest people anywhere! The food in
Costa Rica is fantastic! Many of the towns,
including Quepos, have markets on Saturdays where
people come from surrounding areas to sell fresh
fruits and vegetables.

Finca Tranquila is just 10 minutes from the Quepos airport
and only 20 minutes from Manuel Antonio
National Park and beach. A 2 1/2 hour plane ride from
Miami and a short 18 minutes from San Jose
brings you to paradise! You can also choose the scenic
drive from San Jose which will take you
through the mountains to Jaco, then along the pacific
coast to Quepos (3 hrs). </h4>
              </Grid.Column>
            </Grid>
      </div>
    )
  }
}

export default AboutContainer
