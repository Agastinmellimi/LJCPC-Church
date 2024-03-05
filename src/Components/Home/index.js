import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import HandlerContext from '../../Context/HandlerContext';
import { TbMickey } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { SiInformatica } from "react-icons/si";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { PiTimerDuotone } from "react-icons/pi";


import AOS from 'aos'

import {
  Container, 
  Heading, 
  BannerContainer, 
  BannerImage, 
  BannerContent,
  TabsContainer,
  Tab,
  TabsContentContainer,
  AboutTab,
  TabName,
  TabNameContainer,
  WidgetsContainer,
  Widgets,
  SelectInput,
  Option,
  
} from './StyledComponents'
import 'aos/dist/aos.css';


const Home = () => {
  
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  

  return (
    <HandlerContext.Consumer>
      {value => {
        const {language, setLanguage} = value
        return (
          <Container>
              <BannerContainer data-aos='flip-down' data-tooltip-delay-show={2000}>
                <BannerImage alt='church' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709185072/btpy2wzv7vku7ak06yxr.png'/>
                <BannerContent>
                    <Heading>{language === 'english' ? 'Lord Jesus Christ Prayer Church': 'ప్రభువైన యేసు క్రీస్తు ప్రార్థన మందిరం.'}</Heading>
                </BannerContent>
              </BannerContainer>
              <TabsContentContainer>
                <TabsContainer>
                    <Tab onClick={() => navigate('/attendance-details')}>
                      <TabNameContainer>
                          <TabName>{language === 'english' ? 'Children Attendance' : 'పిల్లల హాజరు'}</TabName>
                          <TbMickey size={22} data-aos='fade' data-aos-easing="linear" color='#fff'/>
                      </TabNameContainer>
                      </Tab>
                    <Tab graph='true' onClick={() => navigate('/children-progress')}>
                    <TabNameContainer >
                          <TabName>{language === 'english'? 'Children Progress' : 'పిల్లల నివేదికలు'}</TabName>
                          <VscGraph size={22} data-aos='fade' data-aos-easing="linear" color='#232324'/>
                      </TabNameContainer>
                    </Tab>
                </TabsContainer>
                <AboutTab onClick={() => navigate('/about')}>
                      <TabNameContainer>
                          <TabName>{language === 'english'? 'About' : 'వివరాలు'}</TabName>
                          <SiInformatica size={22} data-aos='fade' data-aos-easing="linear" style={{margin: 0}} color='#383838'/>
                      </TabNameContainer>
                </AboutTab>
              </TabsContentContainer>
              <WidgetsContainer>
                <Widgets onClick={() => navigate('/church-timings')}>
                    <TabNameContainer>
                          <TabName >{language === 'english'? 'Prayer times' : 'ప్రార్థన సమయములు'}</TabName>
                          <PiTimerDuotone size={22} data-aos='fade' data-aos-easing="linear" color='#163c80'/>
                      </TabNameContainer>
                </Widgets>
                <Widgets language='true'>
                    
                         
                          <SelectInput l={(language === 'తెలుగు').toString()} defaultValue={language} onChange={(event) => setLanguage(event.target.value)}>
                              <Option  value='english'>English</Option>
                              <Option style={{letterSpacing: '0.7em'}}  value='తెలుగు'>తెలుగు</Option>
                          </SelectInput>
                      
                </Widgets>
                
                <Widgets youtube='true'>
                 <a href='https://www.youtube.com/channel/UCi2Qnb1x9WdyEwvMLw6EnzQ' target='_blank' rel="noreferrer" style={{textDecoration: 'none', color: 'inherit', position: 'relative'}}>
                    <TabNameContainer>
                          <TabName>YouTube</TabName>
                          <PiYoutubeLogoDuotone size={22} data-aos='fade' data-aos-easing="linear" color='#f29196'/>
                      </TabNameContainer>
                  </a>
                </Widgets>
               
              </WidgetsContainer>
              <hr style={{width: '90%', alignSelf: 'center', marginTop: 'auto', border: '1px solid #868a87'}}/>
              <p style={{width: '90%', alignSelf: 'center', fontSize: 13, fontFamily: "Mandali, sans-serif",letterSpacing: '0.20em', textAlign: 'center', marginTop: 0, color: '#fff', padding: 0}}>@AgastinMellimi</p>
          </Container>
        )
      }}
    </HandlerContext.Consumer>
   
)}

export default Home





