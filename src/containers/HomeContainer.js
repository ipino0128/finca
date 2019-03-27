import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Grid } from 'semantic-ui-react'

class HomeContainer extends React.Component{
  render(){
    return(
      <div className="HomeContainer">
        <h1> Bienvenidos! </h1>
          <Carousel className="Carousel"  dynamicHeight="true" interval="2000" autoPlay="true" showStatus="false" infiniteLoop="true">
                <div>
                    <img src="005.jpg" />

                </div>
                <div>
                    <img src="003.jpg" />

                </div>
                <div>
                    <img src="3.png" />

                </div>
                <div>
                    <img src="5.jpg" />

                </div>
                <div>
                    <img src="2.jpg" />

                </div>

                <div>
                    <img src="entrance.bmp" />

                </div>
                <div>
                    <img src="011.jpg" />

                </div>

            </Carousel>
            <Grid columns={2} padded='horizontally'>
                  <Grid.Column>
                  <h4>Finca Tranquila is an equestrian theme gated residential community in Costa Rica.
          This private neighborhood is located in the foothills of the mountains on the
          central pacific coast just outside Quepos in the quaint town of Naranjito. We are
          far enough from town to enjoy the tranquility & peacefulness of the country, yet
          close enough to benefit from the necessities and luxuries of town.</h4>
                  </Grid.Column>
                  <Grid.Column>
                  <h4>hello </h4>
                  </Grid.Column>
                </Grid>


      </div>
    )
  }
}

export default HomeContainer;
