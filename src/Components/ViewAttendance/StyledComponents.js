import styled from "styled-components";

export const ViewContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 20px;
  background-image: url("https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709470424/xrlughk90jblmmzubzxm.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
export const ImageChildren = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 400px) {
    align-self: flex-start;
    margin-top: 5px;
  }

  ${(props) =>
    props.high === "true" &&
    `
             border: 1.2mm dotted #4eed69;
             color: #f0e173;
             width: 56px;
             height: 56px;
             @media (max-width: 400px) {
                  width: 45px;
                  height: 45px;
                  border: 1mm dotted #4eed69;
              }
      `}
  ${(props) =>
    props.low === "true" &&
    `
             border: 1.5px solid #F57786;
      `}
      ${(props) =>
    props.occur === "true" &&
    `         width: 56px;
              height: 56px;
             border: 1.2mm dotted #EDF066;
             @media (max-width: 400px) {
              width: 45px;
              height: 45px;
                  border: 1mm dotted #EDF066;
              }
      `}
`;
export const Heading = styled.h1`
  font-family: Mandali;
  color: #e9e8e4;
  width: 90%;
  align-self: center;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  @media (min-width: 700px) {
    font-size: 30px;
  }
`;

export const HighlatedText = styled.span`
  font-family: "Mandali", sans-serif;
  color: #c5ae5e;
`;

export const ViewChildrenContainer = styled.ul`
  padding-left: 0;
  width: 90%;
  align-self: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ChildrenStatus = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;

  backdrop-filter: blur(2px);
  background-color: rgba(219, 219, 219, 0.27000001072883606);

  width: 100%;
  border: ${(props) => (props.count > 0 ? "none" : "2px solid #f7a1a7")};
  padding: 5px 20px 5px 20px;
  @media (min-width: 900px) {
    width: 48%;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: stretch;
  }
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  ${(props) =>
    props.high === "true" &&
    `
             background: linear-gradient(216.77deg, #04c769 -72.03%, rgba(43, 157, 105, 0.52) 23.82%, rgba(84, 112, 104, 0) 126.27%);
             border: 1.5px solid #5de858;
             border-radius: 15px;
             cursor: pointer;
      `}
  ${(props) =>
    props.low === "true" &&
    `
             background: rgba(245, 118, 134, 0.3799999952316284);
             border: 1.5px solid #F57786;
             cursor: pointer;
      `}
      ${(props) =>
    props.occur === "true" &&
    `
             background: linear-gradient(216.95deg, #edf066 -72.03%, rgba(220, 208, 146, 0.52) 33.65%, rgba(112, 111, 84, 0) 146.61%);
             border: 1.5px solid #EDF066;
             cursor: pointer;
      `}
`;
export const FailureImage = styled.img`
  width: 80px;
  @media (max-width: 500px) {
    width: 50px;
  }
`;
export const TryAgainBtn = styled.button`
  border: none;
  outline: none;
  background-color: #edeef0;
  color: #1c1c1c;
  font-family: "Mandali", sans-serif;
  font-weight: 600;
  padding: 4px 16px 4px 16px;
  border-radius: 8px;
  margin-top: 4px;
  cursor: pointer;
`;

export const FirstLetterContainer = styled.div`
  width: 40px;
  height: 40px;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  font-family: Mandali;
  justify-content: center;
  align-items: center;
  background: rgba(219, 219, 219, 0.27000001072883606);
  border: ${(props) =>
    props.date === "true"
      ? `${props.present === 0 ? "2px solid #f7a1a7" : "2px solid #4eed69"}`
      : `${props.count > 0 ? "2px solid #C5AE5E" : "2px solid #c4605e"}`};
  border-radius: 50%;
  font-size: 19px;
  color: #fff;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (min-width: 500px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 400px) {
    margin-top: 7px;
    font-size: 16px;
  }
  text-shadow: 1px 1px 2px #595a5c;
  ${(props) =>
    props.high === "true" &&
    `
             border: 1.2mm ridge #4eed69;
             color: #f0e173;
             
             @media (max-width: 400px) {
                  border: 1mm ridge #4eed69;
              }
      `}
  ${(props) =>
    props.low === "true" &&
    `
             border: 1.5px solid #F57786;
      `}
      ${(props) =>
    props.occur === "true" &&
    `
             border: 1.2mm ridge #EDF066;
             @media (max-width: 400px) {
                  border: 1mm ridge #EDF066;
              }
      `}
`;
export const ErrorMessage = styled.p`
  font-family: Mandali;
  font-size: 20px;
  color: #ffffff;
  align-self: center;
  margin-top: 4px;
  line-height: 30px;
  padding: 0 20px 0 20px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 15px;
    line-height: 30px;
  }
`;
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px;
`;

export const ChildrenName = styled.p`
  font-family: Mandali;
  font-size: 15px;
  color: #ffff;
  margin-left: 20px;
  margin-right: 20px;
  flex-grow: 1;
  line-height: 25px;
  font-family: Mandali;
  font-weight: 600;
  letter-spacing: 0.03em;
  @media (max-width: 700px) {
    font-size: 14px;
    margin-left: 12px;
    font-size: 13px;
    margin-right: 10px;
  }
  @media (max-width: 400px) {
    align-self: flex-start;
    margin-left: 0;
    text-align: left;
    margin-top: 4px;
    margin-bottom: 0px;
  }
  ${(props) =>
    props.high === "true" &&
    `
             color: #73f07b;
             font-family: "Mandali", sans-serif;
             letter-spacing: 0.07em;
      `}
  ${(props) =>
    props.low === "true" &&
    `
             
             color: #ed6f78;
             font-family: "Mandali", sans-serif;
             
      `}
      ${(props) =>
    props.occur === "true" &&
    `
            
             color: #EDF066;
             font-family: "Mandali", sans-serif;
             letter-spacing: 0.07em;
      `}
`;

export const Presents = styled.p`
  font-family: Mandali;
  font-size: 20px;

  color: #fff;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  @media (max-width: 700px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    align-self: flex-end;
  }
`;

export const AttendanceCount = styled.span`
  font-size: 23px;
  margin-left: 3px;
  font-weight: 700;
  color: ${(props) => (props.count > 0 ? "#daf291" : "#f7a1a7")};
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

export const FailureContainer = styled.div`
  display: flex;
  width: 90%;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(219, 219, 219, 0.27000001072883606);
  height: 320px;
  flex-shrink: 0;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const SelectDateContainer = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const SearchDataContainer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 20px;
  @media (max-width: 700px) {
    align-self: flex-start;
  }
`;

export const SearchDateInput = styled.input`
  outline: none;
  border: none;
  background-color: #fff;
  color: #000;
  padding: 3px 6px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 6px;
`;

export const SearchBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #3296a6;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  padding: 10px 13px 5px 13px;
`;

export const SelctDateHead = styled.h1`
  font-family: Mandali;
  color: #e9e8e4;
  align-self: center;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.05em;
  @media (min-width: 701px) {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    align-self: flex-start;
  }
  margin-right: 10px;
  margin-bottom: 5px;
`;
export const SelectInput = styled.select`
  outline: none;
  color: #000;
  font-size: 15px;
  font-family: "Mandali", sans-serif;
  line-height: 18px;
  margin-left: auto;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: 600;
  background-color: rgba(219, 219, 219, 0.27000001072883606);
  padding: 2px 8px 2px 8px;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 7px;
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
    padding: 2px 5px 2px 5px;
  }
  transition: all 0.4s ease-in-out;
`;

export const Option = styled.option`
  font-family: "Mandali", sans-serif;
  cursor: pointer;
  color: #000;
  font-size: 18px;
  line-height: 20px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: center;
  margin-top: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SelectDateText = styled.p`
  font-family: Mandali;
  font-size: 16px;
  color: #fff;
  margin-left: 20px;
  letter-spacing: 0.03em;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 30px;
    text-align: left;
    line-height: 40px;
  }
`;

export const DateImage = styled.img`
  width: 100%;
  max-width: 200px;
  align-self: center;
  @media (min-width: 768px) {
    max-width: 300px;
  }
`;
export const DailyStatusChildern = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${(props) =>
    props.present === 1
      ? "rgba(155, 241, 153, 0.3100000023841858)"
      : "rgba(219, 219, 219, 0.27000001072883606)"};
  width: 100%;
  border: ${(props) =>
    props.present === 0 ? "2px solid #f7a1a7" : "2px solid #4eed69"};
  padding: 5px 20px 5px 20px;
  @media (min-width: 900px) {
    width: 48%;
  }
  backdrop-filter: blur(2px);
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: stretch;
  }
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const SeeAttendBtn = styled.button`
  border: none;
  outline: none;
  background-image: linear-gradient(
    to right,
    #c02425 0%,
    #f0cb35 51%,
    #c02425 100%
  );
  padding: 7px 30px 7px 30px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #010e24;
  font-family: Mandali;
  border-radius: 10px;
  font-weight: 600;
  align-self: flex-end;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    font-size: 17px;
    padding: 7px 20px 7px 20px;
  }
`;

export const BtnContainer = styled.div`
  width: 90%;
  align-self: center;
`;
export const PagenationContainer = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const PrevButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: #c5ae5e;
  margin-right: 20px;
  color: rgb(10, 233, 248);
  ${(props) =>
    props.disabled &&
    `
       display: none;
   `}
  font-size: 25px;
  cursor: pointer;
`;
export const NextButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: #c5ae5e;
  margin-right: 20px;
  cursor: pointer;
  font-size: 25px;
  color: rgb(10, 233, 248);
  ${(props) =>
    props.disabled &&
    `
       display: none;
   `}
`;

export const BackBtnContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 10px;
  align-self: center;
  align-items: center;
  align-self: center;
`;
export const BackBtn = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  font-family: "Mandali", sans-serif;
  font-weight: 600;
  line-height: 25px;
  background-color: #fff;
  border-radius: 7px;
  padding: 5px 17px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #faaca8;
    background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
    color: #0c8dad;
  }
`;
export const HomeImage = styled.img`
  width: 23x;
  height: 23px;
  margin-right: 3px;
  border-radius: 50%;
`;
