
  import { useAuth } from '../hooks/auth';
  import { useHistory } from 'react-router';



  export function Principal() {
    const {signOut} = useAuth()
    const history = useHistory();
    function hendleSelect()  {
      history.push(`${'/'}`)
    }
    const {logged} = useAuth()
    if (logged) {
      //Acessa pagina
    }else{
      hendleSelect()
    }
    return (
      <div className="App">
          <h1>Seja bem vindo, você acabou de efetuar o login</h1>
          <br />
        <button onClick={() => {signOut()} }>sair</button>
      </div>
    );
  }