import * as S from "../styles";
import { brands } from "../../../data/brands";

export function Eucatex() {
  return (
    <div className="eucatex">
      {brands.eucatex.map((product) => {
        return (
          <S.ProductBox key={product.id}>
            <img src={product.image} alt={product.name} />
          </S.ProductBox>
        );
      })}
    </div>
  );
}
