import React from "react";
import "./PaymentButton.css";
import LockIcon from "@mui/icons-material/Lock";
function PaymentButton() {
  return (
    <div className="payment-button-container">
      <div className="payment-button-text">
        <LockIcon className="payment-lock-icon" />
        <div>ชำระเงิน</div>
      </div>
    </div>
  );
}

export default PaymentButton;
