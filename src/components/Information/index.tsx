import * as C from './styles'

export const Information = () => {

    return(
        <C.Container>
            <div className="content">
                <div id="email">
                    <h2>Fale Conosco</h2>

                    <div id="fields">
                        <div id="field">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome"/>
                        </div>
                        <div id="field">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email"/>
                        </div>
                        <div id="field">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" name="telefone"/>
                        </div>
                        <div id="field">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea name="mensagem" id="message"></textarea>
                        </div>
                    </div>
                    <C.SendButton>ENVIAR</C.SendButton>
                </div>
                <div id="map">
                    <C.Bar>
                        <h2>Loja Física</h2>
                        <C.BuyButton>Clique Aqui</C.BuyButton>
                    </C.Bar>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15001.135586128647!2d-44.0369155!3d-19.9545596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37f827214b68729f!2sMADEIREIRA%20MOGNO!5e0!3m2!1spt-BR!2sbr!4v1636479048707!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                </div>
            </div>
        </C.Container>
    );
}