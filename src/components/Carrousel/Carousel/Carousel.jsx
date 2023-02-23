import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';

const StyledDivContent = styled.div `
    display: flex;
    justify-content: center;
    background: url(${prop => prop.url}) top/cover ;
    
`

const items = [
  {
    src: require('../../../utils/images/Hero/First.png'),
    src1: require('../../../utils/images/Hero/First1.png'),
    altText: 'Slide 1',
    height:'100%',
    width:'100%',
    key: 1,
  },
  {
    src:  require('../../../utils/images/Hero/Second.png'),
    src1:  require('../../../utils/images/Hero/Second.png'),
    altText: 'Slide 2',
    height:'100%',
    width:'100%',
    key: 2,
  },
  {
    src:  require('../../../utils/images/Hero/Three.png'),
    src1:  require('../../../utils/images/Hero/Fourth1.png'),
    height:'100%',
    width:'100%',
    altText: 'Slide 3',
    key: 3,
  },
  {
    src:  require('../../../utils/images/Hero/Fourth.png'),
    src1:  require('../../../utils/images/Hero/Fourth1.png'),
    height:'100%',
    width:'100%',
    altText: 'Slide 4',
    key: 4,
  }
];

function CarouselContainer(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <StyledDivContent url = {item.src1} ><img src={item.src} alt={item.altText} className="carouselheight"/></StyledDivContent>
        <CarouselCaption captionText=""
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}      
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselContainer;