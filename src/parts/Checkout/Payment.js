import React from "react";
import Fade from "react-reveal/Fade";

import InputText from "../../elements/form/inputText";
import InputFile from "../../elements/form/inputFile";

import LogoBCA from "../../assets/image/icons/icon-bankBCA.png";
import LogoMandiri from "../../assets/image/icons/icon-bankMandiri.png";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Tax: {tax}%</p>
              <p>Sub Total: Rp. {subTotal}</p>
              <p>Total: Rp. {grandTotal}</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={LogoBCA} alt="Logo BCA" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208032130</dd>
                    <dd>Build With Angga</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={LogoMandiri} alt="Logo Mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208032121</dd>
                    <dd>Build With Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Transfer Payment</label>
              <InputFile accept="image/*" id="proofPayment" name="proofPayment" value={data.proofPayment} onChange={props.onChange} />

              <label htmlFor="bankName">Name Of Bank</label>
              <InputText id="bankName" name="bankName" type="text" value={data.bankName} onChange={props.onChange} />

              <label htmlFor="bankHolder">Name Of Sender</label>
              <InputText id="bankHolder" name="bankHolder" type="text" value={data.bankHolder} onChange={props.onChange} />

              <label htmlFor="bankNumber">Rekening Number</label>
              <InputText id="bankNumber" name="bankNumber" type="text" value={data.bankNumber} onChange={props.onChange} />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
