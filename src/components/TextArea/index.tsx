import { useState } from "react";

import * as S from "./styles";

export function TextArea() {
    const maxCharacters = 200;

  const [message, setMessage] = useState("");
  const [caracters, setCaracters] = useState(0);

  const handleCaracters = () => {
    setCaracters(message.length);
  }

  return (
    <>
      <label htmlFor="message">Mensagem</label>
      <S.TextArea
        name="message"
        placeholder="Escreva sua mensagem..."
        onChange={(e) => setMessage(e.target.value)}
        maxLength={maxCharacters}
        onKeyUp={handleCaracters}
      />
      <S.Counter>{`${caracters}/${maxCharacters}`}</S.Counter>
    </>
  );
}
