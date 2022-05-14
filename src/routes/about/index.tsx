import * as S from "./styles";
import GlobalStyles from "../../styles/GlobalStyles";
import { WhatsAppButton } from "../../components/WhatsAPP-Float-Button";

function About() {
  return (
    <S.Container>
      <WhatsAppButton />
      <div className="aboutContent">
        <div id="line">
          <S.Bar>
            <h2>SOBRE</h2>
          </S.Bar>
        </div>
        <div id="about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
            blandit ante. Maecenas ut egestas leo, non fermentum diam. Proin
            convallis egestas blandit. Curabitur congue ac tortor eget
            convallis. Sed et ex lacinia tortor vulputate feugiat. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Vestibulum
            interdum lacus eu pharetra facilisis. In mi metus, tincidunt sed
            interdum vel, imperdiet ac arcu. Integer scelerisque vel lacus vel
            ornare. Cras sit amet dapibus ex, sit amet ornare enim. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Vivamus blandit diam vitae orci ultricies, in
            venenatis velit scelerisque. Morbi tempus nisi nec lacus semper,
            vitae hendrerit metus volutpat. Nam magna est, elementum at odio
            nec, aliquam ultricies lacus. Integer posuere urna sed sapien
            lacinia auctor. Aenean volutpat semper lorem ut fringilla.
            Vestibulum in odio nec purus posuere fringilla. Curabitur dignissim
            malesuada hendrerit. Aenean tristique erat vel libero gravida
            luctus. Nam odio augue, accumsan ut condimentum ac, vestibulum at
            lectus. Vivamus porttitor felis vitae diam pharetra, sit amet
            ultricies ante luctus. Donec ex nisi, consectetur quis sollicitudin
            vel, accumsan in risus. Pellentesque laoreet egestas diam, eget
            tincidunt metus ultricies nec. Praesent tristique erat metus, vitae
            volutpat purus elementum eu. In cursus ex non ligula ullamcorper
            semper. Phasellus tempor quam quis eleifend aliquet. Donec hendrerit
            sem vitae facilisis sollicitudin. Ut nec arcu et justo semper tempus
            vitae nec nisi. Nunc dui turpis, placerat nec congue et, porta sed
            erat. Donec id nisi eget est iaculis sollicitudin nec vulputate
            diam. Etiam id dictum lorem. Pellentesque sed placerat dolor, eu
            posuere sapien. Ut luctus, sapien in elementum ultricies, sapien
            erat pulvinar elit, sit amet scelerisque eros mauris nec arcu.
            Quisque pretium et quam sit amet porttitor. Vestibulum nec tortor
            nec erat mollis semper. Aliquam erat volutpat. Curabitur sem sem,
            cursus sed magna eget, aliquam blandit enim. Aenean id libero
            interdum, molestie arcu ac, facilisis velit. Phasellus eleifend
            egestas malesuada.
          </p>
        </div>
      </div>
      <GlobalStyles />
    </S.Container>
  );
}

export default About;
