import * as C from "./styles";
import ReactPaginate from 'react-paginate';
import GlobalStyles from "../../styles/GlobalStyles";
import produto01 from "../../assets/Produtos/prod01.jpeg";
import produto02 from "../../assets/Produtos/prod02.jpeg";
import produto03 from "../../assets/Produtos/prod03.jpeg";
import produto04 from "../../assets/Produtos/prod04.jpeg";
import produto05 from "../../assets/Produtos/prod05.jpeg";
import produto06 from "../../assets/Produtos/prod06.jpeg";
import produto07 from "../../assets/Produtos/prod07.jpeg";
import produto08 from "../../assets/Produtos/prod08.jpeg";
import produto09 from "../../assets/Produtos/prod09.jpg";
import produto10 from "../../assets/Produtos/prod10.jpg";
import produto11 from "../../assets/Produtos/prod11.jpg";
import produto12 from "../../assets/Produtos/prod12.jpg";
import { Header } from "../../components/Header";
import { getData } from '../../requests';

function Products() {
  return (
    <C.Container>
      <Header />
      <div className="prductsContent">
        <div id="line">
          <C.Bar>
            <h2>PRODUTOS</h2>
            <button onClick={getData}>Click me</button>
          </C.Bar>
        </div>
        <div className="content">
          <C.ProductBox> <img src={produto01} alt="Produto01" /> PRODUTO 01</C.ProductBox>
          <C.ProductBox> <img src={produto02} alt="Produto02" /> PRODUTO 02</C.ProductBox>
          <C.ProductBox> <img src={produto03} alt="Produto03" /> PRODUTO 03</C.ProductBox>
          <C.ProductBox> <img src={produto04} alt="Produto04" /> PRODUTO 04</C.ProductBox>
          <C.ProductBox> <img src={produto05} alt="Produto05" /> PRODUTO 05</C.ProductBox>
          <C.ProductBox> <img src={produto06} alt="Produto06" /> PRODUTO 06</C.ProductBox>
          <C.ProductBox> <img src={produto07} alt="Produto07" /> PRODUTO 07</C.ProductBox>
          <C.ProductBox> <img src={produto08} alt="Produto08" /> PRODUTO 08</C.ProductBox>
          <C.ProductBox> <img src={produto09} alt="Produto09" /> PRODUTO 09</C.ProductBox>
          <C.ProductBox> <img src={produto10} alt="Produto10" /> PRODUTO 10</C.ProductBox>
          <C.ProductBox> <img src={produto11} alt="Produto11" /> PRODUTO 11</C.ProductBox>
          <C.ProductBox> <img src={produto12} alt="Produto12" /> PRODUTO 12</C.ProductBox>
          <C.ProductBox> <img src={produto01} alt="Produto13" /> PRODUTO 13</C.ProductBox>
          <C.ProductBox> <img src={produto02} alt="Produto14" /> PRODUTO 14</C.ProductBox>
          <C.ProductBox> <img src={produto03} alt="Produto15" /> PRODUTO 15</C.ProductBox>
          <C.ProductBox> <img src={produto04} alt="Produto16" /> PRODUTO 16</C.ProductBox>
          <C.ProductBox> <img src={produto04} alt="Produto17" /> PRODUTO 17</C.ProductBox>
          <C.ProductBox> <img src={produto06} alt="Produto18" /> PRODUTO 18</C.ProductBox>
          <C.ProductBox> <img src={produto07} alt="Produto19" /> PRODUTO 19</C.ProductBox>
          <C.ProductBox> <img src={produto08} alt="Produto20" /> PRODUTO 20</C.ProductBox>
        </div>
        <ReactPaginate breakLabel="..." nextLabel="NEXT >" previousLabel="< PREVIOUS" pageCount={5} className="paginate"/>
      </div>
      <GlobalStyles />
    </C.Container>
  );
}

export default Products;
