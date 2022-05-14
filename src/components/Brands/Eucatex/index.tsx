import * as S from "./styles";
import { brands } from "../../../data/brands";

export function Eucatex() {
  return (
    <S.Container className="eucatex">
      {brands.eucatex.map((product) => {
        return (
          <S.ProductBox key={product.id}>
            {product.name}
            <img src={product.image} alt={product.name} />
          </S.ProductBox>
        );
      })}
    </S.Container>
  );
}
