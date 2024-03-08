import styled from 'styled-components'


export const GraphContainer = styled.div`
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
`

export const Heading = styled.h1`
font-family: Mandali;
color: #E9E8E4;
width: 90%;
align-self: center;
font-size: 19px;
line-height: 30px;
letter-spacing: 0.05em;
@media (min-width: 700px) {
    font-size: 28px;
}
`

export const FailureContainer = styled.div`
      display: flex;
      width: 90%;
      align-self: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      background-color: rgba(219, 219, 219, 0.27000001072883606);
      height: 80%;
      flex-shrink: 0;
      border-radius: 7px;
      margin-bottom: 20px;
`
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
    line-height: 20px;
  }
`
export const FailureImage = styled.img`
         width: 70%;
         max-width: 200px;
         @media (max-width: 500px){
            max-width: 130;
         }
       
`
export const TryAgainBtn = styled.button`
     border: none;
     outline: none;
     background-color: ${props => props.refresh === 'true' ? '#206a85': '#edeef0'};
     color: ${props => props.refresh === 'true' ? '#fff': '#1c1c1c'};
     font-family: "Mandali", sans-serif;
     font-weight: 600;
     padding: 4px 16px 4px 16px;
     border-radius: 8px;
     margin-top: 4px;
     cursor: pointer;
     margin-right: 10px;
`

export const LoaderContainer = styled.div`
      width: 90%;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto; 
`

export const SearchContainer = styled.form`
        display: flex;
        align-items: center;
        width: 90%;
        align-self: center;
        @media (max-width: 290px) {
            flex-direction: column;
            align-items: center;
        }
`

export const MonthInput = styled.input`
     border: none;
     outline: none;
     border-radius: 6px;
     padding: 4px 10px;
     color: #fff;
     font-size: 19px;
     margin-right: 20px;
     background-color: rgba(219, 219, 219, 0.27000001072883606);
     font-family: "Mandali", sans-serif;
     width: 100%;
     ${props => props.err === 'true' && `
          border: 1px solid #f77c80;
     `}
     ::placeholder {
        color: #b5b3b4 !important; 
        opacity: 1 !important;/* Change to desired color */
    }

    &:focus::placeholder {
        color: #b5b3b4 !important;
        opacity: 1 !important; /* Change to desired color */
    }
`
export const YearInput = styled.input`
    border: none;
    outline: none;
    border-radius: 6px;
    color: #fff;
    padding: 4px 10px;
    font-size: 19px;
    background-color: rgba(219, 219, 219, 0.27000001072883606);
    margin-right: 15px;
    font-family: "Mandali", sans-serif;
    width: 100%;
    ${props => props.err === 'true' && `
              border: 1px solid #f77c80;
        `}
    ::placeholder {
        color: #b5b3b4 !important; 
        opacity: 1 !important;/* Change to desired color */
    }

    &:focus::placeholder {
        color: #b5b3b4 !important;
        opacity: 1 !important; /* Change to desired color */
    }
`

export const InputError = styled.p`
     color: #f77c80;
     font-family: "Mandali", sans-serif;
     font-size: 13px;
     margin-top: 0;
     line-height: 15px;
     margin-bottom: 0;
`
export const Note = styled.p`
     color: #d1cdcd;
     font-family: "Mandali", sans-serif;
     font-size: 13px;
     line-height: 17px;
     width: 90%;
     align-self: center;
     
`
export const InputFeild = styled.div`
     margin-right: 15px;
     margin-top: 0;
     margin-bottom: 0;
     width: 40%;
     @media (max-width: 290px) {
            width: 100%;
            margin-right: 0;
            margin-bottom: 10px;
        }
`

export const SearchBtn = styled.button`
     border: none;
     outline: none;
     cursor: pointer;
     border-radius: 6px;
     padding: ${props => props.icon === 'true' ? "8px 13px": '8px 25px'};
     margin-left: auto;
     background-color: #097569;
     color: #fff;
     display: flex;
     align-items: center;
     font-size: 17px;
     justify-content: center;
     font-family: "Mandali", sans-serif;
`
export const MonthName = styled.h1`
       font-family: Mandali;
        color: #E9E8E4;
        width: 90%;
        align-self: center;
        font-size: 17px;
        line-height: 30px;
        letter-spacing: 0.05em;
        @media (min-width: 700px) {
            font-size: 25px;
        }
`

export const BtnContainer = styled.div`
   flex-direction: row;
   display: flex;
   flex-wrap: wrap;
   align-self: center;
   justify-content: center;
   align-items: center;

`

export const BackBtnContainer = styled.div`
      display: flex;
      width: 90%;
      margin-top: 10px;
      align-self: center;
      align-items: center;
      align-self: center;
`
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
     &:hover{
        background-color: #FAACA8;
        background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
        color: #0c8dad;
     }
`
export const HomeImage = styled.img`
     width: 23x;
     height: 23px;
     margin-right: 3px;
     border-radius: 50%;
`
export const SelectInput = styled.select`
     outline: none;
     color: #000;
     font-size: 15px;
     font-family: 'Mandali', sans-serif;
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
     
`

export const Option = styled.option`
   font-family: "Mandali", sans-serif;
   cursor: pointer;
   color: #000;
   font-size: 18px;
   line-height: 20px;
`