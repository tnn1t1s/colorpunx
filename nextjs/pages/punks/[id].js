import { useRouter } from 'next/router'
import { punks as punksJSON } from '../../public/json/punks';
import colorsJSON from '../../public/json/colors';
import React, { useEffect, useState } from 'react';
import customStyles from "../../styles/punks.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Punk(props) {
  {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [currentPunk, setCurrentPunk] = useState([])
    const carouselLength = Object.keys(punksJSON).length - 9000
    const [baseChildren, setBaseChildren] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const getConfigurableProps = () => ({
      showArrows: true,
      showStatus: false,
      showIndicators: false,
      infiniteLoop: false,
      centerMode: true,
      centerSlidePercentage: 100,
      showThumbs: true,
      useKeyboardArrows: false,
      autoPlay: false,
      stopOnHover: true,
      swipeable: true,
      dynamicHeight: true,
      emulateTouch: true,
      autoFocus: false,
      thumbWidth: 60,
      selectedItem: props.id,
      interval: 2000,
      transitionTime: 500,
      swipeScrollTolerance: 5,
      ariaLabel: undefined,
    });

    function handleLoading() {
      let currentId = window.location.pathname.split('/')[2]
      setBaseChildren(() =>
        Array.from({ length: carouselLength }).map((_, index) => {
          let count = Number(index) + Number(currentId)
          return (
            <div className={customStyles.punkMainImage} key={index} onClick={() => router.push({ pathname: 'https://www.larvalabs.com/cryptopunks/details/' + (Number(currentId) + index) }, undefined, { scroll: false })}>
              <img src={'/images/punx/punk' + String(count).padStart(4,'0') + '.png'}></img>
            </div>
          )
        }))
      setCurrentPunk(punksJSON[`${currentId}`])
      setIsLoading(false);
    }

    useEffect(() => {
      handleLoading();
    }, []);

    /**
   * Function handleClick
   * 
   * Description: This function is resposible to listen after an action from the react-responsive-carousel
   * 
   * @param {index} index value comming from the carousel, indicates the current index position
   */
    function handleClick(index) {
      if (currentSlide >= index) {
        router.push({ pathname: "/punks/" + (Number(props.id) - 1) }, undefined, { scroll: false });
        setCurrentPunk(punksJSON[`${Number(props.id) - 1}`])
      } else {
        router.push({ pathname: "/punks/" + (Number(props.id) + 1) }, undefined, { scroll: false });
        setCurrentPunk(punksJSON[`${Number(props.id) + 1}`])
      }
      setCurrentSlide(index);
    }

    return (
      <div>
        {
          isLoading
            ?
            null
            :
            <>
              <img src="/images/colorpunx-banner-trim.png" width="100%" height="auto" />
              <p className={customStyles.p1}>Colorpunx</p>
              <div className={customStyles.c1}>Punk name</div>
              <Carousel {...getConfigurableProps()} onChange={(index, value) => handleClick(index, value)}>{baseChildren}</Carousel>
              <center>
                <p className={customStyles.p3}>Colors used by this punx:</p>
                <div>{currentPunk.map((color, index) => {
                  return (
                    <a key={index} href={"../../colors/" + color.substring(1)}>
                      <img width="50" height="50" src={`/images/colors/colorpunx${colorsJSON[color].id}.png`} />
                    </a>
                  )
                })}
                </div>
              </center>
            </>
        }
      </div>
    );
  }
}

export async function getStaticPaths() {

  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  // Fetch data needed for page using params.id
  return {
    props: {
      id: params.id,
      data: punksJSON[`${params.id}`]
    }
  };
}
