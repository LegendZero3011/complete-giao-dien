import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


//import specicaltyImg from "../../../assets/specialty/-co-xuong-khop.jpg"

class HomeFooter extends Component {
    render() {
        
        return (
          <div className="home-footer">
          <p>&copy; 2021 Đồ án cuối kì. More information , please meet us ! .<a target='_blank' href='https://www.youtube.com/watch?v=UTtbOGRfG9E'> &#8594; Click here &#8592; </a></p>


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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
