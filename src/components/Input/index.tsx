import * as S from './styles';

interface InputProps {
    id?: string;
    name: string;
    type?: string;
    placeHolder: string;
    className?: string;
}

export function Input({name, placeHolder, className}: InputProps) {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <S.Input name={name} placeholder={placeHolder}/>
        </>
    )
}