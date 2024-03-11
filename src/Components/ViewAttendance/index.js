
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FcOk, FcCancel } from "react-icons/fc";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {Skeleton} from 'react-skeleton-generator'
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { BiMessageSquareError } from "react-icons/bi";
import { PiStarFill } from "react-icons/pi";
import HandlerContext from '../../Context/HandlerContext';


import {
    ViewContainer, Heading, 
    HighlatedText, 
    ViewChildrenContainer, 
    AttendanceCount,  
    ChildrenStatus, 
    FirstLetterContainer, 
    ChildrenName, 
    Presents,
    ErrorMessage,
    FailureContainer,
    SelectDateContainer,
    SelctDateHead,
    DateContainer,
    SelectDateText,
    DateImage,
    DailyStatusChildern,
    SearchDataContainer,
    SearchBtn,
    SearchDateInput,
    TryAgainBtn,
    PagenationContainer,
    NextButton,
    PrevButton,
    BackBtn,
    BackBtnContainer,
    HomeImage,
    SelectInput,
    Option
} from './StyledComponents'


const apiStatus = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
}

const times = [1, 2, 3, 4,5, 6]

const ViewAttendance = () => {
    const [apiResponseData, setApiResponseData] = useState({
          childrenStatus: apiStatus.initial,
          childrenStatusArray: [],
          datesViseApiStatus: apiStatus.initial,
          dateError: false,
          dateApiLoading: false,
          datesArray: [],
          lead: 0,
          min: 0,
          dateViceDetailsArray: [],
    })
    const navigate = useNavigate()

    const [searchDate, setSearchDate] = useState('')

    const [searchErr, handleSearchErr] = useState(false)

    const [isSearch, handleSearch] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)

    

    const [WindowWidth, setWidth] = useState(window.innerWidth)
  

    const [page, setPage] = useState(1)

    const getAllChildrenAttendanceDetails = async () => {
        setApiResponseData(prev => ({
            ...prev,
            childrenStatus: apiStatus.inProgress
        }))
        try {
            const url = 'https://lordjesus.onrender.com/attendance-details'
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok) {
                const  max = Math.max(...data.map(item => item.presents))
                const  minNum = Math.min(...data.map(item => item.presents))
               
                setApiResponseData(prev => ({
                    ...prev,
                    childrenStatusArray: data,
                    lead: max,
                    min: minNum,
                    childrenStatus: apiStatus.success
                }))
            } else {
                setApiResponseData(prev => ({
                    ...prev,
                    childrenStatus: apiStatus.failure
                }))
            }
        } catch (err) {
            setApiResponseData(prev => ({
                ...prev,
                childrenStatus: apiStatus.failure
            }))
        }
       
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
          });
    }, [WindowWidth])

    const skeletonView = () => (
        
         <ViewChildrenContainer>
             {
                times.map(item => (
                    <ChildrenStatus key={item} style={{background: 'rgb(247,236,232)', border: 'none', backgroundColor: 'rgba(219, 219, 219, 0.27000001072883606)'}}>
                                <Skeleton width='50px' height='50px' borderRadius="50%" style={{marginTop: 10, alignSelf: 'flex-start', marginRight: 20}}/>
                                {/* <ImageUser alt='user name' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1708079357/qreozwbe5ymyldns0lrk.png'/> */}
                                <Skeleton width='50%' height='30px' borderRadius="10px" style={{marginTop: 20,  alignSelf: 'flex-start'}}/>
                                {/* <UserName>Daniel</UserName> */}
                                <Skeleton width='70px' height='30px' borderRadius="8px" style={{ marginLeft: 'auto', marginBottom: 10, marginTop: 10}}/>
                                {/* <DeleteBtn><MdDelete/></DeleteBtn> */}
                    </ChildrenStatus>
                ))
             }
        </ViewChildrenContainer>
    )

    const callSweetAlert = (errText) => {
        Swal.fire({
            title: errText,
            color: '#ba3037', 
            icon: 'warning',
            confirmButtonText: 'Continue'
        });
    }

    const getDistinctDates = async () => {
        setApiResponseData(prev => ({
            ...prev,
            dateError: false,
            dateApiLoading: true
        }))
       try {
                const DatesUrl = 'https://lordjesus.onrender.com/attendance-dates'
                const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                } 
                const response = await fetch(DatesUrl, options)
                const data = await response.json() 
                if (response.ok) {
                    const filteredData = data
                    filteredData.unshift({text: 'Select'})
                    setApiResponseData(prev => ({
                        ...prev,
                        dateApiLoading: false,
                        dateError: false,
                        datesArray: filteredData
                    }))
                } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        dateApiLoading: false,
                        dateError: true
                    }))
                }
       } catch (err) {
            setApiResponseData(prev => ({
                ...prev,
                dateApiLoading: false,
                dateError: true
            }))
       }

    }

    const getDateViceDetails = async (value) => {
        setApiResponseData(prev => ({
            ...prev,
            datesViseApiStatus: apiStatus.inProgress
        }))
       try {
                const attendanceUrl = 'https://lordjesus.onrender.com/date-attendance'
                
                const dateOject = {
                    date: value
                }
                
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dateOject)
                }
                const response = await fetch(attendanceUrl, options)
                const data = await response.json()
                if (response.ok) {
                    setApiResponseData(prev => ({
                        ...prev,
                        datesViseApiStatus: apiStatus.success,
                        dateViceDetailsArray: data
                    }))
                } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        datesViseApiStatus: apiStatus.failure,
                    }))
                }
       } catch (e) {
                setApiResponseData(prev => ({
                    ...prev,
                    datesViseApiStatus: apiStatus.failure,
                }))
       }
    }


    useEffect(() => {
          
            getDistinctDates()
            getAllChildrenAttendanceDetails()
    }, [])

   const getTeluguWords = (name) => {
       switch (name) {
            case 'ADYA MADHABATHULA':
                return 'ఆద్య మాధబత్తుల'
            case "MOJESH CHELLE":
                return 'మోజేష్ చెల్లె'
            case "HANI MADHABATHULA":
                return 'హాని మాధబత్తుల'
            case "HARSHA VARDHAN":
                return 'హర్ష వర్ధన్ చెల్లె'
            case "JOSHNA CHELLE":
                return 'జోష్నా చెల్లె'
            case "PRAVEEN KUMAR PALLI":
                return 'ప్రవీణ్ కుమార్ పల్లి'
            case "RAVISAGAR NEPA":
                return 'రవిసాగర్ నేపా'
            case "UDAY KRISHNA KURMA":
                return 'ఉదయ్ కృష్ణ కూర్మ'
            case "RISHI CHELLE":
                return 'రిషి చెల్లె'
            case "SANTHOSH DHANAM":
                return 'సంతోష్ దానం'
            case "SRINIVAS KURMA":
                return 'శ్రీనివాస్ కూర్మ'
            default:
                return name
       }
   }

   

    const statusRefresh = () => {
        getAllChildrenAttendanceDetails()
    }

    const refershDates = () => {
        getDistinctDates()
        setApiResponseData(prev => ({
            ...prev,
            datesViseApiStatus: apiStatus.initial,
            dateApiLoading: false,
            dateError: false,
        }))
        handleSearch(false)
        setSearchDate('')
    }

    const renderStatusFailureView = (language) => (
        <FailureContainer>
            <BiMessageSquareError size={60} color='#eb4b5b'/>
            <ErrorMessage>{language === 'english' ? 'We cannot seem to find the page you are looking for.' : 'మీరు వెతుకుతున్న సమాచారాన్ని మేము కనుగొనలేకపోయాము.'}</ErrorMessage>
            <TryAgainBtn type='button' onClick={statusRefresh}>{language === 'english' ? "Try again" : 'మళ్ళీ ప్రయత్నించండి'}</TryAgainBtn>
        </FailureContainer>
    )

    const renderDateFailureView = (language) => (
        <FailureContainer>
            <BiMessageSquareError size={60} color='#eb4b5b'/>
            <ErrorMessage>{language === 'english' ? 'We cannot seem to find the page you are looking for.' : 'మీరు వెతుకుతున్న సమాచారాన్ని మేము కనుగొనలేకపోయాము.'}</ErrorMessage>
            <TryAgainBtn type='button' onClick={refershDates}>{language === 'english' ? "Try again" : 'మళ్ళీ ప్రయత్నించండి'}</TryAgainBtn>
        </FailureContainer>
    )

    
    
    
    const renderSuccessChildrensStatusView = (language) => {
        const correspondingMessage = (presents, name) => {
            const occur = apiResponseData.lead - 1
            switch (presents) {
                case apiResponseData.lead:
                    return (language === 'english' ? `congrats ${name.split(' ')[0]}, you are in lead.` : `అభినందనలు ${getTeluguWords(name).split(' ')[0]}, మీరు ముందంజలో ఉన్నారు`)
                case apiResponseData.min:
                    return ( language === 'english' ? `${name.split(' ')[0]}, your attendance is very low.` : `${getTeluguWords(name).split(' ')[0]}, మీ హాజరు చాలా తక్కువగా ఉంది`)
                case occur:
                    return (language === 'english' ? `congrats ${name.split(' ')[0]}, But you're one step away from peak attendance.` : `అభినందనలు ${getTeluguWords(name).split(' ')[0]}, కాని మీరు అత్యధిక హాజరుకు ఒక అడుగు వెనకబడి ఉన్నారు`)
                default:
                    return ''
            }
        }
        const handlePrevPage = () => {
            if (WindowWidth >= 700) {
                getAllChildrenAttendanceDetails()
            } 
            
            setCurrentPage(prevPage => prevPage - 1);
        }
        const handleNextPage = () => {
            if (WindowWidth >= 700) {
                getAllChildrenAttendanceDetails()
            } 
            setCurrentPage(prevPage => prevPage + 1);
        }
    
        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;
    
          return ( <>
            <ViewChildrenContainer>
                
                {apiResponseData.childrenStatusArray.slice(startIndex, endIndex).map(item => (
                    <>
                    {apiResponseData.lead === item.presents && <ReactTooltip id={item.name} place="top" className={`tool ${apiResponseData.lead === item.presents && 'border'}` } />}
                    {apiResponseData.min === item.presents && <ReactTooltip id={item.name} place="top" className="tool-red" />}
                    {(apiResponseData.lead - 1) === item.presents && <ReactTooltip id={item.name} place="top" className="tool-occur" />}
                    <ChildrenStatus occur={(apiResponseData.lead - 1 === item.presents).toString()} low={(apiResponseData.min === item.presents).toString()} data-tooltip-id={item.name}  data-tooltip-content={correspondingMessage(item.presents, item.name)}  high={(apiResponseData.lead === item.presents).toString() } key={item.name} count={item.presents}>
                        {apiResponseData.lead === item.presents && <PiStarFill className='star'/>}
                        <FirstLetterContainer occur={(apiResponseData.lead - 1 === item.presents).toString()} low={(apiResponseData.min === item.presents).toString()} high={(apiResponseData.lead === item.presents).toString() } count={item.presents} style={{fontWeight: 600}}>{apiResponseData.childrenStatusArray.indexOf(item) + 1}</FirstLetterContainer>
                        <ChildrenName low={(apiResponseData.min === item.presents).toString()} occur={(apiResponseData.lead - 1 === item.presents).toString()} high={(apiResponseData.lead === item.presents).toString() } style={{ fontSize: language === 'తెలుగు' && `20px`}}>{language === 'english' ? item.name : getTeluguWords(item.name)}</ChildrenName>
                        <Presents>{language === 'english' ? 'Present' : 'హాజరు'}: <AttendanceCount count={item.presents}>{item.presents}</AttendanceCount></Presents>
                    </ChildrenStatus>
                    </>
                ))}
            </ViewChildrenContainer>
            <PagenationContainer>
                <ReactTooltip id="prev" place="bottom" className="tool" delayShow={1000} anchorSelect='clickable'/>
                <PrevButton type='button' data-tooltip-id='prev' data-tooltip-content={"Previous"} onClick={handlePrevPage} disabled={currentPage === 1}><TbPlayerTrackPrev color='#C5AE5E'/></PrevButton>
                <ReactTooltip id="next" place="right" className="tool" delayShow={1000} anchorSelect='clickable'/>
                <NextButton type='button' data-tooltip-id='next' data-tooltip-content={"Next"} onClick={handleNextPage} disabled={endIndex >= apiResponseData.childrenStatusArray.length}><TbPlayerTrackNext color='#C5AE5E'/></NextButton>
            </PagenationContainer>
        </>)
    }




    const renderDateViceChildernStatusView = (language) => {
        const handlePrev = () => { 
            setPage(prevPage => prevPage - 1);
        }
        const handleNext = () => {
            setPage(prevPage => prevPage + 1);
        }
    
        const start = (page - 1) * 6;
        const end = start + 6;
        return (
        <>
        <ViewChildrenContainer>
            {apiResponseData.dateViceDetailsArray.slice(start, end).map(item => (
            <DailyStatusChildern key={item.name} present={item.presents}>
                    <FirstLetterContainer date='true' present={item.presents} style={{fontWeight: 600}}>{apiResponseData.dateViceDetailsArray.indexOf(item) + 1}</FirstLetterContainer>
                    <ChildrenName style={{ fontSize: language === 'తెలుగు' && `20px`}}>{language === 'english' ? item.name : getTeluguWords(item.name)}</ChildrenName>
                    <Presents>{item.presents === 1 ? <FcOk size={25}/> : <FcCancel size={25}/>}</Presents>
            </DailyStatusChildern>
            ))}
        </ViewChildrenContainer>
        <PagenationContainer>
                <ReactTooltip id="back" place="bottom" className="tool" delayShow={1000} anchorSelect='clickable'/>
                <PrevButton type='button' data-tooltip-id='back' data-tooltip-content={"Previous"} onClick={handlePrev} disabled={page === 1}><TbPlayerTrackPrev color='#fff'/></PrevButton>
                <ReactTooltip id="forward" place="right" className="tool" delayShow={1000} anchorSelect='clickable'/>
                <NextButton type='button' data-tooltip-id='forward' data-tooltip-content={"Next"} onClick={handleNext} disabled={end >= apiResponseData.dateViceDetailsArray.length}><TbPlayerTrackNext color='#fff'/></NextButton>
        </PagenationContainer>
        </>
        
    )}

    

    const renderDateViceAttendanceView = (language) => {
        const {datesViseApiStatus} = apiResponseData
    
        switch (datesViseApiStatus) {
          case apiStatus.inProgress:
            return skeletonView()
          case apiStatus.success:
            return renderDateViceChildernStatusView(language)
          case apiStatus.failure:
            return renderDateFailureView(language)
          default:
            return null
        }
      }

      const renderAttendanceDetailsView = (language) => {
        const {childrenStatus} = apiResponseData
    
        switch (childrenStatus) {
          case apiStatus.inProgress:
            return skeletonView()
          case apiStatus.success:
            return renderSuccessChildrensStatusView(language)
          case apiStatus.failure:
            return renderStatusFailureView(language)
          default:
            return null
        }
      }


      const changeDate = event => {
        setSearchDate(event.target.value)
        if (event.target.value === '') {
            handleSearch(false)
        }
      }

      const onSearchDate = () => {
        if (searchDate === '') {
             callSweetAlert('Please Seact Date')
        } else {
            handleSearch(true)
            const filteredDatesArray = apiResponseData.datesArray.map(item => item.date !== undefined && item.date)
            if (filteredDatesArray.includes(searchDate)) {
                handleSearchErr(false)
                setPage(1)
                getDateViceDetails(searchDate)
            } else {
                handleSearchErr(true)
            }
        }
      }

     

    return (
        
         <HandlerContext.Consumer>
               {value => {
                     const {language, setLanguage} = value
                     return (
                        <ViewContainer>
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
                         <Heading><HighlatedText>{language === 'english' ? 'Children': 'పిల్లల'}</HighlatedText> {language === 'english' ? 'Attendance details': 'హాజరు వివరాలు'}</Heading>
                         
                         <Skeleton.SkeletonThemeProvider highlight="light" animationDuration={1} color="#919190" style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
                           {renderAttendanceDetailsView(language)}
                         </Skeleton.SkeletonThemeProvider>
                         {apiResponseData.dateError ? renderDateFailureView() : (
                             <>
                             <SelectDateContainer>
                                 <SelctDateHead>{language === 'english' ? 'Attendance details by Dates': 'తేదీల వారీగా హాజరు వివరాలు'}</SelctDateHead>
                                 <SearchDataContainer>
                                     <SearchDateInput type='date' value={searchDate} placeholder='YYYY/MM/DD' onChange={changeDate}/>
                                     <ReactTooltip id='searchDate' place='bottom' anchorSelect="#not-clickable" className='tool'/>
                                     <SearchBtn type='button' data-tooltip-id='searchDate' data-tooltip-content={"Search by Date"} onClick={onSearchDate}><FaSearch/></SearchBtn>
                                 </SearchDataContainer>
                             </SelectDateContainer>
                            
                             {isSearch ? (
                                 searchErr ? (
                                     <DateContainer>
                                         <DateImage alt='select date' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707990706/k3yuvyjhdhdr0kqirv7j.png'/>
                                         <SelectDateText>{language === 'english' ? 'Your search date cannot in backend': 'మీ శోధన తేదీ ఉనికిలో లేదు'}</SelectDateText>
                                     </DateContainer>
                                 ) : (
                                     <Skeleton.SkeletonThemeProvider highlight="light" animationDuration={1} color="#919190" style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
                                     {renderDateViceAttendanceView(language)}
                                     </Skeleton.SkeletonThemeProvider>
                                     )
                             ) : (
                                 <DateContainer>
                                         <DateImage alt='select date' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709103464/bxm9dnwyw5h0qmkk2llb.png'/>
                                         <SelectDateText>{language === 'english' ? 'Search by date and get your details' : 'తేదీ ద్వారా శోధించండి మరియు వివరాలను పొందండి'}</SelectDateText>
                                 </DateContainer>
                             )}
                            
                             </>
                         )}
                         
                     </ViewContainer>
                     )
               }}
         </HandlerContext.Consumer>
  
)}

export default ViewAttendance
