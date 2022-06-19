import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentButton from "../../components/PaymentButton/PaymentButton";
import kerryLogo from "../../images/icon/kerry.svg";

const Payment = ({ cart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  let navigate = useNavigate();
  const routeToPayment = () => {
    let path = `/payment`;
    navigate(path);
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-topic">ชำระเงิน</div>
        <div className="text-align-left">ที่อยู่ในการจัดส่ง</div>
        <div className="grey-line"></div>
        <div className="cart-summary-container">
          <div className="cart-margin-content">
            <div class="content-payment">
              <div className="row-address-input">
                <div className="text-align-left">
                  ชื่อ
                  <div className="half-text-field-last"></div>
                </div>
                <div className="space-between-item">
                  <div className="text-align-left">นามสกุล</div>
                  <div className="half-text-field-last"></div>
                </div>
              </div>
              <div className="text-align-left">
                ประเทศ
                <div className="full-text-field-last"></div>
              </div>
              <div className="text-align-left">
                ที่อยู่{" "}
                <text className="red-text-style">
                  (บ้านเลขที่/หมู่บ้าน/หมู่ที่/ซอย/ถนน)
                </text>
                <div className="full-text-field-last"></div>
              </div>
              <div className="row-address-input">
                <div className="text-align-left">
                  แขวง/ตำบล
                  <div className="half-text-field-last"></div>
                  <div className="space-between-item"></div>
                </div>
                <div className="space-between-item">
                  <div className="text-align-left">
                    เขต/อำเภอ
                    <div className="half-text-field-last"></div>
                  </div>
                </div>
              </div>
              <div className="row-address-input">
                <div className="text-align-left">
                  จังหวัด
                  <div className="half-text-field-last"></div>
                </div>
                <div className="space-between-item">
                  <div className="text-align-left">รหัสไปรษณีย์</div>
                  <div className="half-text-field-last"></div>
                </div>
              </div>
              <div className="text-align-left">
                เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)
                <div className="full-text-field-last"></div>
              </div>
            </div>
            <div class="page-footer-payment">
              <div class="content-payment">
                <div className="text-align-left">เลือกขนส่ง</div>
                <div className="grey-line"></div>
                <div className="box-payment-selected">
                  <div className="flex">
                    <div className="circle"></div>
                    <div className="type-of-shipping-content-left">
                      Free Shipping
                    </div>
                    <div>THB0.00</div>
                  </div>
                </div>
                <div className="type-of-shipping-space">
                  <div className="box-payment">
                    <div className="flex">
                      <div className="circle"></div>
                      <div className="type-of-shipping-content-left">
                        <div>
                          <img src={kerryLogo} />
                        </div>
                      </div>
                      <div>THB40.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page-footer-payment">
                <div class="content-payment">
                  <div className="text-align-left">วิธีชำระเงิน</div>
                  <div className="grey-line"></div>
                  <div className="box-payment-selected">
                    <div className="flex">
                      <div className="circle"></div>
                      <div className="type-of-shipping-content-left">
                        <div className="flex-item-center">
                          <AttachMoneyIcon className="circle-icon" />
                          <div className="margin-left">Cash</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="type-of-shipping-space">
                    <div className="box-payment">
                      <div className="flex">
                        <div className="circle"></div>
                        <div className="type-of-shipping-content-left">
                          <div className="flex-item-center">
                            <CreditCardIcon />
                            <div className="margin-left">Credit / Debit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-summary-card">
            <div className="cart-summary-topic">สรุปคำสั่งซื้อ</div>
            <div className="cart-summary-flex">
              <div className="cart-summary-text">ยอดรวม</div>
              <div className="cart-summary-text">THB{price.toFixed(2)}</div>
            </div>
            <div className="cart-summary-flex">
              <div className="cart-summary-text">ค่าส่ง</div>
              <div className="cart-summary-text">THB1.00</div>
            </div>
            <div className="cart-summary-border-line"></div>
            <div className="cart-summary-flex">
              <div className="cart-summary-text">ยอดสุทธิ</div>
              <div className="cart-summary-text">{(price + 1).toFixed(2)}</div>
            </div>
            <div onClick={routeToPayment}>
              <PaymentButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
