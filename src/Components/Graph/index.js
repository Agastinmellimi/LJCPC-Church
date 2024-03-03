import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import BarLoader from "react-spinners/BarLoader";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import {
    Bar,
    XAxis,
    BarChart,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
import {
    Heading, 
    GraphContainer,
    FailureContainer,
    FailureImage,
    ErrorMessage,
    TryAgainBtn,
    LoaderContainer,
    SearchContainer,
    MonthInput,
    YearInput,
    SearchBtn,
    InputError,
    InputFeild,
    Note,
    MonthName,
    BtnContainer,
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

export const Graph = () => {
    const [apiResponseData, setApiResponseData] = useState({
        childrenStatus: apiStatus.initial,
        childrenStatusArray: [],
        month: '',
        year: '',
        errMsg: '',
        monthErr: false,
        yearErr: false,
        monthName: '',
        yearText: '',
        failureImage: ''
  })
  
    const [barHide, handleBar] =  useState(false)
    const [WindowWidth, setWidth] = useState(window.innerWidth)
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
          });
        if (WindowWidth >= 700) {
            handleBar(true)
        } else {
            handleBar(false)
        }
    }, [WindowWidth])

    const statusRefresh = () => {
        getChildrenDetails()
    }

    const refresh = () => {
        setApiResponseData({
            childrenStatus: apiStatus.initial,
            childrenStatusArray: [],
            month: '',
            year: '',
            errMsg: '',
            monthErr: false,
            yearErr: false,
            monthName: '',
            yearText: '',
            failureImage: ''
        })
    }

    const renderStatusFailureView = () => (
        <FailureContainer>
            <FailureImage alt='failure-view' src={apiResponseData.failureImage}/>
            <ErrorMessage>{apiResponseData.errMsg}</ErrorMessage>
            <BtnContainer>
            <TryAgainBtn type='button' onClick={statusRefresh}>Try again</TryAgainBtn>
            <TryAgainBtn refresh={'true'} type='button' onClick={refresh}>Refersh</TryAgainBtn>
            </BtnContainer>
        </FailureContainer>
    )
    

    const renderSuccessView = () => (
        <>
        <MonthName>{apiResponseData.monthName} {apiResponseData.yearText}th Report</MonthName>
        <ResponsiveContainer width="90%" height='65%' style={{alignSelf: 'center', flexShrink: 0, marginTop: 20}}>
                <BarChart  data={apiResponseData.childrenStatusArray.map(item => ({...item, name: item.name.split(" ")[0]}))} height={300} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
                
            }}>
                    
                    <Tooltip trigger='hover' cursor={{fill: 'transparent'}}  contentStyle={{fontWeight: 'bold', fontFamily: "Mandali", backgroundColor: "rgba(193, 221, 139, 0.81)", backdropFilter: 'blur(3px)', color: "#fff", borderRadius: '6px'}}/>
                    <Legend />
                    <XAxis type='category' dataKey='name' tick={barHide === true ? {fill: "#fff"} : false} stroke="#f5d86e"   interval={0} style={{fontSize: 10, fontFamily: "Mandali, sans-serif", fontStyle: 'italic'}}/>
                    <Bar dataKey="presents" label={barHide === false && {dataKey:'name', position: 'insideUp', angle: '-90', stroke: "#f5d86e", fontSize: '12px', letterSpacing: '0.20em'}} fill="#097569" maxBarSize={45}   style={{cursor: "pointer", fontSize: 8, fontFamily: "Mandali, sans-serif"}} />
                </BarChart>
        </ResponsiveContainer>
        
      
        </>
    )

    const renderLoaderView = () => (
           <LoaderContainer>
                <BarLoader color={"#fff"} size={170}  data-testid="loader"/>
           </LoaderContainer>
    )

    const renderCorrespondingView = () => {
        const {childrenStatus} = apiResponseData
    
        switch (childrenStatus) {
          case apiStatus.inProgress:
            return renderLoaderView()
          case apiStatus.success:
            return renderSuccessView()
          case apiStatus.failure:
            return renderStatusFailureView()
          default:
            return null
        }
    }

    const getChildrenDetails = async () => {
        setApiResponseData(prev => ({
            ...prev,
            monthErr: false,
            childrenStatus: apiStatus.inProgress,
            yearErr: false
        }))
        const {month, year} = apiResponseData
        let formattedMonth;
            if (parseInt(month) < 10 && parseInt(month) > 0) {
                formattedMonth = `0${parseInt(month)}`
            } else {
                formattedMonth = parseInt(month).toString()
            }
            
            const searchDetails = {
                month: formattedMonth,
                year
            }
            try {
                const url = 'https://lordjesus.onrender.com/month-status'
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(searchDetails)
                }
                const response = await fetch(url, options)
                const data = await response.json()
                const getMonthName = () => {
                    switch (parseInt(month)) {
                        case 1: 
                            return "Jan"
                        case 2: 
                           return "Feb"
                        case 3:
                            return "Mar"
                        case 4:
                            return "Apr"
                        case 5:
                            return "May"
                        case 6:
                            return "June"
                        case 7:
                            return "July"
                        case 8:
                            return "Aug"
                        case 9:
                            return "Sep"
                        case 10:
                            return "Oct"
                        case 11:
                            return "Nov"
                        case 12:
                            return "Dec"
                        default:
                            return ''
                    }
                }
                if (response.ok) {
                    setApiResponseData(prev => ({
                        ...prev,
                        childrenStatusArray: data,
                        childrenStatus: apiStatus.success,
                        monthName: getMonthName(),
                        yearText: year
                    }))
                } else {
                    setApiResponseData(prev => ({
                        ...prev,
                        childrenStatus: apiStatus.failure,
                        errMsg: data.err_msg,
                        failureImage: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707990706/k3yuvyjhdhdr0kqirv7j.png'
                    }))
                }
            } catch (err) {
                setApiResponseData(prev => ({
                    ...prev,
                    childrenStatus: apiStatus.failure,
                    errMsg: 'We cannot seem to find the page you are looking for.',
                    failureImage: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709099344/ocxgxmjr1xhk24uitho6.png'
                }))
            }
    }

    const submitForm = async (event) => {
         event.preventDefault()
        const {month, year} = apiResponseData
        if (month === '' && year === '') {
                setApiResponseData(prev => ({
                    ...prev,
                    monthErr: true,
                    yearErr: true
                }))
        } else if (month !== '' && year === '') {
            setApiResponseData(prev => ({
                ...prev,
                monthErr: false,
                yearErr: true
            }))
        } else if (month === '' && year !== '') {
            setApiResponseData(prev => ({
                ...prev,
                monthErr: true,
                yearErr: false
            }))
        } else {
            getChildrenDetails()
        }
    }

    

    const onChangeMonth = (event) => {
        
        if (isFinite(event.target.value.split(' '))) {
            setApiResponseData(prev => ({...prev, month: event.target.value}))
        }
        if (event.target.value === '') {
            setApiResponseData(prev => ({
                ...prev,
                childrenStatusArray: [],
                childrenStatus: apiStatus.initial
            }))
        }
    }

    const onChangeYear = event => {
        if (isFinite(event.target.value.split(' '))) {
             setApiResponseData(prev => ({...prev, year: event.target.value}))

        }
        if (event.target.value === '') {
            setApiResponseData(prev => ({
                ...prev,
                childrenStatusArray: [],
                childrenStatus: apiStatus.initial
                
            }))
        }
    }


    return (
        <GraphContainer>
        <BackBtnContainer>
            <IoIosArrowBack color='#fff' className="icon" />
            <BackBtn type='button' onClick={() => navigate('/')}>
                <HomeImage alt='home' src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709379149/tjrzexavkxpfacg5atjf.gif'/>
                    
                </BackBtn>
        </BackBtnContainer>
        <Heading>Children Status Graphical view</Heading>
        <Note>*please fill in the required input fields only numbers, do not fill in any characters or symbols.</Note>
        <SearchContainer onSubmit={submitForm}>
            <InputFeild>
                {apiResponseData.monthErr && <InputError>Please fill month input feild</InputError>}
                <MonthInput err={apiResponseData.monthErr.toString()} type='text' value={apiResponseData.month} onChange={onChangeMonth} placeholder='MM'/>   
            </InputFeild>
            <InputFeild>
                {apiResponseData.yearErr && <InputError>Please fill year input feild</InputError>}
                <YearInput err={apiResponseData.yearErr.toString()} type='text' value={apiResponseData.year} onChange={onChangeYear} placeholder='YYYY'/>
            </InputFeild>
            <SearchBtn icon={(barHide === false).toString()} type='submit'>{barHide ? 'Search' : <IoSearch size={30} color='#fff'/>}</SearchBtn>
        </SearchContainer>
        {renderCorrespondingView()}
        </GraphContainer>
    )
}

export default Graph