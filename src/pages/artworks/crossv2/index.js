import img0 from './img_0.jpg';
import img1 from './img_1.jpg';
import img2 from './img_2.jpg';
import img3 from './img_3.jpg';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../artwork_inf.css';
import artwork from './desc';

function Artwork(){
    return(
      <div id="work_main">
        <img id="img" src={img0} />
        <div id="ttlbox">
          <div id="ttl">{artwork.title}</div>
          <div id="inf">{artwork.category}<br />{artwork.year}</div>
        </div>
        <div id="box">
          <div id="dscrptn">{ReactHtmlParser(artwork.discription_en)}</div>
        </div>&nbsp;
        <div id="box">
          <img id="subimg" src={img1} />
        </div>&nbsp;
        <div id="box">
          <img id="subimg" src={img2} />
        </div>&nbsp;
        <div id="box">
          <div id="dscrptn">{ReactHtmlParser(artwork.discription_ch)}</div>
        </div>&nbsp;
        <div id="box">
          <img id="subimg" src={img3} />
        </div>&nbsp;
        <div id="box"></div>&nbsp;
        <div id="frame">
          <iframe title="vimeo-player" src={artwork.vimeo} width='100%' height='100%' frameborder='0' allowfullscreen='1'></iframe>
        </div>
      </div>
    );
}

export default Artwork;
