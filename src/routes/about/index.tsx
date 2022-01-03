import * as C from './styles'
import GlobalStyles from '../../styles/GlobalStyles';
import {Header} from '../../components/Header'

function About() {
    return(
        <C.Container>
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