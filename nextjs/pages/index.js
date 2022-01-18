import Link from 'next/link';
import React from 'react';
import colors from '../components/colors';
import customStyles from "./index.module.css"
import AutoResponsive from 'autoresponsive-react';

let style = {
	height: 130,
	width: 130,
	cursor: 'default',
	color: '#514713',
	borderRadius: 5,
	boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset',
	backgroundColor: '#FFFFF',
	borderColor: '#796b1d',
	lineHeight: '100px',
	fontWeight: 'bold',
	textShadow: '1px 1px 0px #ab9a3c',
	userSelect: 'none'
  };

const GridContainer = {
	display: 'grid'
};
const PunkCellStyle = {
	display: 'flex',
	justifyContent: 'start',
	alignItems: 'start',
	border: '0px solid black'
};

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			bannerSource: '/images/colorpunx-banner.png'
		};

		this.containerDiv = React.createRef()
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {

		if(window.innerWidth > 800){
			this.setState({bannerSource: '/images/colorpunx-banner.png'});
		}else{
			this.setState({bannerSource: '/images/colorpunx-banner-scaled.jpg'});
		}

	}
	
	getAutoResponsiveProps() {
		return {
		  horizontalDirection: 'left',
		  verticalDirection: 'top',
		  itemMargin: 10,
		  containerWidth: null,
		  itemClassName: 'item',
		  containerHeight: null,
		  transitionDuration: '.8',
		  transitionTimingFunction: 'easeIn'
		};
	 }

	renderItems() {
		return Object.keys(colors).map((k, i) => {
			let data = colors[k];
			return (
				<div className="item" key={i} style={style}>
					
					<Link href={data.uri} style={{zIndex: 1}}>
						<img src={'/images/colors/colorpunx' + data.id + '.png'} width={130} height={130} />
					</Link>

					 <span className={customStyles.rectangleColor}>{data.name}</span> 
					
				</div>
			);
		});
	}


	render(){
	return (
		<div>
			<img src={this.state.bannerSource} width="100%" height="auto" />
			<br />
			<div>
				ColorPunx are monochromatic NFT paintings sourced from the 222 unique colors used in the Larvalabs
				Cryptopunks. To my knowledge, they are the first piece in the lineage of quantitative art history of
				early NFT works with work artifacts recorded on the blockchain.  The Colorpunx are not affiliated with Larvalabs.
			</div>
			<br />

			<div ref={this.containerDiv}>
				<AutoResponsive ref="container" {...this.getAutoResponsiveProps()} >
					{this.renderItems()}
				</AutoResponsive>
			</div>
		</div>
	);
	}
}

export default Index
