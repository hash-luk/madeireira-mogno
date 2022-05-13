import { brands } from "../../../data/brands";
import * as S from "../styles";

export function PCB() {
  return (
    <div className="pcb">
      {brands.pcb.map((product) => {
        return (
          <S.ProductBox key={product.id}>
            <img src={product.image} alt={product.name} />
          </S.ProductBox>
        );
      })}
    </div>
  );
}
