import * as React from "react"
import Layout from '../components/layout'
// import P5 from '../components/p5/p5'
import Loadable from "@loadable/component";
const P5 = Loadable(() => import('../components/p5/p5'), { ssr: false });

export default function Home({ data }) {
  return (
    <Layout pageTitle="chang hsin-yu 張欣語">
      <div style={{textAlign:'center'}}>
        <P5 />
      </div>
    </Layout>
  )
}
