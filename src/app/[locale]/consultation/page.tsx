import React from 'react';

const ConsultationPage = () => {
  return (
    <div className="consultation-container">
      <h1>Consultation Services</h1>
      <p>Get expert guidance to help you achieve your goals. Choose the package that suits you best.</p>
      
      <div className="pricing-plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>1-hour session</p>
          <p>$50/session</p>
          <button>Book Now</button>
        </div>
        <div className="plan">
          <h2>Pro Plan</h2>
          <p>5 sessions package</p>
          <p>$200</p>
          <button>Book Now</button>
        </div>
      </div>
      
      <p>All payments are secure and protected.</p>
    </div>
  );
};

export default ConsultationPage;
