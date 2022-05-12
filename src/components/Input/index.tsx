import * as S from './styles';

interface InputProps {
    id?: string;
    name: string;
    type?: string;
    placeHolder: string;
    className?: string;
    setVariableValue: (value: string) => void;
}

export function Input({name, placeHolder, setVariableValue,className}: InputProps) {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <S.Input name={name} placeholder={placeHolder} onChange={(e) => setVariableValue(e.target.value)} className={className}/>
        </>
    )
}