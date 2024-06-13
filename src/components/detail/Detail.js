import React from "react";
import "./Detail.css";

const Detail = () => {
  return(
    <div className="productsWrap">
      <div className="container">
        <div className="row pad">
          <div className="col-12">
            <div className="product-detail">
              <div className="detail-img-product">
                <img src="https://cong-news.appwifi.com/wp-content/uploads/2024/04/Tr%C3%A0-g%E1%BB%ABng.png"  alt=""/>
              </div>
              <div className="description-product">
                <div class="titlePrd">TRÀ GỪNG</div>
                <p style={{fontSize: '18px'}}><strong><big>39,000 Đ</big></strong></p>
                <p>Những búp trà hơn 100 năm tuổi trên núi rừng Tây Bắc, được ướp Gừng tươi Việt Nam mang tới hương trà thơm dịu, vị ngọt thanh, tốt cho sức khỏe.</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="product-small">
              <img src="https://cong-news.appwifi.com/wp-content/uploads/2024/04/Tr%C3%A0-g%E1%BB%ABng.png" alt=""/>
            </div>
          </div>
          <div className="col-12">
            <div className="relatedPrd">
            <h4>Sản Phẩm Liên Quan</h4>
            <div className="row">
              <div className="col-4">
                <div className="product-euqal">
                  <div className="image-equal">
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2024/04/Tr%C3%A0-nh%C3%A0i.png" alt=""/>
                  </div>
                  <h2 class="itemTitle">TRÀ NHÀI</h2>
                  <span class="price">39,000 Đ</span>
                </div>
              </div>
              <div className="col-4">
                <div className="product-euqal">
                  <div className="image-equal">
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2024/04/Phe%CC%82-chanh.jpg" alt=""/>
                  </div>
                  <h2 class="itemTitle">PHÊ CHANH</h2>
                  <span class="price">45,000 Đ</span>
                </div>
              </div>
              <div className="col-4">
                <div className="product-euqal">
                  <div className="image-equal">
                      <img src="https://cong-news.appwifi.com/wp-content/uploads/2024/04/Tr%C3%A0-c%C3%BAc.png" alt=""/>
                  </div>
                  <h2 class="itemTitle">TRÀ CÚC</h2>
                  <span class="price">39,000 Đ</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail;