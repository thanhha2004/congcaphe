// src/components/HomePage.js
import React from "react";
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/menu');
};
const story = () => {
  navigate('/story');
};
 return (
    <div className="homepage">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2024/04/Banner-web-1-1-1.jpg")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    CỘNG CÀ PHÊ RA MẮT MÓN MỚI: ĐÓN HÈ TƯƠI - TỈNH
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Đồ uống mùa hè của Cộng Cà Phê năm nay là sự kết hợp tinh tế
                    giữa 2 phong cách: nhẹ nhàng - thơm mát từ bộ Trà Thảo mộc
                    và mạnh mẽ - tỉnh táo từ nhóm Cà Phê Trái cây nhiệt đới
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2019/02/IMG_5081.jpg")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">NHẬT KÍ: CÀ PHÊ ĐẬM ĐÀ LỊCH SỬ</h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Tôi muốn tìm chỗ trú thật nhanh nhưng không cho phép mình
                    cẩu thả với điểm đặt chân tới, bèn lên google gõ “Cà phê
                    Triệu Việt Vương”. Một loạt địa chỉ hiện ra nhưng ấn tượng
                    nhất vẫn là “Cộng Cà Phê”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2022/05/web-cover-4.png")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">Đừng Lười Lao Động</h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Mời bạn vào xem Bình Giữ Nhiệt và Ca Men đổi mới của Cộng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2024/03/IMG_0100.jpg")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    GIA ĐÌNH BAO CẤP: CỘNG - 6A NGÔ THỜI NHIỆM, Q3, TP.HCM ĐỢI
                    BẠN!
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Giữa Sài Gòn hối hả, một "ngôi nhà" xưa với khoảng sân quen
                    đầy bóng mát; bên trong là một mái ấm mang những kí ức gia
                    đình thân thương - đang chờ bạn khám phá.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2023/05/banner-web-01-3.png")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    BÌNH GIỮ NHIỆT HỒNG PHIÊN BẢN MỚI!
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Bình Giữ Nhiệt Hồng chính thức lên kệ. Mời bạn sắm!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2023/10/XHCN_Resize-02_01.jpg")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    XÃ HỘI - CHỦ NGHĨA - VIỆT NAM - ĐỘC LẬP - TỰ DO - HẠNH PHÚC
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Tiếp tục hành trình lan tỏa tinh thần yêu Việt Nam theo cách
                    của Cộng, Cộng Cà Phê ra mắt Bộ sản phẩm Cà phê phiên bản
                    hộp giấy hoàn toàn mới!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2023/10/1920x748-resize-1.jpg")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    XIN CHÀO CÀ PHÊ PHỞ - VIỆT NAM TA
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Lấy cảm hứng từ “Phở” - món ăn tiêu biểu cho nền ẩm thực
                    Việt Nam, Nhóm Cà Phê Phở mang hương thơm ấm áp của quế hồi.
                    Mời bạn thưởng thức!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2023/04/banner-web-gio%CC%9B%CC%81i-thie%CC%A3%CC%82u.jpg")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    CÀ PHÊ VINA - CÀ PHÊ TA, PHA KIỂU TÂY
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Nhóm Cà phê Vina - sử dụng hạt Robusta Việt Nam, ủ bằng phin
                    truyền thống, pha chế theo “kiểu Tây”, tạo nên những đồ uống
                    mang đậm tinh thần và văn hoá “kiểu Cộng”.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2023/05/MicrosoftTeams-image-6.png")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    TRÀ SHAN TUYẾT CỔ THỤ - HỘP GIẤY MỚI, TIỆN LỢI HƠN!
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Trà Cổ Thụ - phiên bản hộp giấy tiện lợi mới, rất thích hợp
                    để làm quà và sử dụng hàng ngày. Có bốn lựa chọn cho bạn
                    thoải mái mua sắm, mời bạn vào xem ngay!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="background-width"
              style={{
                backgroundImage: `url("https://cong-news.appwifi.com/wp-content/uploads/2021/07/C-slide.jpg")`,
              }}
            ></div>
            <div className="textslide">
              <div className="container">
                <div className="text-center">
                  <h6 class="wow fadeInUp">
                    BẠC XỈU C+: RA MẮT CÀ PHÊ HOÀ TAN LẤY CẢM HỨNG TỪ HƯƠNG VỊ
                    BÁN CHẠY NHẤT TẠI CỘNG
                  </h6>
                  <p class="wow fadeIn" data-wow-delay="0.5s">
                    Cà phê hoà tan vị Bạc xỉu tốt nhất bạn có thể tìm thấy trong
                    khu vực. Hãy để Cộng mang trải nghiệm "quán cà phê tại nhà"
                    đến gần hơn với bạn!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt-3">
        <div className="container">
          <div className="row pad">
            <div className="col-12">
              <div className="live-plus">
                <div className="live-plus-color" onClick={story}>câu chuyện cộng</div>
              </div>
            </div>
            <div className="col-6">
              <div className="bartender">
              <span class="txt style1 lineHeight wow fadeIn" data-wow-delay="0.3s"> pha chế </span>
              </div>
            </div>
            <div className="col-6">
              <div  className="menu" onClick={handleNavigate}>
              <span class="txt style1 lineHeight wow fadeIn" data-wow-delay="0.3s"> Thực đơn </span>
              </div>
            </div>
            <div className="col-12">
              <div className="news">
              <div class="txtLeft ">
                <div class="lineHeight">
                <h6 class="wow slideInLeft" data-wow-delay="0.3s" data-wow-duration="1s"><a href="http://congcaphe.com/posts/tin-tuc">tin tức nổi bật</a></h6>

                <p class="wow slideInRight" data-wow-delay="0.3s" data-wow-duration="1s">"Lao động hăng say, tình hay sẽ đến"</p>

                <p class="wow slideInRight" data-wow-delay="0.3s" data-wow-duration="1s">Cộng chúc bạn một ngày&nbsp;mới thật nhiều năng lượng để hoàn thành công việc thật tốt!</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="reviews">
              <div class="txtCenter ">
                <div class="lineHeight">
                <h6 class="wow slideInRight" data-wow-delay="0.3s" data-wow-duration="1s"><a href="http://congcaphe.com/career">tuyển dụng</a></h6>

                <p class="wow slideInLeft" data-wow-delay="0.3s" data-wow-duration="1s">Gia nhập gia đình Cộng ngay hôm nay.</p>

                <p class="wow slideInLeft" data-wow-delay="0.3s" data-wow-duration="1s">Đọc thông tin tại đây để biết thêm chi tiết.</p>

                <p class="wow slideInLeft" data-wow-delay="0.3s" data-wow-duration="1s">Cộng nhiệt liệt chào mừng.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pad row">
            <div className="col-3">
              <div className="col-items">
              <h6>Tin Tức</h6> 
              <div className="items-list">
                <a>
                Về Chúng Tôi
                </a>
              </div>
              </div>
            </div>
            <div className="col-3">
            <div className="col-items">
              <h6>Cửa hàng</h6> 
              <div className="items-list">
                <a>
                Danh Sách Cửa Hàng
                </a>
              </div>
              </div>
            </div>
            <div className="col-3">
            <div className="col-items">
              <h6>Đồ uống</h6> 
              <div className="items-list">
                <a>
                Hôm Nay Cộng Có
                </a>
              </div>
              </div>
            </div>
            <div className="col-3">
            <div className="col-items">
              <h6>Chính Sách</h6> 
              <div className="items-list">
                <a>
              Chính Sách Bảo Mật
                </a>
                <a>
                Điều Khoản Sử Dụng
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
