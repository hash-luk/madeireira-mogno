import React, { useState } from "react";
import * as C from "./styles";
import bg from "../../assets/bg/bg-main.jpg";
import logo from "../../assets/logo.png";

export const Apresentation = () => {

  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone,setTelephone] = useState('')
  const [goal,setGoal] = useState('')
  const [message,setMessage] = useState('')

  function handleInformation() {
    
  }


  return (
    <C.Container>
      <C.FormGroup>
        <C.Title>SOLICITAR COTAÇÃO</C.Title>
        <div id="fields">
          <div>
            <C.Input placeholder="Nome" onChange={e => setName(e.target.value)}/>
          </div>
          <div>
            <C.Input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          </div>

          <div>
            <C.Input placeholder="Telefone" onChange={e => setTelephone(e.target.value)}/>
          </div>

          <div>
            <C.Input placeholder="Finalidade" onChange={e => setGoal(e.target.value)}/>
          </div>
          <div>
            <C.Input placeholder="Mensagem" onChange={e => setMessage(e.target.value)}/>
          </div>
        </div>
        <div id="terms">
          <C.CheckBox required/>
          <C.Terms>
            ACEITO A
            <b>
              <a href="#">POLÍTICA DE PRIVACIDADE</a>
            </b>
          </C.Terms>
        </div>
        <C.Request onClick={handleInformation}>SOLICITAR</C.Request>
      </C.FormGroup>

      <div className="filter"></div>
      <div className="logodiv">
        <img src={logo} alt="" />
      </div>
      <img src={bg} alt="Background" className="bg" />
    </C.Container>
  );
};
