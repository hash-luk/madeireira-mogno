import * as C from './styles'
import GlobalStyles from '../../styles/GlobalStyles';
import {Header} from '../../components/Header'

function Products() {
    return(
        <C.Container>
            <Header />
            <div className="prductsContent">
                <div id="line">
                    <C.Bar>
                        <h2>PRODUTOS</h2>
                    </C.Bar>
                </div>
            </div>
            <GlobalStyles />
        </C.Container>
    );
}

export default Products