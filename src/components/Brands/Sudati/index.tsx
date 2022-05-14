import { brands } from "../../../data/brands";
import * as S from "./styles";

export function Sudati() {
  return (
    <S.Container className="sudati show">
      {brands.sudati.map((product) => {
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
