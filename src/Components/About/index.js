import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import AOS from 'aos'
import {Skeleton} from 'react-skeleton-generator'
import { IoIosArrowBack } from "react-icons/io";

import {
  AboutContainer,
  AboutDetailsContainer,
  AboutText,
  DetailsContentContainer,
  DetailsImage,
  HighlatedText,
  DetailsText,
  HomeBannerContainer,
  ContentContainer,
  Quotation,
  Image,
  BackBtn,
  BackBtnContainer,
  HomeImage,
  SelectInput,
  Option
} from './StyledComponents'
import 'aos/dist/aos.css';


const About = () => {
  const [loader, setLoader] = useState(true)
  const [language, setLanguage] = useState('english')
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({duration: 2000})
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  const changeLanguage = (event) => {
    setLanguage(event.target.value)
  }
  return (
  
      <AboutContainer>
        <BackBtnContainer>
            <IoIosArrowBack color='#fff'  className="icon"/>
            <BackBtn type='button' onClick={() => navigate('/')}>
                <HomeImage alt='home' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709379149/tjrzexavkxpfacg5atjf.gif'/>
                  
                </BackBtn>
                <SelectInput defaultValue={language} onChange={changeLanguage}>
                    <Option  value='english'>English</Option>
                    <Option style={{letterSpacing: '0.7em'}}  value='తెలుగు'>తెలుగు</Option>
                </SelectInput>
        </BackBtnContainer>
        <AboutDetailsContainer>
        {loader ? (
                   <Skeleton.SkeletonThemeProvider highlight="dark" animationDuration={1} color="rgba(219, 219, 219, 0.27000001072883606)" dataTestId="loader" style={{marginBottom: 50}}>
                      <Skeleton style={{width: '100%', maxWidth: '240px', margin: 'auto', height: '220px', borderRadius: '50%', marginTop: 20}}/>
                      <Skeleton count={3} widthMultiple={['70%', '60%', '50%']} heightMultiple={['20px', '17px', '17px']} style={{ margin: 'auto',  borderRadius: '15px', marginTop: 10}}/>
                    </Skeleton.SkeletonThemeProvider>
        ) : (
          <>
          <DetailsImage  alt='pastor. Christopher geru' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706589275/qggh5tfhxz8nxlgaeep0.png'/>
          <DetailsContentContainer data-aos='flip-up'>
              <AboutText style={{marginBottom: 3}}>{language === 'english' ? (
                <>
                <HighlatedText>L</HighlatedText>ord <HighlatedText>J</HighlatedText>esus <HighlatedText>C</HighlatedText>hrist <HighlatedText>P</HighlatedText>rayer <HighlatedText>C</HighlatedText>hurch.
                </>
              ) : (
                <>
                <HighlatedText>ప్ర</HighlatedText>భువైన <HighlatedText>యే</HighlatedText>సు <HighlatedText>క్రీ</HighlatedText>స్తు <HighlatedText>ప్రా</HighlatedText>ర్థన <HighlatedText>మం</HighlatedText>దిరం.
                </>
              )}</AboutText>
             
             <DetailsText>
                 {language === 'english' ? (
                  <>
                    Our beloved pastor <HighlatedText style={{fontSize: 18}}>M.Christopher</HighlatedText> garu,
                  </>
                 ) : (
                  <>
                  మన ప్రియతమ పాస్టర్ <HighlatedText style={{fontSize: 18}}>ఎం.క్రిస్టోఫర్</HighlatedText> గారు,
                </>
                 )}
             </DetailsText>
            
             <DetailsText>{language === 'english' ? 'Kota, Konaseema dist, AP - 533306' : 'కోట, కోనసీమ జిల్లా, AP - 533306'}</DetailsText>
             
          </DetailsContentContainer>
          </>
        )}
          
           
        </AboutDetailsContainer>
       
        <HomeBannerContainer>
            <Image alt='brother.W.MBranham' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707662095/sss5vifxtgjntfxusuhi.jpg'/>
            
            <ContentContainer>
                <Quotation>
                  {language === 'english' ? (
                    <>
                    <HighlatedText>Brother William M. Branham, The prophet of this age</HighlatedText>.
                     The photograph was verified as being an authentic capture of a supernatural being by Mr.George J.Lacy of the American Society of Questioned Document Examiners.
                    </>
                  ): (
                    <>
                    <HighlatedText>బ్రదర్ విలియం ఎం. బ్రాన్‌హామ్, ఈ కాల ప్రవక్త</HighlatedText>.
                    అమెరికన్ సొసైటీ ఆఫ్ క్వశ్చన్డ్ డాక్యుమెంట్ ఎగ్జామినర్స్‌కు చెందిన Mr. జార్జ్ J. లాసీ ద్వారా ఈ ఫోటో ఒక అతీంద్రియ జీవి యొక్క ప్రామాణికమైన సంగ్రహంగా ధృవీకరించబడింది.
                    </>
                  )}
                </Quotation>
                
                 
            </ContentContainer>
           
           
        </HomeBannerContainer>
        
        <HomeBannerContainer>
            <Image second alt='Cloud' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706610749/u4nb4sd5wy7o5bc1gx8g.jpg'/>
            <ContentContainer second>
                <Quotation>
                  {language === 'english' ? (
                          <>
                          <HighlatedText>Mysterious Cloud</HighlatedText> This photograph appeared on the cover of "Science Magazine", 
                          19th April 1963, in "Life Magazine",
                          17th May 1963, and in the "London Observer". The "Encyclopedia Britannica" also recorded details of this cloud in their 1965 yearbook.
                          </>
                  ) : (
                        <>
                            <HighlatedText>మర్మ యుక్తమైన మేఘము</HighlatedText> ఈ ఛాయాచిత్రం "సైన్స్ మ్యాగజైన్" ముఖచిత్రంపై కనిపించింది,
                            19 ఏప్రిల్ 1963, "లైఫ్ మ్యాగజైన్"లో,
                            మే 17, 1963, మరియు "లండన్ అబ్జర్వర్"లో. "ఎన్‌సైక్లోపీడియా బ్రిటానికా" వారి 1965 సంవత్సరపు పుస్తకంలో ఈ క్లౌడ్ వివరాలను కూడా నమోదు చేసింది. 
                        </>
                  )}
                  
                  
                </Quotation>
            </ContentContainer>
        </HomeBannerContainer>
       
      </AboutContainer>
      

)}

export default About