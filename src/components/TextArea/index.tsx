import { useState } from "react";

import * as S from "./styles";

interface TextAreaProps {
  setVariableValue: (value: string) => void;
  message: string;
  className?: string;
}

export function TextArea({ setVariableValue,message,className }: TextAreaProps) {
    const maxCharacters = 200;

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
        onChange={(e) => setVariableValue(e.target.value)}
        maxLength={maxCharacters}
        onKeyUp={handleCaracters}
        className={className}
      />
      <S.Counter>{`${caracters}/${maxCharacters}`}</S.Counter>
    </>
  );
}
