import { useState } from "react";

import * as S from "./styles";
import EmailIcon from "@mui/icons-material/Email";

import InputMask from "react-input-mask";
import emailjs from "emailjs-com";
import { Modal, Typography, Box } from "@material-ui/core";

import { TextArea } from "../TextArea";
import { Input } from "../Input";
import { theme } from "../../theme";

export const Information = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: theme.colors.lightGreen,
    border: `1px solid ${theme.colors.borderColor}`,
    boxShadow: 24,
    p: 4,
    color: theme.colors.whiteTextColor,
  };

  function handleSubmit() {

    const nameInput = document.querySelector(".nameField") as HTMLInputElement;
    const emailInput = document.querySelector(
      ".emailField"
    ) as HTMLInputElement;
    const telephoneInput = document.querySelector(
      ".telephoneField"
    ) as HTMLInputElement;
    const messageinput = document.querySelector(
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
        setModalMessage("Mensagem enviada com sucesso!Em breve retornaremos!");
        handleOpen();
      } catch {
        setModalMessage(
          "Oops, tivemos um erro ao enviar sua mensagem, confira os campos e tente novamente =("
        );
        handleOpen();
      }
    }
    nameInput.value = "";
    emailInput.value = "";
    telephoneInput.value = "";
    messageinput.value = "";
  }

  return (
    <S.Container>
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
          <h2>
            Fale Conosco <EmailIcon />
          </h2>
          <div id="fields">
            <div id="field">
              <Input
                id="nameField"
                placeHolder="Digite seu nome"
                type="text"
                name="Nome"
                setVariableValue={setName}
                className="nameField"
              />
            </div>
            <div id="field">
              <Input
                placeHolder="Digite seu email"
                type="text"
                name="Email"
                className="emailField"
                setVariableValue={setEmail}
              />
            </div>
            <div id="field">
              <label htmlFor="telefone">Telefone</label>
              <InputMask
                mask="(99) 9 9999-9999"
                onChange={(e) => setTelephone(e.target.value)}
                name="telephone"
                className="telephoneField"
                alwaysShowMask={false}
                placeholder="(99) 9 9999-9999"
              />
            </div>
            <div id="field" className="textarea">
              <TextArea setVariableValue={setMessage} message={message} className="messageField"/>
            </div>
          </div>
          <S.SendButton type="submit" onClick={handleSubmit}>
            ENVIAR
          </S.SendButton>
        </div>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15001.135586128647!2d-44.0369155!3d-19.9545596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37f827214b68729f!2sMADEIREIRA%20MOGNO!5e0!3m2!1spt-BR!2sbr!4v1636479048707!5m2!1spt-BR!2sbr"
            loading="lazy"
            title="Loja 1"
          ></iframe>
        </div>
      </div>
    </S.Container>
  );
};
