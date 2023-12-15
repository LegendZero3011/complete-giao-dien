import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


//import specicaltyImg from "../../../assets/specialty/-co-xuong-khop.jpg"

class About extends Component {
    render() {
        
        return (
          <div className="section-share section-about">
            <div className='section-about-header'>
                Truyền thông nói về chúng tôi !!!

            </div>
            <div className='section-about-content'>
            <div className='content-left'>
            <iframe width="100%" height="420px" 
            src="https://www.youtube.com/embed/eJSD1CgHcKI" 
            title="Giới Thiệu Bệnh Viện Hoàn Mỹ Sài Gòn" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>
            <div className='content-right'>
            <p>
            Lấy cảm hứng từ nước Pháp, một trong những quốc gia có nền y tế phát triển, nơi mà các công trình kiến trúc y tế và con người luôn hòa quyện với nhau. Khi đến với Bệnh viện quốc tế Minh Anh, quý khách sẽ luôn cảm được sự gần gũi như chính ngôi nhà của mình qua phong cách kiến trúc, văn hóa thân thiện và sự chăm sóc ân cần. Bên cạnh cơ sở vật chất khang trang, tiện nghi cao cấp, trang thiết bị y tế hiện đại, không gian thông thoáng, giúp bệnh nhân được điều trị trong một môi trường trong sạch và hiệu quả, là đội ngũ bác sĩ giỏi chuyên môn và giàu kinh nghiệm, luôn đặt tiêu chí chất lượng thăm khám, điều trị và chăm sóc bệnh nhân lên hàng đầu.
            </p>
            </div>
            </div>
      </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };

};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
