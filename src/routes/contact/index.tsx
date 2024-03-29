import InputMask from "react-input-mask";
import * as S from "./styles";
import GlobalStyles from "../../styles/GlobalStyles";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  function handleWhatsApp() {
    window.open(
      "https://wa.me/553192071285?text=Estou%20interessado%20em%20seus%20painéis%20de%20MDF"
    )
  }

  return (
    <S.Container>
      <S.Bar>
        <h2>FALE CONOSCO</h2>
      </S.Bar>
      <div id="data">
        <S.Form>
          <div id="fields">
            <div id="field">
              <label htmlFor="name">NOME</label>
              <S.Input name="name" id="name" />
            </div>
            <div id="field">
              <label htmlFor="telephone">EMAIL</label>
              <S.Input name="email" id="email" />
            </div>
            <div id="field">
              <label htmlFor="telephone">TELEFONE</label>
              <InputMask mask="(99) 9 9999-9999" />
            </div>
            <div id="field">
              <label htmlFor="name">MENSSAGEM</label>
              <S.MessageBox rows={5}></S.MessageBox>
            </div>
            <S.Button>Enviar</S.Button>
          </div>
        </S.Form>
      </div>
      <div id="contacts">
        <h2>
          Canais Digitais <PhoneIphoneIcon />
        </h2>
        <div id="channels">
          <p>
            <AlternateEmailIcon />
            Email: contatomadeireiramogno@gmail.com
          </p>
          <p>
            <PhoneIcon />
            Telefone: (31) 3397-9765
          </p>
          <p onClick={handleWhatsApp}>
            <WhatsAppIcon /> WhatsApp
          </p>
        </div>
      </div>
      <div id="maps">
        <h2>Lojas Físicas</h2>
        <div id="content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15001.135586128647!2d-44.0369155!3d-19.9545596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37f827214b68729f!2sMADEIREIRA%20MOGNO!5e0!3m2!1spt-BR!2sbr!4v1638229565631!5m2!1spt-BR!2sbr"
            className="map"
            title="Loja 1"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9944635083993!2d-44.20918418508482!3d-19.96673508658315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84aa4046bff0fd41!2zMTnCsDU4JzAwLjMiUyA0NMKwMTInMjUuMiJX!5e0!3m2!1spt-BR!2sbr!4v1648338989822!5m2!1spt-BR!2sbr"
            className="map"
            title="Loja 2"
          ></iframe>
        </div>
      </div>
      <GlobalStyles />
    </S.Container>
  );
}

export default Contact;
