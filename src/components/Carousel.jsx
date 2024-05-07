import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentIndex: 0
        };
      }
    
      goToPrevSlide = () => {
        this.setState(prevState => ({
          currentIndex: (prevState.currentIndex - 1 + images.length) % images.length
        }));
      };
    
      goToNextSlide = () => {
        this.setState(prevState => ({
          currentIndex: (prevState.currentIndex + 1) % images.length
        }));
      };
    
      render() {
        const { currentIndex } = this.state;
        const currentImage = images[currentIndex];
    
        return (
          <div className="carousel">
            <div className="image-container">
              <img
                src={currentImage.img}
                alt={currentImage.title}
                className="carousel-image"
              />
             <div className="image-text">
  <h2 className="title"><span>{currentImage.title}</span></h2>
  <p className="subtitle"><span>{currentImage.subtitle}</span></p>
</div>


              <div className="arrow-container">
                <ArrowBackIosIcon className="arrow" onClick={this.goToPrevSlide} />
                <ArrowForwardIosIcon className="arrow" onClick={this.goToNextSlide} />
              </div>
            </div>
          </div>
        );
      }
}

export default Carousel;