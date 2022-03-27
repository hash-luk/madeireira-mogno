import * as C from './styles'
import GlobalStyles from '../../styles/GlobalStyles';
import {Header} from '../../components/Header'
import { WhatsAppButton } from '../../components/WhatsAPP-Float-Button';

function About() {
    return(
        <C.Container>
            <WhatsAppButton />
            <Header />
            <div className="aboutContent">
                <div id="line">
                    <C.Bar>
                        <h2>SOBRE</h2>
                    </C.Bar>
                </div>
            </div>
            <GlobalStyles />
        </C.Container>
    )
}

export default About