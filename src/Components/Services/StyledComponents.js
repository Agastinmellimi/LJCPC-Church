import styled from 'styled-components'


export const TimingsContainer = styled.div`
    background-image: url("https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709435290/zq6evcwuplfmkramgmps.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
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

export const ServicesContainer = styled.ul`
   padding-left: 0;
   flex-wrap: wrap;
   display: flex;
   width: 90%;
   align-self: center;
   justify-content: stretch;
   
   @media (max-width: 735px) {
    justify-content: space-between;
   }
`
export const Service = styled.li`
   list-style: none;
   background: rgba(219, 219, 219, 0.27000001072883606);
   border-radius: 6px;
   display: flex;
   flex-direction: column;
   padding: 5px;
   margin-bottom: 15px;
   width: 46%;
   max-width: 190px;
   height: 180px;
  
   @media (min-width: 700px) {
    max-width: 210px;
    height: 240px;
    margin-right: 15px;
   }
   @media (min-width: 371px) and (max-width: 735px) {
    width: 45%;
    margin-right: 0;
   }
   @media (max-width: 370px) {
    width: 45%;
    height: 150px;
   }
   @media (max-width: 281px) {
    width: 100%;
    margin-right: 0;
    flex-shrink: 0;
    
   }
   transition: all 0.5s ease-in-out;
   &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
   }
`
export const ServiceImage = styled.img`
   width: 100%;
   height: 50%;
   align-self: center;
   border-radius: 5px;
`
export const ServiceName = styled.p`
   font-family: "Mandali", sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: #fff;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    line-height: 13px;
    margin-bottom:9px;
    padding-left: 2px;
    margin-top: 6px;
    @media (max-width: 500px) {
        font-size: 15px;
        margin-bottom:5px;
   }
    @media (max-width: 370px) {
        font-size: 13px;
        margin-bottom:5px;
   }
`

export const ServiceDescription = styled.p`
     font-family: "Mandali", sans-serif;
    
    font-weight: 400;
    font-size: 14px;
    padding-left: 2px;
    margin-top: 0;
    line-height: 17px;
    color: rgb(190, 222, 99);
    @media (max-width: 500px) {
        font-size: 12px;
        line-height: 14px;
   }
    @media (max-width: 370px) {
        font-size: 10px;
        line-height: 13px;
   }
`


export const LoaderContainer = styled.div`
      width: 90%;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto; 
`

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
    line-height: 30px;
  }
`

export const FailureImage = styled.img`
         width: 80px;
       @media (max-width: 500px) {
          width: 50px;
        }
`
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