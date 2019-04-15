import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class HomeContainer extends React.Component{
  render(){
    return(
      <div className="HomeContainer">

          <Carousel className="Carousel"  dynamicHeight={true} interval="2000" autoPlay={true}  infiniteLoop={true} showIndicators={false} showThumbs={false}>
                <div>
                <h1> Bienvenidos! </h1>
                    <img src="005.jpg" />
                </div>
                <div>
                <h1> Bienvenidos! </h1>
                    <img src="003.jpg" />
                </div>
                <div>
                <h1> Bienvenidos! </h1>
                    <img src="3.png" />

                </div>
                <div>
                <h1> Bienvenidos! </h1>
                    <img src="5.jpg" />

                </div>
                <div>
                <h1> Bienvenidos! </h1>
                    <img src="2.jpg" />

                </div>

                <div>
                <h1> Bienvenidos! </h1>
                    <img src="entrance.bmp" />

                </div>
                <div>
                <h1> Bienvenidos! </h1>
                    <img src="011.jpg" />

                </div>

            </Carousel>



      </div>
    )
  }
}

export default HomeContainer;
