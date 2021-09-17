import { Slider } from '../components/slider/slider';
import { GlobalStyle, DivImages, DivForms, ContainerLogo, LogoEmpresa, Title, Form, Label,
InputEmail, InputPass, Forgot, Divbtn, RegisterBtn, Or, RegisterBtnGoogle, NewUser, MenssageErro } from '../components/styled/style'
import { useHistory } from 'react-router';
import {useForm} from 'react-hook-form'
import axios from "axios";
import { useState } from 'react';
 

export function SignUp() {
  
  const welcomeText = ['Geting Started']
  const history = useHistory();

  function hendleSelect()  {
    history.push(`${'/'}`)
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => createAcount(data.name, data.email, data.pass));


  const [user, setUser] = useState();
  function createAcount(name:String, email:String, pass:String){
    console.log('nome: ' + name + ' email: ' + email + ' Senha: ' + pass)

    alert("Por favor, aguarde em quanto capturamos seus dados! CLIQUE NO OKAY")
    
        
    var url = 'https://dockerflask.herokuapp.com/register'
    var xhr = new XMLHttpRequest()
    var formData = new FormData()
    xhr.open('POST', url, true)
    var json = JSON.stringify({
      'nome':  name,
      'email': email,
      'senha': pass
    })

    fetch(url, {
    method : "POST",
    body: json,
   /* mode:'no-cors',
    headers:{'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'}*/
      }).then(
          response => response.text()
      ).then(
          arquivo => {
            alert(arquivo + "conta criada com sucesso");
          }
      );

  }
  return (
    <div className="App">
      <GlobalStyle/>
        <DivImages>
        <Slider></Slider>
        </DivImages>
        <DivForms> 
            <ContainerLogo> <LogoEmpresa>Invision</LogoEmpresa> </ContainerLogo>
            <Title>{welcomeText}</Title> 
            <Form onSubmit={onSubmit}>
              <Label>Full name.</Label>
              <InputEmail type="text" {...register("name", { required: true })}></InputEmail>
              {errors.name && <MenssageErro>This field is required</MenssageErro>}

              <Label>user name or email.</Label>
              <InputEmail type="email" {...register("email", { required: true })}></InputEmail>
              {errors.email && <MenssageErro>This field is required</MenssageErro>}

              <Label>Password.</Label>
              <InputPass type="password" {...register("pass", { required: true, minLength: 6 })}></InputPass>
              {errors.pass && <MenssageErro>This field is required and min 6 charecters required</MenssageErro>}

              <Forgot>Forgot Password?</Forgot>
              <Divbtn>
                <RegisterBtn type="submit">Sign Up</RegisterBtn>
              </Divbtn>
            </Form>
             
            <Or>or</Or>

            <Divbtn>
              <RegisterBtnGoogle>Sign up with Google</RegisterBtnGoogle>
            </Divbtn>

            <NewUser>
                    already have login? <a href="#" onClick={hendleSelect}> between here</a>
            </NewUser>

        </DivForms>
    </div>
  );
}

