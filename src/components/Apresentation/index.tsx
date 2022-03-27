import { useState } from "react";
import * as C from "./styles";
import bg from "../../assets/bg/bg-main.jpg";
import logo from "../../assets/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Apresentation = () => {
  const nameInput = document.getElementById("namefield") as HTMLInputElement
  const emailInput = document.getElementById("emailfield") as HTMLInputElement
  const telephoneInput = document.getElementById("telephonefield") as HTMLInputElement
  const finalityInput = document.getElementById("fianlityfield") as HTMLInputElement
  const messageInput = document.getElementById("messagefield") as HTMLInputElement


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");

  function handleInformation() {

    const checkbox = document.querySelector(".privacy") as HTMLInputElement

    if(checkbox.checked && name!== "" && email !== "" && telephone !== "" && goal !== "" && message !=="") {
      window.open(
        "https://wa.me/553192071285?text=Olá eu sou " + name + " " + message
      );

      nameInput.value=""
      emailInput.value =""
      telephoneInput.value=""
      finalityInput.value=""
      messageInput.value=""
    } else {
      alert("Preencha os campos")
    }
  }

  return (
    <C.Container>
      <C.FormGroup>
        <C.Title>SOLICITAR COTAÇÃO <WhatsAppIcon /></C.Title>
        <div id="fields">
          <div>
            <C.Input
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              id="namefield"
            />
          </div>
          <div>
            <C.Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              id="emailfield"
            />
          </div>

          <div>
            <C.Input
              placeholder="Telefone"
              onChange={(e) => setTelephone(e.target.value)}
              id="telephonefield"
            />
          </div>

          <div>
            <C.Input
              placeholder="Finalidade"
              onChange={(e) => setGoal(e.target.value)}
              id="finalityfield"
            />
          </div>
          <div>
            <C.Input
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              id="messagefield"
            />
          </div>
        </div>
        <div id="terms">
          <C.CheckBox required id="requiredCheckbox" className="privacy"/>
          <C.Terms>
            ACEITO A
            <b>
              <a href="/">POLÍTICA DE PRIVACIDADE</a>
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
