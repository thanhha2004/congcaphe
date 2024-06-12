// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="listSocial">
      <div className="container">
        <div className="row pad">
          <div className="col-6">
            <h6>KÊNH KẾT NỐI</h6>
            <div class="social text-left">
                          <div class="listSocial-c">
                                  <a target="_blank" rel="noopener" href="http://www.facebook.com/congcaphe">
                                  <img src="https://congcaphe.com/_next/static/images/img-social1-4fc4cd981cb1006080240cb7772942e5.png" alt="social_facebook" height={'30px'} />
                                  </a>
                                  <a target="_blank" rel="noopener" href="http://www.instagram.com/congcaphe">
                                  <img src="https://congcaphe.com/_next/static/images/img-social2-2cc32fbda7ce37c5de995496e2d5cd64.png" alt="social_instagram" height={'30px'}/>
                                  </a>
                                  <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCPdzE8o7_ExH7Box2WPSEzw">
                                  <img src="https://congcaphe.com/_next/static/images/img-social3-49ffe7d53999fb347519f610c61d6285.png" alt="social_youtube" height={'23px'}/>
                                  </a>
                                  </div>
                        <div className="review-footer">
                          <a href="http://online.gov.vn/Home/WebDetails/74952">
                        <img alt="" title="" src="https://s3.kstorage.vn/s3-wifi/css/logoSaleNoti.png"/>
                        </a>
                      </div>
                </div>
          </div>
          <div className="col-6">
            <div className="contact">
            <h6>LUÔN CẬP NHẬT</h6>
            <p>Về các tin tức đó đây, sản phẩm mới</p>
            <form id="myFormSub"><div class="input-group"><input type="email" class="form-control newsletter-email" name="email" id="email" size="13" placeholder="Email" required=""/><span class="input-group-btn"><button class="btn btn-default" type="submit" name="subscribe" id="mc-embedded-subscribe">Đăng Ký</button></span></div></form>
            <span>Chúng tôi tôn trọng quyền riêng tư của bạn</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row pad">
            <div className="col-12">
              <span>Công ty TNHH Cộng Cà Phê </span>
              <span>Mã số DN: 0106696845 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 21/11/2014</span>
              <span>Địa chỉ: Số 101 Hoàng Cầu, phường Ô Chợ Dừa, quận Đống Đa, Hà Nội - Số điện thoại: <a href="tel:02437339966" rel="nofollow">+84 243 733 9966</a> - Email: <a href="mailto:info@congcaphe.com" rel="nofollow">info@congcaphe.com</a></span>
              <span>©2017 - 2024 CÔNG TY TNHH <span class="txtCafeCong">Cộng CàPhê</span> Mọi quyền được bảo lưu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
