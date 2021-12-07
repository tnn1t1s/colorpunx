import Image from 'next/image'
import Link from "next/link";
import Layout from '../../components/layout'
import colors from '../../components/colors'

export default function Color(props) {
    return <Layout>
        <table>
        <tbody>
		<tr key={props.i}>
            <td><Link href="http://opensea.io"><img src={"/images/colors/colorpunx" + props.data.id + ".png"} width={80} height={80}/></Link></td>
            <td><img src={"/images/punks_by_color/" + props.data.id + ".png"}/></td>
        </tr>
        </tbody>
        </table>
    </Layout>
}




export async function getStaticPaths() {
  const paths =  Object.keys(colors).map((k, i) => {
    return {
      params: {
        id: k.substring(1,7),
      }
    }
  })

  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({ params }) {
   // Fetch data needed for page using params.id
	console.log(params.id)
  return {
    props: {
        id: params.id,
        data: colors['#' + params.id]
    }
  }
}
