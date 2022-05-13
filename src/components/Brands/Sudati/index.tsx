import { brands } from "../../../data/brands";
import * as S from "../styles";

export function Sudati() {
  return (
    <div className="sudati">
      {brands.sudati.map((product) => {
        return (
          <S.ProductBox key={product.id}>
            <img src={product.image} alt={product.name} />
          </S.ProductBox>
        );
      })}
    </div>
  );
}
