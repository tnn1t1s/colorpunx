import Image from 'next/image'
import Link from "next/link";
import colors from "../components/colors"
import styles from "../styles/Home.module.css"


export default function Index() {
  return (
    <div>
      <img src = "images/colorpunx-banner.png" />
        <br/>
        <div>
          ColorPunx are monochromatic NFT paintings sourced from the 222 unique colors used in the Larvalabs Cryptopunks. To my knowledge, they are the first piece in the lineage of quantitative art history of early NFT works with work artifacts recorded on the blockchain. 
        </div>
        <br/>
		    <div>
          {Object.keys(colors).map((k, i) => {
            let data = colors[k];
						return (
							<div key={data.id}><Link href={data.uri}>
							<Image src={"/images/colors/colorpunx" + data.id + ".png"} width="80" height="80"/></Link>
                <Image src={"/images/punks_by_color/" + data.id + ".png"} width="1000" height="100"/>
				     </div>
            );
          })}
		</div>
		</div>
  );
}
