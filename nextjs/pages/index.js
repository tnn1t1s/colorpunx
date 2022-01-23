import Link from 'next/link';
import React from 'react';
import colors from '../components/colors';
import customStyles from "../styles/index.module.css"
import AutoResponsive from 'autoresponsive-react';

let style = {
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

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			bannerSource: '/images/colorpunx-banner-trim.png',
			boxSize: 140
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
			this.setState({bannerSource: '/images/colorpunx-banner-trim.png'});
		}else{
			this.setState({bannerSource: '/images/colorpunx-banner-trim.png'});
		}

		console.log("width", window.innerWidth);
		console.log("rect", (window.innerWidth - 50) / 3);

		if(window.innerWidth < 550){
			this.setState({boxSize: (window.innerWidth - 50) / 3});
		}else{
			this.setState({boxSize: 140});
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
				<div className="item" key={i} style={{...style, width: this.state.boxSize, height: this.state.boxSize}}>
					
					<Link href={"/colors/" + data.name.substring(1)} style={{zIndex: 1}}>
						<img src={'/images/colors/colorpunx' + data.id + '.png'} width={this.state.boxSize} height={this.state.boxSize} />
					</Link>

					<span className={customStyles.rectanglecolor}>{data.name}</span> 
					
				</div>
			);
		});
	}

	render(){
		return (
			<div>
				<img src={this.state.bannerSource} width="100%" height="auto" />
				
				<div className={customStyles.box}>
					<div className={customStyles.textcontainer}>
						<p className={customStyles.p1}>Colorpunx</p>
						<p className={customStyles.c1}>Monochromatic digital artworks built from the Cryptopunks color palette.</p>
						<p className={customStyles.c2}>ColorPunx are monochromatic NFT paintings sourced from the 222 unique<br/> 
							colors used in the Larvalabs Cryptopunks. They are the first piece <br/>
							in the lineage of quantitative art history of early NFT works with work<br/> 
							artifacts recorded on the blockchain.<br/> 
							The Colorpunx are not affiliated with Larvalabs.</p>

						<div className={customStyles.b}>
							<p className={customStyles.p2}>The Colorpunx</p>
						</div>
						
					</div>
				</div>

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
