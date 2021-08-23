// index.js import Link from "next/link";
import colors from "./colors"

export default function Index() {
  return (
    <div>
      <img src = "images/colorpunx-banner.png" />
        <div><center>Colorpunx</center></div>
        <div>
          ColorPunx are monochromatic NFT paintings sourced from the 222 unique colors used in the Larvalabs Cryptopunks. To my knowledge, they are the first piece in the lineage of quantitative art history of early NFT works with work artifacts recorded on the blockchain. To date, 2 Colorpunxs have been minted; two new Colorpunx will be minted weekly until the full set of 222 are available. If there is demand for this work, additional Colorpunx can be minted for a minting fee of 2ETH.

        </div>
        <div>
          <table>
        <thead>header</thead>
        <tbody>
          {Object.keys(colors).map((k, i) => {
            let data = colors[k];
            return (
              <tr key={i}>
                <td><img src={"images/colors/colorpunx" + data.id + ".png"} width="20" height="20"/></td>
                <td><img src={"images/punks_by_color/" + data.id + ".png"}/></td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    </div>
  );
}
