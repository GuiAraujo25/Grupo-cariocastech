import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Azul from "../components/Azul/azul";
import ProjetoCartoes from "../components/ProjetoCartoes/ProjetoCartoes";


const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  

  return (
    <Base>
      <Azul 
        name= "Portifólio de projetos IBMEC."
      />
      <ProjetoCartoes/>
    </Base>
  )
}

export default Home
