import InputMask from 'react-input-mask';
import * as C from './styles';
import {Header} from '../../components/Header';
import GlobalStyles from '../../styles/GlobalStyles'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
 
function Contact() {
    return(
        <C.Container>
            <Header />
            <div id="bar"><p>FALE CONOSCO</p></div>
            <div id="data">
                <C.Form>
                    <div id="fields">
                        <div id="field">
                            <label htmlFor="name">NOME</label>
                            <C.Input name="name" id="name"/>
                        </div>
                        <div id="field">
                            <label htmlFor="telephone">EMAIL</label>
                            <C.Input name="email" id="email"/>
                        </div>
                        <div id="field">
                            <label htmlFor="telephone">TELEFONE</label>
                            <InputMask mask="(99) 9 9999-9999"/>
                        </div>
                        <div id="field">
                            <label htmlFor="name">MENSSAGEM</label>
                            <C.MessageBox rows={5}></C.MessageBox>
                        </div>
                        <C.Button>Enviar</C.Button>
                    </div>
                </C.Form>
            </div>
            <div id="maps">
                <h2>Lojas Físicas</h2>
                <div id="content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15001.135586128647!2d-44.0369155!3d-19.9545596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37f827214b68729f!2sMADEIREIRA%20MOGNO!5e0!3m2!1spt-BR!2sbr!4v1638229565631!5m2!1spt-BR!2sbr" className="map"></iframe>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15001.135586128647!2d-44.0369155!3d-19.9545596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37f827214b68729f!2sMADEIREIRA%20MOGNO!5e0!3m2!1spt-BR!2sbr!4v1638229565631!5m2!1spt-BR!2sbr" className="map"></iframe>
                </div>
            </div>
            <div id="contact">
                <h2>Canais Digitais <PhoneIphoneIcon /></h2>
                <div id="channels">
                    <p>WhatsApp</p>
                    <p>Telefone</p>
                    <p>Email</p>
                </div>
            </div>
            <GlobalStyles />
        </C.Container>
    );
}

export default Contact