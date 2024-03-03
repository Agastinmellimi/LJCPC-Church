
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
    FailureImage,
    TryAgainBtn,
    PagenationContainer,
    NextButton,
    PrevButton,
    BackBtn,
    BackBtnContainer,
    HomeImage
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
          dateViceDetailsArray: []
    })
    const navigate = useNavigate()

    const [searchDate, setSearchDate] = useState('')

    const [searchErr, handleSearchErr] = useState(false)

    const [isSearch, handleSearch] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
  

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
                setApiResponseData(prev => ({
                    ...prev,
                    childrenStatusArray: data,
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

   

    const statusRefresh = () => {
        getAllChildrenAttendanceDetails()
    }

    const refershDates = () => {
        getDistinctDates()
    }

    const renderStatusFailureView = () => (
        <FailureContainer>
            <FailureImage alt='failure-view' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709099344/ocxgxmjr1xhk24uitho6.png'/>
            <ErrorMessage>We cannot seem to find the page you are looking for.</ErrorMessage>
            <TryAgainBtn type='button' onClick={statusRefresh}>Try again</TryAgainBtn>
        </FailureContainer>
    )

    const renderDateFailureView = () => (
        <FailureContainer>
            <FailureImage alt='failure-view' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709099344/ocxgxmjr1xhk24uitho6.png'/>
            <ErrorMessage>We cannot seem to find the page you are looking for.</ErrorMessage>
            <TryAgainBtn type='button' onClick={refershDates}>Try again</TryAgainBtn>
        </FailureContainer>
    )

    const handlePrevPage = () => {
        getAllChildrenAttendanceDetails()
        setCurrentPage(prevPage => prevPage - 1);
    }
    const handleNextPage = () => {
        getAllChildrenAttendanceDetails()
        setCurrentPage(prevPage => prevPage + 1);
    }

    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;


    const renderSuccessChildrensStatusView = () => (
           <>
            <ViewChildrenContainer>
                {apiResponseData.childrenStatusArray.slice(startIndex, endIndex).map(item => (
                    <ChildrenStatus key={item.name} count={item.presents}>
                        <FirstLetterContainer count={item.presents}>{item.name[0].toUpperCase()}</FirstLetterContainer>
                        <ChildrenName>{item.name}</ChildrenName>
                        <Presents>presents: <AttendanceCount count={item.presents}>{item.presents}</AttendanceCount></Presents>
                    </ChildrenStatus>
                ))}
            </ViewChildrenContainer>
            <PagenationContainer>
                <ReactTooltip id="prev" place="bottom" className="tool" delayShow={1000} anchorSelect='clickable'/>
                <PrevButton type='button' data-tooltip-id='prev' data-tooltip-content={"Previous"} onClick={handlePrevPage} disabled={currentPage === 1}><TbPlayerTrackPrev color='#C5AE5E'/></PrevButton>
                <ReactTooltip id="next" place="right" className="tool" delayShow={1000} anchorSelect='clickable'/>
                <NextButton type='button' data-tooltip-id='next' data-tooltip-content={"Next"} onClick={handleNextPage} disabled={endIndex >= apiResponseData.childrenStatusArray.length}><TbPlayerTrackNext color='#C5AE5E'/></NextButton>
            </PagenationContainer>
        </>
    )




    const renderDateViceChildernStatusView = () => {
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
                    <FirstLetterContainer date='true' present={item.presents}>{item.name[0].toUpperCase()}</FirstLetterContainer>
                    <ChildrenName>{item.name}</ChildrenName>
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

    

    const renderDateViceAttendanceView = () => {
        const {datesViseApiStatus} = apiResponseData
    
        switch (datesViseApiStatus) {
          case apiStatus.inProgress:
            return skeletonView()
          case apiStatus.success:
            return renderDateViceChildernStatusView()
          case apiStatus.failure:
            return renderDateFailureView()
          default:
            return null
        }
      }

      const renderAttendanceDetailsView = () => {
        const {childrenStatus} = apiResponseData
    
        switch (childrenStatus) {
          case apiStatus.inProgress:
            return skeletonView()
          case apiStatus.success:
            return renderSuccessChildrensStatusView()
          case apiStatus.failure:
            return renderStatusFailureView()
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
        
    <ViewContainer>
       <BackBtnContainer>
            <IoIosArrowBack color='#fff'  className="icon"/>
            <BackBtn type='button' onClick={() => navigate('/')}>
                <HomeImage alt='home' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709379149/tjrzexavkxpfacg5atjf.gif'/>
                  
                </BackBtn>
        </BackBtnContainer>
        <Heading><HighlatedText>Children</HighlatedText> Attendance Details</Heading>
        
        <Skeleton.SkeletonThemeProvider highlight="light" animationDuration={1} color="#919190" style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
          {renderAttendanceDetailsView()}
        </Skeleton.SkeletonThemeProvider>
        {apiResponseData.dateError ? renderDateFailureView() : (
            <>
            <SelectDateContainer>
                <SelctDateHead>Attendance details by Dates</SelctDateHead>
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
                        <SelectDateText>Your search date cannot in backend</SelectDateText>
                    </DateContainer>
                ) : (
                    <Skeleton.SkeletonThemeProvider highlight="light" animationDuration={1} color="#919190" style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', width: '100%'}}>
                    {renderDateViceAttendanceView()}
                    </Skeleton.SkeletonThemeProvider>
                    )
            ) : (
                <DateContainer>
                        <DateImage alt='select date' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709103464/bxm9dnwyw5h0qmkk2llb.png'/>
                        <SelectDateText>Search date and get your details</SelectDateText>
                </DateContainer>
            )}
           
            </>
        )}
        
    </ViewContainer>
  
)}

export default ViewAttendance
