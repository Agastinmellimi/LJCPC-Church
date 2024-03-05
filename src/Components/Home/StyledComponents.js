import styled from 'styled-components'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    padding-top: 20px;
    

    background-image: url("https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709435168/zd63qllzqaqwpu0g4zjd.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`

export const Heading = styled.h1`
    font-family: 'Mandali', sans-serif;
    color: transparent;
    align-self: center;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.05em;
    text-align: center;
    font-weight: 900;
    background-size: cover;
    background-repeat: no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: url('https://cdn.dribbble.com/users/398658/screenshots/8559608/media/8a98def8c49fe0bf1471c09272c2b45a.gif');
    @media (min-width: 700px) {
        font-size: 30px;
        line-height: 40px;
    }
`

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-top: 30px;
    backdrop-filter: blur(2px);
    border-radius: 10px;
    
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    align-self: center;
    justify-content: space-between;
    
`

export const BannerImage = styled.img`
    width: 50%;
    max-width: 150px;
    animation: rotate 1.8s ease-in-out forwards;
    @keyframes rotate {
        to {
            transform: rotate(360deg) scale(1);
            opacity: 1;
            
        } from {
            opacity: 0.1;
            transform: rotate(0) scale(0.20);
        }
    }
`

export const BannerContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`
export const TabsContentContainer = styled.div`
      align-self: center;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      width: 90%;
      margin-bottom: 18px;
      height: 300px;
      @media (max-width: 300px) {
           flex-direction: column;
           align-items: center;
      }
      
`

export const TabsContainer = styled.ul`
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 0;
      margin-top: 0;
      margin: 0;
      @media (max-width: 300px) {
           width: 100%;
           margin-bottom:0;
      }
      
`
export const Tab = styled.li`
    list-style: none;
    cursor: pointer;
    color: #fff;
    width: 100%;
    
    border-radius: 10px;
    padding: 5px 10px;
    height: 45%;
    font-family: "Mandali", sans-serif;
    background-color: #FBDA61;
    background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: translateX(-7px);
    }
   
    @media (max-width: 300px) {
           border-radius: 5px;
      }
    ${props => props.graph === 'true' && `
          background-color: #FA8BFF;
          background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);

    `}
`
export const AboutTab = styled.div`
  width: 35%;
  border-radius: 10px; 
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #FF3CAC;
  background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: translateX(7px);
    }
    position: relative;
    @media (max-width: 300px) {
           width: 100%;
           margin-top: 15px;
           border-radius: 5px;
           &:hover {
                transform: translateX(-7px);
            }
      }
      @media (max-width: 235px) {
           margin-top: 14px;
           margin-bottom: 14px;
      }
      
`
export const TabNameContainer  = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  padding-bottom: 15px;
  justify-content: space-between;
`
export const TabName = styled.p`
    font-family: "Mandali", sans-serif;
    font-size: 18px;
    word-break: keep-all;
    line-height: 20px;
    margin-right: 10px;
    margin-top: 0;
    color: #f7f8fa;
    text-shadow: 1px 1px 2px #595a5c;
    font-weight: 700;
    padding: 0;
    @media (min-width: 768px) {
        font-size: 20px;
    }
`

export const WidgetsContainer = styled.ul`
      padding-left: 0;
      display: flex;
      align-items: stretch;
      width: 90%;
      align-self: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: 300px) {
           flex-direction: column;
           align-items: center;
      }
`

export const Widgets = styled.li`
     list-style: none;
     margin-bottom: 15px;
     background-color: #fff;
     color: #000;
     width: 60%;
     height: 60px;
     border-radius: 10px;
     padding: 4px 10px;
     font-family: "Mandali", sans-serif;
     background-color: #85FFBD;
     
     background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
     box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
     cursor: pointer;
     ${props => props.language === 'true' && `
           background-color: #FFE53B;
           width: 35%;
           cursor: default;
          background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);

     `}
     ${props => props.youtube === 'true' && `
           background-color: #003e62;
           width: 100%;
           background-image: linear-gradient(203deg, #003e62 0%, #f8ff7d 100%);

     `}



     @media (max-width: 300px) {
          width: 100%;
      }
`
export const SelectInput = styled.select`
     outline: none;
     color: #000;
     font-size: ${props => props.l === 'true' ? '16px' : '14px'};
     font-family: 'Mandali', sans-serif;
     line-height: 15px;
     margin-left: auto;
     text-shadow: 1px 1px 2px #595a5c;
     letter-spacing: 0.03em;
     cursor: pointer;
     font-weight: 600;
     background-color: transparent;
     padding: 0 !important;
     margin: 0 !important;
     border: none;
     color: #fff;
     border-radius: 7px;
     @media (max-width: 500px) {
           font-size: ${props => props.l === 'true' ? '14px' : '12px'};
           line-height: 15px;
     }
     transition: all 0.4s ease-in-out;
     &:hover {
        color: #c3c6c9;
     }
`

export const Option = styled.option`
   font-family: "Mandali", sans-serif;
   cursor: pointer;
   color: #000;
   font-size: 18px;
   line-height: 20px;
`

export const NameContainer  = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
`