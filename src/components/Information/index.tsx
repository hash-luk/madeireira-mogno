import { useState } from "react";
import InputMask from "react-input-mask";
import emailjs from "emailjs-com";
import {Modal,Typography,Box} from "@material-ui/core";
import * as C from "./styles";

export const Information = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("")

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#364d39',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: '#FFF'
  };

  function handleSubmit() {
    const nameInput = document.getElementById("nameField") as HTMLInputElement;
    const emailInput = document.querySelector(
      ".emailField"
    ) as HTMLInputElement;
    const telephoneInput = document.querySelector(
      ".telephoneField"
    ) as HTMLInputElement;
    const messsageinput = document.querySelector(
      ".messageField"
    ) as HTMLInputElement;

    if (name === "" || email === "" || message === "") {
      alert("preencha os campos vazios");
    } else {
      try {
        emailjs.send(
          "gmailMessageController",
          "template_41k510i",
          {
            name: name,
            message: message + ".Contato por telefone via: " + telephone,
            email: email,
          },
          "user_1qVBTXajxgjhnWnfysrlH"
        );
        setModalMessage("Mensagem enviada com sucesso!Em breve retornaremos!")
        handleOpen()
      } catch {
        setModalMessage("Oops, tivemos um erro ao enviar sua mensagem, confira os campos e tente novamente =(")
        handleOpen()
      }
    }
    nameInput.value = "";
    emailInput.value = "";
    telephoneInput.value = "";
    messsageinput.value = "";
  }

  return (
    <C.Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalMessage}
          </Typography>
        </Box>
      </Modal>
      <div className="content">
        <div id="email">
          <h2>Fale Conosco</h2>

          <div id="fields">
            <div id="field">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                onChange={(e) => setName(e.target.value)}
                id="nameField"
              />
            </div>
            <div id="field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="emailField"
              />
            </div>
            <div id="field">
              <label htmlFor="telefone">Telefone</label>
              <InputMask
                mask="(99) 9 9999-9999"
                onChange={(e) => setTelephone(e.target.value)}
                name="telephone"
                className="telephoneField"
                alwaysShowMask = {false}
              />
            </div>
            <div id="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                name="mensagem"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className="messageField"
              ></textarea>
            </div>
          </div>
          <C.SendButton type="submit" onClick={handleSubmit}>
            ENVIAR
          </C.SendButton>
        </div>
        <div id="map">
          <C.Bar>
            <h2>Loja Física</h2>
            <C.BuyButton>Clique Aqui</C.BuyButton>
          </C.Bar>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15001.135586128647!2d-44.0369155!3d-19.9545596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37f827214b68729f!2sMADEIREIRA%20MOGNO!5e0!3m2!1spt-BR!2sbr!4v1636479048707!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </C.Container>
  );
};
