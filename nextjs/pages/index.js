import Image from 'next/image';
import Link from 'next/link';
import colors from '../components/colors';
import styles from '../styles/Home.module.css';

export default function Index() {
	const GridContainer = {
		display: 'grid'
	};
	const PunkCellStyle = {
		display: 'flex',
		justifyContent: 'start',
		alignItems: 'start',
		border: '1px solid black'
	};

	return (
		<div>
			<img src={'/images/colorpunx-banner.png'} width="1620" height="420" />
			<br />
			<div>
				ColorPunx are monochromatic NFT paintings sourced from the 222 unique colors used in the Larvalabs
				Cryptopunks. To my knowledge, they are the first piece in the lineage of quantitative art history of
				early NFT works with work artifacts recorded on the blockchain.
			</div>
			<br />
			<div style={GridContainer}>
				{Object.keys(colors).map((k, i) => {
					let data = colors[k];
					return (
						<div style={PunkCellStyle} key={data.id}>
							<Link href={data.uri}>
								<img src={'/images/colors/colorpunx' + data.id + '.png'} width="100" height="100" />
							</Link>
							<Link href={data.uri}>
								<div style={{ color: '#6e6e6e', fontSize: '1.25rem' }}>{data.name}</div>
						</Link>
						<Link href={"/colors/" + data.name.substring(1)}>
						<img src={'/images/punks_by_color/' + data.id + '.png'} />
						</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
