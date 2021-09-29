import * as React from 'react';
import Portrait from "./portrait.jpg";
import './cv.css';
import Layout from '../components/layout'

const List = (props) => {
  return(
    <div>
      <div className="cv_year">{props.year}</div><div className="cv_inf">{props.children}</div><br/>
      <div className="cv_year"></div><div className="cv_inf"><hr/></div>
    </div>
  );

}

const Cv = () =>{
    return(
      <div>
        <div>
          <img className="cv_img" src={Portrait} alt="portrait"/>
        </div>
        <div className="cv_content">
          <div className="cv_content_language">
            <div style={{fontSize:'1.4rem'}}>Chang Hsin Yu<br/></div>
          <br/>
          1999 Born in HsinChu, Taiwan. CHANG Hsin-Yu is an interactive/ sound/ installation artist. He particularly focuses on the area of the creative process & various approaches in making sound and images, and his sound installation based on interesting mechanisms is created to make special sound effects as well as response to life experience.<br/>
          <br/><br/>
          <span className="cv_title">Education</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf"></div><br/>
          <List year="&nbsp;&nbsp;&nbsp;&nbsp;|">Taipei National University of Art Department of New Media Arts</List>
          <div className="cv_year">2017</div><div className="cv_inf"></div><br/>
          <br/>
          <br/>
          <span className="cv_title">Award</span><br/>
          <List year="2021">Taiwan emerging art awards - shortlist.(Taichung, Taiwan)</List>
          <List year="    ">Contemporary art prize - exellence award.(Taipei, Taiwan)</List>
          <List year="    ">24th Japan media art festival - art divition jury selection. (Japan)</List>
          <List year="2020">Taoyuan technology performing art awards - exellence award.(Taoyuan, Taiwan)</List>
          <br/>
          <br/>
          <span className="cv_title">Exhibition</span><br/>
          <List year="2021">Nuit Blanche Taipei (online). (Taipei, Taiwan)</List>
          <List year="    ">Contemporary Art Prize. (Taipei, Taiwan)</List>
          <List year="2020">Taipei Digital Art Festival. (Taipei, Taiwan)</List>
          <List year="    ">Taoyuan Art x Technology Festival. (Taoyuan, Taiwan)</List>
          <br/>
          <br/>
          <span className="cv_title">Performence</span><br/>
          <List year="2021">New Media Art Department 106 graduated production opening.(Taipei, Taiwan)</List>
          <List year="    ">New Media Art Department Exhibition 8th opening.(Taipei, Taiwan)</List>
          <List year="2020">New Media Art Department Exhibition 7th opening.(Taipei, Taiwan)</List>
          <List year="2019">New Media Art Department Exhibition 6th opening.(Taipei, Taiwan)</List>
          <br/>
          <br/>
          <span className="cv_title">Design</span><br/>
          <List year="2021">Genesis One Prometheus' Dream : curtains up for new artist, Sound Design.(Taichung, Taiwan)</List>
          <List year="    ">NCCU Music Festival, Video Design.(Taipei, Taiwan)</List>
          <List year="    ">Cantilena of Shivering Bow : U-Lai Chan Percussion Recital , Electronic Sound Engineer.(Taipei, Taiwan)</List>
          <List year="    ">99% Truth : MA Wei-Yuan and LIN Zhe-Zhi Double Solo Exhibitions, Technical Design.(Taipei, Taiwan)</List>
          <List year="    ">1:1 : MA Wei-Yuan solo performence, Technical Design.(Taipei, Taiwan)</List>
          <List year="2020">Post Garden : Technology and Music Transdisciplinary Experimental Theater, Electronic Sound Design.(Taipei, Taiwan)</List>
          <List year="    ">Chambre of Hysteria : Taoyuan technology performing art awards, Sound and Visual Design.(Taipei, Taiwan)</List>
          <List year="    ">The Future Shuttle : Taoyuan technology performing art awards, Visual Design.(Taipei, Taiwan)</List>
          <List year="    ">The Scenery of Little Light : NTT-TIFA Artist in Residence WANG Lien-Cheng's Project, New Media Design.(Taichung, Taiwan)</List>
          <List year="2019">Moving Me Badly : KuanDu Light Art Festival, New Media design.(Taipei, Taiwan)</List>
          <br/>
          <br/>
          </div>
          <div style={{marginTop:'50px', marginBottom:'70px'}}></div>
          <div className="cv_content_language">
          <div style={{fontSize:'1.4rem'}}>張欣語<br/></div>
          <br/>
          1999年生於新竹，現就讀北藝大新媒體藝術學系，作品包含互動、裝置、聲音。注重聲音及影像生成的過程及方法，聲音裝置作品除了利用有趣的運作機制來創造特殊聲響外，也嘗試以此機制作為聲音呼應生活經驗感受的中介。<br/>
          <br/>
          <br/>
          <span className="cv_title">學歷</span><br/>
          <div className="cv_year">2021</div><div className="cv_inf"></div><br/>
          <List year="&nbsp;&nbsp;&nbsp;&nbsp;|">國立臺北藝術大學 新媒體藝術學系</List>
          <div className="cv_year">2017</div><div className="cv_inf"></div><br/>
          <br/>
          <br/>
          <span className="cv_title">獲獎</span><br/>
          <List year="2021">臺灣美術新貌獎。入圍，台灣</List>
          <List year="    ">北藝當代藝術獎。優選，台灣</List>
          <List year="    ">文化廳媒體藝術祭24th。藝術類評審團獎，日本</List>
          <List year="2020">桃園科技藝術表演獎。優秀獎，台灣</List>
          <br/>
          <br/>
          <span className="cv_title">展覽</span><br/>
          <List year="2021">臺北白晝之夜。線上，臺北，台灣</List>
          <List year="    ">北藝當代藝術獎。地下美術館，臺北，台灣</List>
          <List year="2020">10_LOVE愛情數據：台北數位藝術節。松菸四號倉庫，臺北，台灣</List>
          <List year="    ">當然耳：桃園科技藝術節。桃園展演中心，桃園，台灣</List>
          <br/>
          <br/>
          <span className="cv_title">表演</span><br/>
          <List year="2021">新媒體藝術系106級畢業製作開幕表演。四四南村，臺北，台灣</List>
          <List year="    ">新媒體藝術系系展8th開幕。北藝大地下美術館，臺北，台灣</List>
          <List year="2020">新媒體藝術系系展7th開幕。北藝大地下美術館，臺北，台灣</List>
          <List year="2019">新媒體藝術系系展6th開幕。北藝大地下美術館，臺北，台灣</List>
          <br/>
          <br/>
          <span className="cv_title">設計</span><br/>
          <List year="2021">創世紀首部曲普羅米修斯的夢境：開場計畫。聲音設計。臺中歌劇院，臺中，台灣</List>
          <List year="    ">政大音樂節。影像設計。三創clap studio，臺北，台灣</List>
          <List year="    ">顫弩的吟詠：陳裕禮擊樂畢業獨奏會。聲音工程。北藝大舞蹈廳，臺北，台灣</List>
          <List year="    ">99%的真實：馬維元、林哲志雙個展。技術設計。台北數位藝術中心，臺北，台灣</List>
          <List year="2020">1:1：馬維元單人表演。裝置設計。牯嶺街小劇場，臺北，台灣</List>
          <List year="    ">後花園：科技與音樂跨域實驗劇場。電聲設計，裝置設計。北藝大戲劇廳，臺北，台灣</List>
          <List year="    ">桃園科技文化城x文策院聯合記者會。影像設計。松菸文創園區，臺北，台灣</List>
          <List year="    ">歇斯底里的房間。影像設計、聲音設計。北藝大燈光實驗室，臺北，台灣</List>
          <List year="    ">異日方梭。影像設計。北藝大新媒系黑盒子，台灣</List>
          <List year="    ">無光風景：NTT-TIFA駐館藝術家王連晟作品。新媒體藝術設計。台中歌劇院，台中，台灣</List>
          <List year="2019">壞運動：關渡光藝術節。新媒體藝術設計。北藝大游泳館，臺北，台灣</List>
          <List year="    ">浮田舞影：邵族水沙連湖畔的夏夜杵歌。影像設計。臺灣音樂館，臺北，台灣</List>
          <List year="    ">車過枋寮：余光中音樂劇。影像設計。屏東演藝廳，屏東，台灣</List>
          <List year="2018">車過枋寮：余光中音樂劇。影像設計。北藝大舞蹈廳，臺北，台灣</List>
          <br/>
          </div>
        </div>
      </div>
    );
}

export default function AboutPage ({ data }){
  return (
    <Layout pageTitle="cv">
      <Cv />
    </Layout>
  )
}
