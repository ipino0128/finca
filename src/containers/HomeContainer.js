import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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



      </div>
    )
  }
}

export default HomeContainer;
