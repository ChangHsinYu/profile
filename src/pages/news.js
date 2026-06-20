import * as React from 'react';
import './news.css';
import Layout from '../components/layout'

const List = (props) => {
  return(
    <div>
      <div className="news_year">{props.year}</div><div className="news_inf">{props.children}</div><br/>
      <div className="news_loc">location : {props.location}</div>
      <div className="news_inf"><hr/></div>
    </div>
  );

}

const News = () =>{
    return(
      <div>
        <div className="news_content">
          <div className="news_content_language">
          <span className="news_title">Current</span><br/>
          <List year="2026" location="駁二當代館"><a href="https://pier2.org/exhibition/info/1922/" target="_blank" rel="noreferrer">還是先躺一下再說？ Lay Down</a></List>
          <br/>
          <br/>
          <br/>
          <span className="news_title">Upcoming</span><br/>
          <List year="2026" location="當代藝術館"></List>
          </div>
        </div>
      </div>
    );
}

export default function AboutPage ({ data }){
  return (
    <Layout pageTitle="chang hsin-yu 張欣語 news">
      <News />
    </Layout>
  )
}
