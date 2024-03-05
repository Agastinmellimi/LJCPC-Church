import {useEffect, useState} from 'react'
import BarLoader from "react-spinners/BarLoader";
import {useNavigate} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import HandlerContext from '../../Context/HandlerContext';


import {
    TimingsContainer,
    Heading,
    ServicesContainer,
    Service,
    ServiceImage,
    ServiceName,
    ServiceDescription,
    LoaderContainer,
    FailureContainer,
    FailureImage,
    ErrorMessage,
    TryAgainBtn,
    BackBtn,
    BackBtnContainer,
    SelectInput,
    HomeImage,
    Option
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}



const Services = () => {
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        servicesData: [],
    })
    const navigate = useNavigate()
    const getServices = async () => {
        setApiResponse(prevDetails => ({
            status: apiStatusConstants.inProgress,
            servicesData: null,
            error: null
        }))
        try {
            const url = 'https://lordjesus.onrender.com/services'
        const request = await fetch(url)
        const responseData =  await request.json()
        
        if (request.ok) {
            setApiResponse(prevDetails => ({
                ...prevDetails,
                status: apiStatusConstants.success,
                servicesData: responseData,
            }))
        } else {
            setApiResponse(prevDetails => ({
                ...prevDetails,
                status: apiStatusConstants.failure,
            }))
        }


        } catch (err) {
            setApiResponse(prevDetails => ({
                ...prevDetails,
                status: apiStatusConstants.failure,
            }))
        }
    }

    useEffect(() => {
        getServices()
    }, [])

    const renderLoaderView = () => (
        <LoaderContainer>
             <BarLoader color={"#fff"} size={170}  data-testid="loader"/>
        </LoaderContainer>
    ) 


    const getTeluguServiceName = (name) => {
        switch (name) {
            case 'Worship':
                return 'ఆరాధన'
            case "Womens' Prayer":
                return 'స్త్రీల ప్రార్థన'
            case 'Fasting Parayer':
                return 'ఉపవాస ప్రార్థన'
            case 'Sunday School':
                return 'ఆదివారపు బడి'
            case 'Special Meeting':
                return 'ప్రత్యేక కూడిక'
            
            default: 
                return name
        }
    }

    const getTeluguServiceDescription = (descripition) => {
        switch (descripition) {
            case 'Every sunday morning 10:30AM to 1:00PM':
                return 'ప్రతి ఆదివారం ఉదయం 10:30AM నుండి 1:00PM వరకు'
            case "Every wednesday night 8:00PM to 9:30PM":
                return 'ప్రతి బుధవారం రాత్రి 8:00PM నుండి 9:30PM వరకు'
            case 'Every month first friday 11:00AM to 2:00PM':
                return 'ప్రతి నెల మొదటి శుక్రవారం 11:00AM నుండి 2:00PM వరకు'
            case 'Every friday night 8:00PM to 9:30PM':
                return 'ప్రతి శుక్రవారం రాత్రి 8:00PM నుండి 9:30PM వరకు'
            case 'Every sunday morning 8:30AM to 10:00AM':
                return 'ప్రతి ఆదివారం ఉదయం 8:30AM నుండి 10:00AM వరకు'
            default: 
                return descripition
        }
    }

    const statusRefresh = () => {
        getServices()
    }

    const renderStatusFailureView = (language) => (
        <FailureContainer>
            <FailureImage alt='failure-view' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709099344/ocxgxmjr1xhk24uitho6.png'/>
            <ErrorMessage>{language === 'english' ? 'We cannot seem to find the page you are looking for.' : 'మీరు వెతుకుతున్న సమాచారాన్ని మేము కనుగొనలేకపోయాము.'}</ErrorMessage>
            <TryAgainBtn type='button' onClick={statusRefresh}>{language === 'english' ? "Try again" : 'మళ్ళీ ప్రయత్నించండి'}</TryAgainBtn>
        </FailureContainer>
    )

    const successView = (language) => (
       
        
            <ServicesContainer>
                {apiResponse.servicesData.map(serv => {
                    
                    return (
                    <Service>
                        <ServiceImage alt={serv.service} src={serv.image} />
                        <ServiceName>{language === 'english' ? serv.service : getTeluguServiceName(serv.service)}</ServiceName>
                        <ServiceDescription>{language === 'english' ? serv.description : getTeluguServiceDescription(serv.description)}</ServiceDescription>
                    </Service>
                )})}
            </ServicesContainer>
        
    )

    const renderCorrespondingView = (language) => {
        const {status} = apiResponse
    
        switch (status) {
          case apiStatusConstants.inProgress:
            return renderLoaderView()
          case apiStatusConstants.success:
            return successView(language)
          case apiStatusConstants.failure:
            return renderStatusFailureView(language)
          default:
            return null
        }
      }

    return (
        <HandlerContext.Consumer>
                 {value => {
                    const {language, setLanguage} = value
                    return (
                        <TimingsContainer>
                            <BackBtnContainer>
                                    <IoIosArrowBack color='#fff'  className="icon"/>
                                    <BackBtn type='button' onClick={() => navigate('/')}>
                                        <HomeImage alt='home' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709379149/tjrzexavkxpfacg5atjf.gif'/>
                                        
                                        </BackBtn>
                                    <SelectInput defaultValue={language} onChange={(event) => setLanguage(event.target.value)}>
                                        <Option  value='english'>English</Option>
                                        <Option style={{letterSpacing: '0.7em'}}  value='తెలుగు'>తెలుగు</Option>
                                    </SelectInput>
                            </BackBtnContainer>
                            <Heading>{language === 'english' ? 'Church Timings' : 'ప్రార్థన సమయములు'}</Heading>
                            {renderCorrespondingView(language)}
                      </TimingsContainer>
                    )
                 }} 
        </HandlerContext.Consumer>
    )
}

export default Services