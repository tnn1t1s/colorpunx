import { useRouter } from 'next/router'
import colors from '../../components/colors';
import React, { useEffect, useState } from 'react';	
import customStyles from "../../styles/color.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Color(props) { {

	const router = useRouter();
	const [currentColor, setCurrentColor] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	
	const baseChildren =  <div>{
			Object.keys(colors).map((k, i) => {
				let data = colors[k];
				let url = "/colors/" + data.name.substring(1);
				return (
					<div key={i} onClick={() => router.push({pathname: url}, undefined, {scroll: false})}>
						<img src={'/images/colors/colorpunx' + data.id + '.png'}></img>
					</div>					
				);
			})}
		</div>;

	const getConfigurableProps = () => ({
		showArrows: true,
		showStatus: false,
		showIndicators: false,
		infiniteLoop: true,
		centerMode: true,
		centerSlidePercentage: 80,
		showThumbs: true, 
		useKeyboardArrows: true,
		autoPlay: false,
		stopOnHover: true,
		swipeable: true,
		dynamicHeight: true,
		emulateTouch: true,
		autoFocus: false,
		thumbWidth: 80,
		selectedItem: props.data.id - 1,
		interval: 2000,
		transitionTime: 500,
		swipeScrollTolerance: 5,
		ariaLabel: undefined,
	});

	/**
	 * Function handleClick
	 * 
	 * Description: This function is resposible to listen after an action from the react-responsive-carousel
	 * 
	 * @param {index} index value comming from the carousel, indicates the current index position
	 */
	function handleClick(index) {
		let currentColorHex 
		Object.keys(colors).map((value, key) => {
			if (key === index) {
				currentColorHex = colors[value];
				return
			}
		});
		setCurrentColor(currentColorHex);
		router.push({pathname: "/colors/" + currentColorHex.name.substring(1)}, undefined, {scroll: false});
	}

	useEffect(() => {
		setCurrentColor(colors[`#${props.id}`]);
		setIsLoading(false);
	}, []);

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
					<p className={customStyles.p2}>{currentColor.description}.  <a href={currentColor.uri}>Click here to see this NFT on opensea.io.</a></p>
					
					<div className={customStyles.c1}>{currentColor.name}</div>
		
					<div className={customStyles.carousel}>
						<Carousel {...getConfigurableProps()} onChange={(index) => handleClick(index)}>{baseChildren.props.children}</Carousel>
					</div>
		
					<div className={customStyles.c2}>Colorpunk {currentColor.name} is used by {currentColor.punks.length} Cryptopunks</div>
					<center>
						<div>{currentColor.punks.map((color, index) => {
							return (
								<a key={index} href={"../../punks/" + color}>
									<img width="50" height="50" src={'/images/punx/punk' + String(color).padStart(4, '0') + '.png'} />
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
	const paths = Object.keys(colors).map((k, i) => {
		return {
			params: {
				id: k.substring(1, 7)
			}
		};
	});

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	// Fetch data needed for page using params.id
	return {
		props: {
			id: params.id,
			data: colors['#' + params.id]
		}
	};
}
