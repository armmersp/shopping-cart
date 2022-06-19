import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import List from "../../components/List/List";
import RecommendSeller from "../../data/recommendProducts";
import BestSellerProducts from "../../data/bestSellerProducts";
import ShareContent from "../../images/icon/sharecontent.svg";

export default function ProductDetail({ handleAddToCart }) {
  let { id } = useParams();
  //merge array
  const product = [...BestSellerProducts, ...RecommendSeller].find(
    (product) => product.id === id
  );
  return (
    <>
      <div className="container-product-content">
        <img src={product.img} alt="Harry" className="product-picture" />
        <div>
          <div className="product-detail-name">{product.title}</div>
          <div className="product-detail">ผู้เขียน: {product.author}</div>
          <div className="product-detail">สำนักพิมพ์: {product.publisher}</div>
          <div className="product-detail">หมวดหมู่: {product.bookType}</div>
          <div className="product-detail">ประเภทของสินค้า: {product.type}</div>
          <div className="product-detail">
            บาร์โค้ด: {product.barcode * 100000000000000000}
          </div>
          <div className="price-in-row">
            <div className="price-text">ราคา </div>
            <div className="price-thb">THB{product.price.toFixed(2)} </div>
            <div className="price-thb-discount">
              THB{product.discountPrice.toFixed(2)}
            </div>
          </div>
          <div className="input-number">
            <TextField
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <div className="add-button">Add</div>
            <div className="wishlist-button">
              <FavoriteIcon className="heart-icon-style" />
              Wishlist
            </div>
          </div>
          <div className="product-detail">
            แชร์:
            <img src={ShareContent}></img>
          </div>
        </div>
      </div>
      <div className="row-sub-product-picture">
        <img src={product.img} alt="Harry" className="sub-product-picture" />
        <img
          src={product.img}
          alt="Harry"
          className="behind-sub-product-picture"
        />
      </div>
      <div className="row-about-product-detail">
        <div className="about-product-detail">เกี่ยวกับสินค้า</div>
        <div className="about-product-sub-detail">รายละเอียด</div>
      </div>
      <div className="detail-border-line"></div>
      <div className="topic-book-detail">รายละเอียด: {product.title}</div>
      <div className="book-detail">
        เรื่องราวเริ่มต้นว่าด้วยเด็กชาย แฮร์รี่ พ็อตเตอร์
        ที่อาศัยอยู่กับครอบครัวเดอร์สลีย์
        ซึ่งเลี้ยงดูเขาราวกับไม่มีตัวตนและใช้งานหนักสารพัด
        ด้วยเหตุผลที่ว่าแฮร์รี่
        มีบางอย่างที่ทำให้พวกเขาไม่อยากยุ่งและมองว่าเขาเป็นตัวประหลาดนั่นเอง
        วันหนึ่งเขาได้ไปเที่ยวสวนสัตว์กับครอบครัว แล้วสามารถคุยกับงูได้
        ก่อนที่จะเกิดเรื่องแปลกๆตามมาเมื่อ ดัดลีย์ ลูกพี่ลูกน้อง
        เห็นงูตื่นขึ้นมา ก่อนที่กระจกสวนสัตว์หายไปอย่างงงๆ จนดัดลีย์ตกลงไป ซึ่ง
        เมื่อกลับบ้าน ลุงเวอร์นอนและป้าเพ็ตทูเนีย จึงขังเขาไว้ในห้องใต้บันได
        โดยไม่ทราบสาเหตุว่าอะไร
      </div>
      <div className="book-detail">
        วันหนึ่ง แฮรี่ ได้รับจดหมายฉบับหนึ่งซึ่งจ่าหน้าซองถึงเขา
        แต่ไม่ได้บอกว่ามาจากใคร แต่ยังไม่ทันได้อ่าน ครอบครัวเดอร์สลีย์ก็ยึดไป
        แต่เมื่อได้เห็นจดหมาย
        พวกเขารู้แล้วว่าเรื่องในอดีตที่เกี่ยวข้องกับแฮรี่ได้คืบคลานเข้ามา
        ทำให้ลุงเวอร์นอน ทำทุกวิถีทางที่ไม่ให้จดหมายส่งมาที่นี่ได้
        แต่ชายร่างยักษ์ปรากฎตัวขึ้น และแนะนำตัวว่า เขาคือ รูเบอัส แฮกริด
        เขาเป็นคนดูแลโรงเรียนฮอกวอตส์
        ซึ่งได้บอกเล่าเรื่องราวในอดีตให้แฮร์รี่ฟังว่า จริงๆแล้ว แฮร์รี่
        คือเด็กที่เกิดจากครอบครัวพ่อมดแม่มด ก่อนจะนำจดหมายมาให้เขา
        ซึ่งรายละเอียดในจดหมายคือ “แฮร์รี่
        ได้เข้าไปเรียนในโรงเรียนเวทมนต์ฮอกวอตส์”
      </div>
      <div className="product-topic-wrapper">
        <List
          title="สินค้าที่เกี่ยวข้อง"
          productList={RecommendSeller}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
}
