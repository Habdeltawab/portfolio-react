import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'; // Assuming you have a CSS file for custom styles

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <i className="fas fa-chevron-right"></i>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <i className="fas fa-chevron-left"></i>
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const testimonials = [
    {
      name: 'John Doe',
      jobTitle: 'CEO at Company X',
      text: 'This is an amazing service! Highly recommended.',
    },
    {
      name: 'Jane Smith',
      jobTitle: 'CTO at Company Y',
      text: 'The team was incredibly helpful and the product is top-notch.',
    },
    {
      name: 'Sam Wilson',
      jobTitle: 'Manager at Company Z',
      text: "I'm very satisfied with the results. Will definitely use again.",
    },
  ];

	return (
    <section id="testimonials" className="s-testimonials target-section" style={{ backgroundColor: '#171819' }}>
    <div className="testimonials">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
            <p className="job-title">{testimonial.jobTitle}</p>
          </div>
        ))}
      </Slider>
    </div>
  </section>
	);
};

export default Testimonials;
