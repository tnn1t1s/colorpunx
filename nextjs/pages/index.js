// index.js import Link from "next/link";
import colors from "./colors"

export default function Index() {
  return (
    <div>
      <img src = "images/colorpunx-banner.png" />
        <br/>
        <div>
          ColorPunx are monochromatic NFT paintings sourced from the 222 unique colors used in the Larvalabs Cryptopunks. To my knowledge, they are the first piece in the lineage of quantitative art history of early NFT works with work artifacts recorded on the blockchain. 
        </div>
        <br/>
        <div><center>Colorpunx</center></div>
        <div>
          <table border="0" cellspacing="0" cellpadding="0">
        <tbody>
          {Object.keys(colors).map((k, i) => {
            let data = colors[k];
            return (
              <tr valign="top" key={i}>
                <td>{i}</td>
                <td><img src={"images/colors/colorpunx" + data.id + ".png"} width="80" height="80"/></td>
                <td><img src={"images/punks_by_color/" + data.id + ".png"}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    </div>
  );
}
