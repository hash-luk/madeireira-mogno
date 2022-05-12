import * as S from "./styles";

type ProductProps = {
  id?: number,
  name: string,
  imageURL: string,
  altText?: string
}

export const Product = (produto:ProductProps) => {
  return (
    <S.Container>
      <div className="image">
        <img src={produto.imageURL} alt={produto.altText} />
      </div>
      <div className="text">
        <p>{produto.name}</p>
      </div>
    </S.Container>
  );
};
