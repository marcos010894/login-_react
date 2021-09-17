import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --fontLogo: normal normal 900 35px/48px Avenir;
        --fontBtn: normal normal normal 14px/18px Muli;
        --textColor:#000000;
        --inputGlobalborder:1px solid #707070; 
        --white: #FFFFFF;
        --black:#707070 0% 0% no-repeat padding-box;
        --background:#A9C5BA;
        --error: #ff0000;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        overflow-x: hidden;            
        scrollbar-width: thin;
        scrollbar-color: transparent;
        @media (max-width: 720px){
            font-size: 87.5%;             
        }
    }
   
  /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
            width: 12px;
        }
        
        *::-webkit-scrollbar-track {
            background: transparent;
        }
        
        *::-webkit-scrollbar-thumb {
            background-color: transparent ;
            border-radius: 20px;
            border: 3px solid transparent;
        }

    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    `
    
export const DivImages = styled.div `
    width: 50%;
    display: inline-block;
    background: var(--background);       
    background-size: cover;
    background-repeat: repeat; 
    height: 110vh;
    opacity: 1;
    text-align: center;
    padding: 5vw 5vw 5vw 5vw;    
    overflow-y: hidden;
    @media (max-width: 1080px){
        display:none;
    }
    @media (max-width: 720px){        
        display:none;
    }
`
export const DivForms = styled.div `
    width: 50%;
    display: inline-block;
    height: auto;
    text-align: center;
    padding: 5px 0vw 5vw 0vw;
    float:right;
    @media (max-width: 1080px){
        display:grid;
        width: 100%;
        float:left;
    }
    @media (max-width: 720px){
        display:grid;
        width: 100%;
        float:left;
    }
`

export const LogoEmpresa = styled.h3 `
    text-align: right;
    font:var(--fontLogo);
    letter-spacing: 0px;
    color: var(--textColor);
    opacity: 1;
    margin: 30px
`
export const Title = styled.h3 `
  font-size: 30px;
  color: #707070;
  opacity: 1;
  font: normal normal normal 30px/38px Muli;
  margin-bottom:35px;
`
export const ContainerLogo = styled.div`
    margin: auto;
    width: 80%;    
    text-align: right;
`
export const Form = styled.form`
    margin: auto;
    width: 50%;
    text-align: left;
    padding: 10px;
`
export const Label = styled.h3 `
  top: 366px;
  font: normal normal normal 14px/18px Muli;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  margin-bottom:15px;
`
export const InputEmail = styled.input `
  width: 100%;
  outline: none;
  font-size: 18px;
  border: none;
  border-bottom: var(--inputGlobalborder);
  padding: 5px;
  font: normal normal normal 16px/20px Muli;
  letter-spacing: 0px;
  color:  var(--textColor);
  opacity: 1;  
  margin-bottom:20px;
`

export const InputPass = styled.input `
  width: 100%;
  outline: none;
  font-size: 18px;
  border: none;
  border-bottom: var(--inputGlobalborder);
  padding: 5px;
  font: normal normal normal 16px/20px Muli;
  letter-spacing: 0px;
  color:  var(--textColor);  
  margin-bottom:20px;
  opacity: 1;
`

export const Forgot = styled.p `
  text-align: right;
  font: normal normal normal 14px/18px Muli;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  margin: 0 0 30px 0;
`
export const NewUser = styled.p `
  text-align: center;
  font: normal normal normal 14px/18px Muli;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  margin-top:25px;
`

export const Divbtn = styled.div `
    width: 100%;    
    text-align:center;
`
export const RegisterBtn = styled.button `
    width: 175px;
    height: 45px;
    background: var(--black);
    border-radius: 100px;
    opacity: 1;
    font: normal normal bold 16px/20px Muli;
    letter-spacing: 0px;
    color:var(--white);
    opacity: 1;           
`
export const RegisterBtnGoogle = styled.button `
    width: 263px;
    height: 45px;
    background: var(--white);
    border-radius: 100px;
    opacity: 1;
    font: var(--fontBtn);
    letter-spacing: 0px;
    color:  var(--textColor);
    opacity: 1;   
    @media (max-width: 720px){
        width: 180px;
    }
`
export const Or = styled.p`
    width: 100%;
    margin:25px 0 25px 0;
    height: 18px;
    text-align: center;
    font: var(--fontBtn);
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
`
export const ImageSrc = styled.img`
    width: 50%;
`

//Stylos do slider
export const Img = styled.img`
  width:80%;
`
export const DivImg = styled.div`
`

export const TextImg = styled.div`
  font-size: 25px;
`

//Validação dos campos
export const MenssageErro = styled.span`
    color: var(--error);
    font-size: 15px;
`