import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandlerContext from "../../Context/HandlerContext";
import BarLoader from "react-spinners/BarLoader";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BiMessageSquareError } from "react-icons/bi";
import {
  Bar,
  XAxis,
  BarChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
  HomeImage,
  SelectInput,
  Option,
} from "./StyledComponents";

const apiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

export const Graph = () => {
  const [apiResponseData, setApiResponseData] = useState({
    childrenStatus: apiStatus.initial,
    childrenStatusArray: [],
    month: "",
    year: "",
    errMsg: "",
    monthErr: false,
    yearErr: false,
    monthName: "",
    yearText: "",
    smErr: false,
  });

  const [barHide, handleBar] = useState(false);
  const [WindowWidth, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const getTeluguWords = (name) => {
    switch (name) {
      case "ADYA MADHABATHULA":
        return "ఆద్య";
      case "MOJESH CHELLE":
        return "మోజేష్";
      case "HANI MADHABATHULA":
        return "హాని";
      case "HARSHA VARDHAN":
        return "హర్ష";
      case "JOSHNA CHELLE":
        return "జోష్నా";
      case "PRAVEEN KUMAR PALLI":
        return "ప్రవీణ్";
      case "RAVISAGAR NEPA":
        return "రవిసాగర్";
      case "UDAY KRISHNA KURMA":
        return "ఉదయ్";
      case "RISHI CHELLE":
        return "రిషి";
      case "SANTHOSH DHANAM":
        return "సంతోష్";
      case "SRINIVAS KURMA":
        return "శ్రీనివాస్";
      default:
        return name;
    }
  };

  const getChildrenDetails = async () => {
    setApiResponseData((prev) => ({
      ...prev,
      monthErr: false,
      childrenStatus: apiStatus.inProgress,
      yearErr: false,
      smErr: false,
    }));
    const { month, year } = apiResponseData;
    let formattedMonth;
    if (parseInt(month) < 10 && parseInt(month) > 0) {
      formattedMonth = `0${parseInt(month)}`;
    } else {
      formattedMonth = parseInt(month).toString();
    }

    const searchDetails = {
      month: formattedMonth,
      year,
    };
    try {
      const url = "https://lordjesus.onrender.com/month-status";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchDetails),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      const getEnglishMonthName = () => {
        switch (parseInt(month)) {
          case 1:
            return "Jan";
          case 2:
            return "Feb";
          case 3:
            return "Mar";
          case 4:
            return "Apr";
          case 5:
            return "May";
          case 6:
            return "June";
          case 7:
            return "July";
          case 8:
            return "Aug";
          case 9:
            return "Sep";
          case 10:
            return "Oct";
          case 11:
            return "Nov";
          case 12:
            return "Dec";
          default:
            return "";
        }
      };
      const getTeluguMonthName = () => {
        const { month } = apiResponseData;
        switch (parseInt(month)) {
          case 1:
            return "జనవరి";
          case 2:
            return "ఫిబ్రవరి";
          case 3:
            return "మార్చి";
          case 4:
            return "ఏప్రిల్";
          case 5:
            return "మే";
          case 6:
            return "జూన్";
          case 7:
            return "జూలై";
          case 8:
            return "అగష్టు";
          case 9:
            return "సెప్టెంబర్";
          case 10:
            return "అక్టోబర్";
          case 11:
            return "నవంబర్";
          case 12:
            return "డిసెంబర్";
          default:
            return "";
        }
      };
      if (response.ok) {
        setApiResponseData((prev) => ({
          ...prev,
          childrenStatusArray: data,
          childrenStatus: apiStatus.success,
          EnglishMonthName: getEnglishMonthName(),
          TeluguMonthName: getTeluguMonthName(),
          yearText: year,
        }));
      } else {
        setApiResponseData((prev) => ({
          ...prev,
          childrenStatus: apiStatus.failure,
          errMsg: data.err_msg,
        }));
      }
    } catch (err) {
      setApiResponseData((prev) => ({
        ...prev,
        childrenStatus: apiStatus.failure,
        errMsg: "We cannot seem to find the page you are looking for.",
        smErr: true,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    if (WindowWidth >= 700) {
      handleBar(true);
    } else {
      handleBar(false);
    }
  }, [WindowWidth]);

  const statusRefresh = () => {
    getChildrenDetails();
  };

  const refresh = () => {
    setApiResponseData({
      childrenStatus: apiStatus.initial,
      childrenStatusArray: [],
      month: "",
      year: "",
      errMsg: "",
      monthErr: false,
      yearErr: false,
      EnglishMonthName: "",
      TeluguMonthName: "",
      yearText: "",
      failureImage: "",
    });
  };

  const getTeluguErrMsg = (message) => {
    switch (message) {
      case "Sorry!, search year cannot exist":
        return "క్షమించండి!, శోధన సంవత్సరం ఉనికిలో లేదు";
      case "We cannot seem to find the page you are looking for.":
        return "మీరు వెతుకుతున్న సమాచారాన్ని మేము కనుగొనలేకపోయాము.";
      case "Sorry!, search month cannot exist":
        return "క్షమించండి!, శోధన నెల ఉనికిలో లేదు";
      default:
        return message;
    }
  };

  const renderStatusFailureView = (language) => (
    <FailureContainer>
      {apiResponseData.smErr ? (
        <BiMessageSquareError size={60} color="#eb4b5b" />
      ) : (
        <FailureImage
          alt="failure-view"
          src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1707990706/k3yuvyjhdhdr0kqirv7j.png"
        />
      )}
      <ErrorMessage>
        {language === "english"
          ? apiResponseData.errMsg
          : getTeluguErrMsg(apiResponseData.errMsg)}
      </ErrorMessage>
      <BtnContainer>
        <TryAgainBtn type="button" onClick={statusRefresh}>
          {language === "english" ? "Try again" : "మళ్ళీ ప్రయత్నించండి"}
        </TryAgainBtn>
        <TryAgainBtn refresh={"true"} type="button" onClick={refresh}>
          Refersh
        </TryAgainBtn>
      </BtnContainer>
    </FailureContainer>
  );

  const renderSuccessView = (language) => (
    <>
      <MonthName>
        {language === "english"
          ? apiResponseData.EnglishMonthName
          : apiResponseData.TeluguMonthName}{" "}
        {language === "english"
          ? `${apiResponseData.yearText}th Report`
          : `${apiResponseData.yearText}వ నివేదిక`}
      </MonthName>
      <ResponsiveContainer
        width="90%"
        height="55%"
        style={{ alignSelf: "center", flexShrink: 0, marginTop: 20 }}
      >
        <BarChart
          data={apiResponseData.childrenStatusArray.map((item) => ({
            ...item,
            name:
              language === "english"
                ? item.name.split(" ")[0]
                : getTeluguWords(item.name),
            హాజరు: item.presents,
          }))}
          height={300}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip
            trigger="hover"
            cursor={{ fill: "transparent" }}
            contentStyle={{
              fontWeight: "bold",
              fontFamily: "Mandali",
              backgroundColor: "rgba(193, 221, 139, 0.81)",
              backdropFilter: "blur(3px)",
              color: "#fff",
              borderRadius: "6px",
              fontSize: 20,
              lineHeight: "25px",
            }}
          />
          <Legend />
          <XAxis
            type="category"
            dataKey="name"
            tick={barHide === true ? { fill: "#fff" } : false}
            stroke="#f5d86e"
            interval={0}
            style={{
              fontSize: language === "english" ? 10 : 15,
              fontFamily: "Mandali, sans-serif",
              fontStyle: "italic",
            }}
          />
          <Bar
            dataKey={language === "english" ? "presents" : "హాజరు"}
            label={
              barHide === false && {
                dataKey: "name",
                position: "insideUp",
                angle: "-90",
                stroke: "#f5d86e",
                fontSize: language === "english" ? "12px" : "13px",
                letterSpacing: "0.20em",
              }
            }
            fill="#097569"
            maxBarSize={45}
            style={{
              cursor: "pointer",
              fontSize: 8,
              fontFamily: "Mandali, sans-serif",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );

  const renderLoaderView = () => (
    <LoaderContainer>
      <BarLoader color={"#fff"} size={170} data-testid="loader" />
    </LoaderContainer>
  );

  const renderCorrespondingView = (language) => {
    const { childrenStatus } = apiResponseData;

    switch (childrenStatus) {
      case apiStatus.inProgress:
        return renderLoaderView();
      case apiStatus.success:
        return renderSuccessView(language);
      case apiStatus.failure:
        return renderStatusFailureView(language);
      default:
        return null;
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const { month, year } = apiResponseData;
    if (month === "" && year === "") {
      setApiResponseData((prev) => ({
        ...prev,
        monthErr: true,
        yearErr: true,
      }));
    } else if (month !== "" && year === "") {
      setApiResponseData((prev) => ({
        ...prev,
        monthErr: false,
        yearErr: true,
      }));
    } else if (month === "" && year !== "") {
      setApiResponseData((prev) => ({
        ...prev,
        monthErr: true,
        yearErr: false,
      }));
    } else {
      getChildrenDetails();
    }
  };

  const onChangeMonth = (event) => {
    if (isFinite(event.target.value.split(" "))) {
      setApiResponseData((prev) => ({ ...prev, month: event.target.value }));
    }
    if (event.target.value === "") {
      setApiResponseData((prev) => ({
        ...prev,
        childrenStatusArray: [],
        childrenStatus: apiStatus.initial,
      }));
    }
  };

  const onChangeYear = (event) => {
    if (isFinite(event.target.value.split(" "))) {
      setApiResponseData((prev) => ({ ...prev, year: event.target.value }));
    }
    if (event.target.value === "") {
      setApiResponseData((prev) => ({
        ...prev,
        childrenStatusArray: [],
        childrenStatus: apiStatus.initial,
      }));
    }
  };

  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { language, setLanguage } = value;
        return (
          <GraphContainer>
            <BackBtnContainer>
              <IoIosArrowBack color="#fff" className="icon" />
              <BackBtn type="button" onClick={() => navigate("/")}>
                <HomeImage
                  alt="home"
                  src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709379149/tjrzexavkxpfacg5atjf.gif"
                />
              </BackBtn>
              <SelectInput
                defaultValue={language}
                onChange={(event) => setLanguage(event.target.value)}
              >
                <Option value="english">English</Option>
                <Option style={{ letterSpacing: "0.7em" }} value="తెలుగు">
                  తెలుగు
                </Option>
              </SelectInput>
            </BackBtnContainer>
            <Heading>
              {language === "english"
                ? "Children Status Graphical view"
                : "పిల్లల హాజరు రేఖ చిత్రములలో"}
            </Heading>
            <Note style={{ fontSize: language === "తెలుగు" && "15px" }}>
              *
              {language === "english"
                ? "please fill in the required input fields only numbers, do not fill in any characters or symbols."
                : "దయచేసి అవసరమైన ఇన్‌పుట్ ఫీల్డ్‌లలో సంఖ్యలను మాత్రమే పూరించండి, ఏ అక్షరాలు లేదా చిహ్నాలను పూరించవద్దు."}
            </Note>
            <SearchContainer onSubmit={submitForm}>
              <InputFeild>
                {apiResponseData.monthErr && (
                  <InputError
                    style={{ fontSize: language === "తెలుగు" && "14px" }}
                  >
                    {language === "english"
                      ? "Please fill month input feild"
                      : "దయచేసి నెల ఇన్‌పుట్‌ని పూరించండి"}
                  </InputError>
                )}
                <MonthInput
                  err={apiResponseData.monthErr.toString()}
                  type="text"
                  value={apiResponseData.month}
                  onChange={onChangeMonth}
                  placeholder="MM"
                />
              </InputFeild>
              <InputFeild>
                {apiResponseData.yearErr && (
                  <InputError
                    style={{ fontSize: language === "తెలుగు" && "14px" }}
                  >
                    {language === "english"
                      ? "Please fill year input feild"
                      : "దయచేసి సంవత్సరం ఇన్‌పుట్‌ని పూరించండి"}
                  </InputError>
                )}
                <YearInput
                  err={apiResponseData.yearErr.toString()}
                  type="text"
                  value={apiResponseData.year}
                  onChange={onChangeYear}
                  placeholder="YYYY"
                />
              </InputFeild>
              <SearchBtn icon={(barHide === false).toString()} type="submit">
                {barHide ? (
                  language === "english" ? (
                    "Search"
                  ) : (
                    "శోధించు"
                  )
                ) : (
                  <IoSearch size={30} color="#fff" />
                )}
              </SearchBtn>
            </SearchContainer>
            {renderCorrespondingView(language)}
          </GraphContainer>
        );
      }}
    </HandlerContext.Consumer>
  );
};

export default Graph;
