import * as React from "react"
import Layout from '../components/layout'
import P5 from '../components/p5/p5'

export default function Home({ data }) {
  return (
    <Layout>
      <div style={{textAlign:'center'}}>
        <P5 />
      </div>
    </Layout>
  )
}
