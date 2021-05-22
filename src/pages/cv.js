import * as React from 'react';
import { graphql } from "gatsby";
import Portrait from "./portrait.jpg";
import './cv.css';
import Layout from '../components/layout'

const Cv = () =>{
    return(
      <div>
        <div>
          <img className="cv_img" src={Portrait}/>
        </div>
        <div className="cv_content">
          <div className="cv_content_language">
            <div style={{fontSize:'1.4rem'}}>Chang Hsin Yu<br/></div>
          <br/>
          1999 Born in HsinChu, Taiwan. His works include interactive installations, generative art, sound installations and sound performances. His recent creation revolves around erroneous sound experiments, expecting to use interesting mechanisms to produce some unpredictable special sounds.<br/>
          <br/><br/>
          <span className="cv_title">Education</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf"></div><br/>
          <div className="cv_year">&nbsp;&nbsp;&nbsp;&nbsp;|</div><div className="cv_inf">Taipei National University of Art Department of New Media Arts</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2017</div><div className="cv_inf"></div><br/>
          <br/>
          <br/>
          <span className="cv_title">Award</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">Contemporary Art Prize - exellence award.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">24th Japan media art festival - art divition jury selection. (Japan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">Taoyuan technology performing art awards - exellence award.(Taoyuan, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          <br/>
          <span className="cv_title">Exhibition</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">Contemporary Art Prize. (Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">Taipei Digital Art Festival. (Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">Taoyuan Art x Technology Festival. (Taoyuan, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          <br/>
          <span className="cv_title">Performence</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">New Media Art Department 106 graduated production opening.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">New Media Art Department Exhibition 8th opening.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">New Media Art Department Exhibition 7th opening.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2019</div><div className="cv_inf">New Media Art Department Exhibition 6th opening.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          <br/>
          <span className="cv_title">Design</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">NCCU Music Festival, VclassNameeo Design.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">Cantilena of Shivering Bow : U-Lai Chan Percussion Recital , Electronic Sound Engineer.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">99% Truth : MA Wei-Yuan and LIN Zhe-Zhi Double Solo Exhibitions, Technical Design.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">1:1 : MA Wei-Yuan solo performence, Technical Design.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">Post Garden : Technology and Music Transdisciplinary Experimental Theater, Electronic Sound Design.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">Chambre of Hysteria : Taoyuan technology performing art awards, Sound and Visual Design.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">The Future Shuttle : Taoyuan technology performing art awards, Visual Design.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">The Scenery of Little Light : NTT-TIFA Artist in ResclassNameence WANG Lien-Cheng's Project, New Media Design.(Taichung, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2019</div><div className="cv_inf">Moving Me Badly : KuanDu Light Art Festival, New Media design.(Taipei, Taiwan)</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          <br/>
          </div>
          <div style={{marginTop:'50px', marginBottom:'70px'}}></div>
          <div className="cv_content_language">
          <div style={{fontSize:'1.4rem'}}>張欣語<br/></div>
          <br/>
          1999年生於新竹，現就讀北藝大新媒體藝術學系，作品包含互動裝置、演算影像、聲音裝置及聲音表演。近期創作圍繞錯誤的聲音實驗，希望利用有趣的運作機制來產生各種不可預期的特殊聲響。<br/>
          <br/>
          <br/>
          <span className="cv_title">學歷</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf"></div><br/>
          <div className="cv_year">&nbsp;&nbsp;&nbsp;&nbsp;|</div><div className="cv_inf">國立臺北藝術大學 新媒體藝術學系</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2017</div><div className="cv_inf"></div><br/>
          <br/>
          <br/>
          <span className="cv_title">獲獎</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">北藝當代藝術獎。優選，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">文化廳媒體藝術祭24th。藝術類評審團獎，日本</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">桃園科技藝術表演獎。優秀獎，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          <br/>
          <span className="cv_title">展覽</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">北藝當代藝術獎。地下美術館，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">10_LOVE愛情數據：台北數位藝術節。松菸四號倉庫，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">當然耳：桃園科技藝術節。桃園展演中心，桃園，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          <br/>
          <span className="cv_title">表演</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">新媒體藝術系106級畢業製作開幕表演。四四南村，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">新媒體藝術系系展8th開幕。北藝大地下美術館，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">新媒體藝術系系展7th開幕。北藝大地下美術館，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2019</div><div className="cv_inf">新媒體藝術系系展6th開幕。北藝大地下美術館，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          <br/>
          <span className="cv_title">設計</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf">政大音樂節。影像設計。三創clap studio，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">顫弩的吟詠：陳裕禮擊樂畢業獨奏會。聲音工程。北藝大舞蹈廳，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">99%的真實：馬維元、林哲志雙個展。技術設計。台北數位藝術中心，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2020</div><div className="cv_inf">1:1：馬維元單人表演。裝置設計。牯嶺街小劇場，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">後花園：科技與音樂跨域實驗劇場。電聲設計，裝置設計。北藝大戲劇廳，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">桃園科技文化城x文策院聯合記者會。影像設計。松菸文創園區，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">歇斯底里的房間。影像設計、聲音設計。北藝大燈光實驗室，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">異日方梭。影像設計。北藝大新媒系黑盒子，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">無光風景：NTT-TIFA駐館藝術家王連晟作品。新媒體藝術設計。台中歌劇院，台中，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2019</div><div className="cv_inf">壞運動：關渡光藝術節。新媒體藝術設計。北藝大游泳館，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">浮田舞影：邵族水沙連湖畔的夏夜杵歌。影像設計。臺灣音樂館，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year"></div><div className="cv_inf">車過枋寮：余光中音樂劇。影像設計。屏東演藝廳，屏東，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <div className="cv_year">2018</div><div className="cv_inf">車過枋寮：余光中音樂劇。影像設計。北藝大舞蹈廳，臺北，台灣</div><br/>
          <div className="cv_year"></div><div className="cv_inf"><hr/></div>
          <br/>
          </div>
        </div>
      </div>
    );
}

export default function AboutPage ({ data }){
  return (
    <Layout pageTitle="cv">
      <h1>About {data.site.siteMetadata.title}</h1>
      <Cv />
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// export default AboutPage;
