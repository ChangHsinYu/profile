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
          no<br/>
          <br/>
          <br/>
          <span className="news_title">Upcoming</span><br/>
          <List year="2025 May (Group Exhibition)" location="(Netherlands)"><a href="https://0-1.gallery/open-calls/esc-2034/" target="_blank" rel="noreferrer">ESC 2034: 0→1</a></List>
          <List year="2025 June 1rst (Performance)" location="高雄承億酒店">未來影音藝術饗域</List>
          <List year="2025 June (Workshop)" location="國立台灣美術館">聲音藝術工作坊</List>
          <List year="2025 July (Exhibition)" location="陸府生活美學基金會">聲音藝術展覽</List>
          <List year="2025 August (Solo Exhibition)" location="水谷藝術">個展</List>
          <List year="2025 October (Exhibition)" location="基隆">基隆潮藝術</List>
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
