import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import colors from '../../components/colors';

export default function Color(props) {
	const PunkCellStyle = {
    marginTop: "2rem",
		display: 'flex',
	
	};
	return (
		<Layout>
			<div style={PunkCellStyle} key={props.i}>
				<Link href={props.data.uri}>
					<img src={'/images/colors/colorpunx' + props.data.id + '.png'} width={100} height={100} />
		    </Link>
				<img src={'/images/punks_by_color/' + props.data.id + '.png'}/>
			</div>
		</Layout>
	);
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
	console.log(params.id);
	return {
		props: {
			id: params.id,
			data: colors['#' + params.id]
		}
	};
}
