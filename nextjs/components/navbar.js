import Image from 'next/image'

const Navbar = () => {
	return (
		<nav>
		  <div className="logo">
        <Image src="/images/colorpunx-banner.png" height="600" width="2000"/>
	    </div>
		</nav>
  );
}

export default Navbar;
