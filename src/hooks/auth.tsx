import React, {createContext, useState, useContext} from 'react'
import { parseJsonText } from 'typescript';



interface IAuthContext{
    logged: boolean;
    signIn(email:String, password:String): void;
    signOut():void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider:  React.FC = ({  children }) => {
    const [logged, setLogged] = useState<boolean>(() =>{
        const isLogged = localStorage.getItem('@invision:logged');

        return !!isLogged;
    });
    const signIn = (email:String, password:String) => {
        var returnApi = '0';
                var url = 'https://dockerflask.herokuapp.com/login'
                var xhr = new XMLHttpRequest()
                var formData = new FormData()
                xhr.open('POST', url, true)
                var json = JSON.stringify({
                'email': email,
                'senha': password
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
              arquivo =>  {
                if (arquivo === "1") {
                    localStorage.setItem('@invision:logged', 'true');
                    window.location.reload();
                }else{
                  alert("Atenção o seu email ou senha estão errados")                   
                }
              }
              
          );
    }
    const signOut = () => {
        localStorage.removeItem('@invision:logged');
        setLogged(false);
    }
    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}> 
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const contex = useContext(AuthContext );
    return contex
}

export { AuthProvider, useAuth}

/*        if(mapReturn == "1"){
            localStorage.setItem('@invision:logged', 'true');
            window.location.reload();
        }else{ 
            if (email != 'marcos@gmail.com') {
                alert("Atenção o seu email está errado")
            }
        }*/