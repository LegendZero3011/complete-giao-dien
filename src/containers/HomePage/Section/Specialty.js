import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


//import specicaltyImg from "../../../assets/specialty/-co-xuong-khop.jpg"

class Specialty extends Component {
    render() {
        
        return (
          <div className="section-share section-medical-facility">
          <div className="section-container"> 
            <div className="section-header">
              <span className='title-section'> Chuyên khoa phổ biến </span>
              <button className='btn-section'> Xem thêm </button>
            </div>
            <div className="section-body">
            <Slider {...this.props.settings}>
<div className="specialty-customize">
  <div className="bg-image section-specialty"/>
  <div> Xương khớp 1</div>
</div> 
<div className="specialty-customize">
<div className="bg-image section-specialty"/>
  <div> Xương khớp 2</div>
</div >
<div className="specialty-customize">
<div className="bg-image section-specialty"/>
  <div> Xương khớp 3</div>
</div>
<div className="specialty-customize">
<div className="bg-image section-specialty"/>
  <div> Xương khớp 4</div>
</div>
<div className="specialty-customize">
<div className="bg-image section-specialty"/>
  <div> Xương khớp 5</div>
</div>
<div className="specialty-customize">
<div className="bg-image section-specialty"/>
  <div> Xương khớp 6</div>
</div>
              </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
