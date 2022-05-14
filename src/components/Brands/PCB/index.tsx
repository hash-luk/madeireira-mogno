import { brands } from "../../../data/brands";
import * as S from "./styles";

export function PCB() {
  return (
    <S.Container className="pcb">
      {brands.pcb.map((product) => {
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
