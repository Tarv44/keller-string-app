import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Left from '../images/arrow-left.svg';
import Right from '../images/arrow-right.svg';
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai';

const PrevArrow = (props) => {
  if (props.redArrow) {
    return (
      <img 
        style={{marginRight: 30}}
        onClick={props.onClick} 
        width={18} 
        height={19.8} 
        src={Left}
        alt="Left arrow"/>
    )
  }
}

const NextArrow = (props) => {
  if (props.redArrow) {
    return (
      <img 
        style={{marginLeft: 30}}
        onClick={props.onClick} 
        width={18} 
        height={19.8} 
        src={Right} 
        alt="Right arrow"/>
    )
  }
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: this.props.autoplay,
      autoplaySpeed: 3000,
      prevArrow: <PrevArrow redArrow={this.props.redArrow}/>,
      nextArrow: <NextArrow redArrow={this.props.redArrow}/>,
      appendDots: dots => (
        <DotsContainer>
          <Dots style={{ margin: "0px" }}>
            <Arrow onClick={this.previous}><AiFillCaretLeft size={20}/></Arrow> 
            {dots} 
            <Arrow onClick={this.next}><AiFillCaretRight size={20}/></Arrow>
          </Dots>
        </DotsContainer>
      )
    }
  
    const mobileSettings = {
      ...settings,
      arrows: this.props.redArrow || this.props.greyArrow
    }
    return (
      <>
        <Slider ref={c => (this.slider = c)} {...mobileSettings}>
          {this.props.cards}
        </Slider>
      </>
    );
  }
};

export default Carousel;

const Arrow = styled.button`
  display: none;
  path {
    color: var(--color-primary);
  }
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {
    display: block;
  }
`

const Dots = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 481px) {}
  @media (min-width: 768px) {}
  @media (min-width: 1025px) {}
  @media (min-width: 1200px) {}
`