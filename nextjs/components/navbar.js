import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<img src="/images/colorpunx-banner.png" width="1620" height="420" layout="responsive" />
			</div>
		</nav>
	);
};

export default Navbar;
