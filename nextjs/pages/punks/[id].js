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
    const carouselLength = 100 
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
      useKeyboardArrows: true,
      autoPlay: false,
      stopOnHover: false,
      swipeable: true,
      dynamicHeight: true,
      emulateTouch: true,
      autoFocus: false,
      thumbWidth: 75,
      selectedItem: 0,
      interval: 2000,
      transitionTime: 500,
      swipeScrollTolerance: 1,
      ariaLabel: undefined,
    });

    function handleLoading() {
      let currentId = window.location.pathname.split('/')[2]
      setBaseChildren(() =>
        Array.from({ length: carouselLength }).map((_, index) => {
          let count = Number(index) + Number(currentId)
				  console.log(count)
					return (
            <div className={customStyles.punkMainImage} key={index} onClick={() => router.push({ pathname: 'https://www.larvalabs.com/cryptopunks/details/' + (Number(currentId) + index) }, undefined, { scroll: false })}>
						  <div className={customStyles.punkMainText}>{count}</div>
              <img src={'/images/3x/punk' + String(count).padStart(4,'0') + '.png'}></img>
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
			if (currentSlide > index) {
				var step = (currentSlide - index)
        router.push({ pathname: "/punks/" + (Number(props.id) - step) }, undefined, { scroll: false });
        setCurrentPunk(punksJSON[`${Number(props.id) - step}`])
      } else if (currentSlide < index) {
				var step = (index - currentSlide)
        router.push({ pathname: "/punks/" + (Number(props.id) + step) }, undefined, { scroll: false });
        setCurrentPunk(punksJSON[`${Number(props.id) + step}`])
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
              <a href="/"><img src="/images/colorpunx-banner-trim.png" width="100%" height="auto" /></a>
              <p className={customStyles.p1}>Colorpunx</p>
					<p className={customStyles.p2}>The Colorpunx are NFTs sourced from the CryptoPunks color palette. They can be browsed at <a href="http://opensea.io/collection/colorpunx">ColorPunx on OpenSea</a></p><div/>
              <Carousel {...getConfigurableProps()} onChange={(index, value) => handleClick(index, value)}>{baseChildren}</Carousel>
              <center>
                <p className={customStyles.p3}>Colors used in this punk:</p>
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
	const paths = Object.keys(punksJSON).map((k, i) => {
		return {
			params: {
				id: k
			}
		};
	})

  return {
    paths: paths,
		fallback: false
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
