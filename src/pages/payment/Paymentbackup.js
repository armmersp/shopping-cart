import { React, useState } from "react";
import "./Payment.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import Kerry_logo from "../../images/logo/Kerry_express.jpg";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentButton from "../../components/PaymentButton/PaymentButton";

export default function Payment() {
  const PaymenCart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
    return (
      <>
        <div className="payment-flex">
          <div>
            <div class="grid-payment">
              <header class="page-header-payment">
                <div class="content-payment">
                  <div className="text-align-left">
                    <div className="payment-topic-style">ชำระเงิน</div>
                  </div>
                  <div className="text-align-left">ที่อยู่ในการจัดส่ง</div>
                  <div className="grey-line"></div>
                </div>
              </header>
              <body class="page-rightbar-payment">
                <div className="payment-summary-card">
                  <div className="payment-summary-topic">สรุปคำสั่งซื้อ</div>
                  <div className="payment-summary-flex">
                    <div className="payment-summary-text">ยอดรวม</div>
                    <div className="payment-summary-text">THB{price}</div>
                  </div>
                  <div className="payment-summary-flex">
                    <div className="payment-summary-text">ค่าส่ง</div>
                    <div className="payment-summary-text">THB1.00</div>
                  </div>
                  <div className="payment-summary-border-line"></div>
                  <div className="payment-summary-flex">
                    <div className="payment-summary-text">ยอดสุทธิ</div>
                    <div className="payment-summary-text">THB{price}</div>
                  </div>
                  <PaymentButton />
                </div>
                <div class="content-right"></div>
              </body>
              <main class="page-main-payment">
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
              </main>
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
                          <img src="" className="kerry-style" />
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
                              Credit / Debit
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}
