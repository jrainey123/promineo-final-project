import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import chess from '../images/chess.jpg';
import logo from '../images/logo.PNG';

export default class CarouselView extends React.Component{
  render(){
    return(
      <div className="slide-width">
      <Carousel slide={false}>
      <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={logo}
            alt="Logo slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gettyimages.com/id/825332814/photo/learning-to-code.jpg?s=612x612&w=0&k=20&c=xMcpVUE3PffnyA59DD-gSqQed8TzzO18MSIVPUr9Xww="
            alt="Coding slide"
          />
          <Carousel.Caption>
            <h1>CODING</h1>
            <h3>Monday</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://media.gettyimages.com/id/581030165/photo/kids-playing-chess-indoors.jpg?s=612x612&w=0&k=20&c=qcL8Trx4aVsgh_RP_qVNMBr8szcyc--Barv3hZ5N7yM="
            src={chess}
            alt="Chess slide"
          />
          <Carousel.Caption>
            <h1>CHESS</h1>
            <h3>Tuesday</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gettyimages.com/id/908815432/photo/schoolgirl-working-at-a-desk.jpg?s=612x612&w=0&k=20&c=tgl0VN0l8ILWCmYQvF40IDAfWuJ-Q2FRQzZ4g3AfnDA="
            alt="Drawing slide"
          />
          <Carousel.Caption>
            <h1>DRAWING</h1>
            <h3>Wednesday</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gettyimages.com/id/83266618/photo/group-of-children-running-in-park.jpg?s=612x612&w=0&k=20&c=HhZ90gdsxxLeGkfGmoBk6qf1tHF0fhARcZUOvUTbXEw="
            alt="Running slide"
          />
          <Carousel.Caption>
            <h1>RUNNING</h1>
            <h3>Thursday</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
 
      </div>
    );
 }
}

