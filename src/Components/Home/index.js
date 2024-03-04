import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import { TbMickey } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { SiInformatica } from "react-icons/si";
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
  TabNameContainer
} from './StyledComponents'
import 'aos/dist/aos.css';


const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  

  return (
    <Container>
          <BannerContainer data-aos='flip-down' data-tooltip-delay-show={2000}>
            <BannerImage alt='church' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709185072/btpy2wzv7vku7ak06yxr.png'/>
            <BannerContent>
                <Heading>Lord Jesus Christ Prayer Church</Heading>
            </BannerContent>
          </BannerContainer>
          <TabsContentContainer>
            <TabsContainer>
                <Tab onClick={() => navigate('/attendance-details')}>
                  <TabNameContainer>
                      <TabName>Children Attendance</TabName>
                      <TbMickey size={22} data-aos='slide-right' data-aos-easing="linear" color='#fff'/>
                  </TabNameContainer>
                  </Tab>
                <Tab graph='true' onClick={() => navigate('/children-progress')}>
                <TabNameContainer >
                      <TabName>Children Progress</TabName>
                      <VscGraph size={22} data-aos='slide-right' data-aos-easing="linear" color='#232324'/>
                  </TabNameContainer>
                </Tab>
            </TabsContainer>
            <AboutTab onClick={() => navigate('/about')}>
                  <TabNameContainer>
                      <TabName>About</TabName>
                      <SiInformatica size={22} data-aos='slide-right' data-aos-easing="linear" style={{margin: 0}} color='#383838'/>
                  </TabNameContainer>
            </AboutTab>
          </TabsContentContainer>
          <hr style={{width: '90%', alignSelf: 'center', marginTop: 'auto', border: '1px solid #868a87'}}/>
          <p style={{width: '90%', alignSelf: 'center', fontSize: 13, fontFamily: "Mandali, sans-serif",letterSpacing: '0.20em', textAlign: 'center', marginTop: 0, color: '#fff', padding: 0}}>@AgastinMellimi</p>
    </Container>
   
)}

export default Home





