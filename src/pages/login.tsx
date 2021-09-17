  import { Slider } from '../components/slider/slider';
  import { GlobalStyle, DivImages, DivForms, ContainerLogo, LogoEmpresa, Title, Form, Label,
  InputEmail, InputPass, Forgot, Divbtn, RegisterBtn, Or, RegisterBtnGoogle, NewUser, MenssageErro } from '../components/styled/style'
  import { useHistory } from 'react-router';
  import { useForm } from "react-hook-form";
  import React, { useState, ChangeEvent, useRef } from 'react'
  import { useAuth } from '../hooks/auth';

  const logins = [
    {
      'login': 'marcos@gmail.com',
      'senha': 'mito010894'
    }
  ]



  export function Login() {
    
    const history = useHistory();
    function hendleSelect()  {
      history.push(`${'/SignUp'}`)
    }

    const {signIn} = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = handleSubmit((data) => login(data.email, data.pass));




    function login(email:string, senha:string){
      signIn(email, senha)
    }
  // const loginInputRef = useRef<HTMLInputElement>(null);
  
  /* const initalValue = {
      'login': '',
      'pass': ''
    }

    const [ values, setValues]  = useState(initalValue);

    function onchage(ev: ChangeEvent<HTMLInputElement>){
      const {name, value} = ev.target    
      if(name == 'login'){
        initalValue.login = value
        
      }else{
        initalValue.pass = value
      }   
      console.log(initalValue.pass)
      
    }*/


    function mudarCor(ev: Object){

    }

    return (
      <div className="App">
        <GlobalStyle/>
          <DivImages>
          <Slider></Slider>
          </DivImages>
          <DivForms> 
              <ContainerLogo> <LogoEmpresa>Invision</LogoEmpresa> </ContainerLogo>
              <Title>welcome to Invision</Title> 
              <Form onSubmit={onSubmit}>
                <Label>user name or email.</Label>
                <InputEmail  type="email" {...register("email", { required: true })} /*onChange={onchage}*/></InputEmail>
                {errors.email && <MenssageErro>This field is required</MenssageErro>}
                
                <Label>Password.</Label>
                <InputPass type="password" {...register("pass", { required: true })} /*onChange={onchage}*/></InputPass>
                {errors.pass && <MenssageErro>This field is required</MenssageErro>}

                <Forgot><a href="#"> Forgot Password? </a></Forgot>
                <Divbtn>
                  <RegisterBtn type="submit" >Sign in</RegisterBtn>
                </Divbtn>
              </Form>
                                
              <Or> or </Or>

              <Divbtn>
                <RegisterBtnGoogle>Sign in with Google</RegisterBtnGoogle>
              </Divbtn>

              <NewUser>New invision? <a  href="#"   onClick={hendleSelect}> Create Acount </a></NewUser>

          </DivForms>
      </div>
    );
  }