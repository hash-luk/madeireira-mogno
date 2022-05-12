import * as S from './styles'
import WhatsAppIcon  from '@mui/icons-material/WhatsApp';

export const WhatsAppButton = () =>  {
    function handleWhatsApp() {
        window.open(
          "https://wa.me/553192071285?text=Estou%20interessado%20em%20seus%20painéis%20de%20MDF"
        )
      }

    return(
        <>
            <S.button onClick={handleWhatsApp}>
                < WhatsAppIcon className='icon'/>
            </S.button>
        </>
    );
}