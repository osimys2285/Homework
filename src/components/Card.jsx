import React from 'react';
import './Card.css';

const plans = [
  {
    title: "1 Month Access",
    price: 49,
    period: "/month",
    features: ["Full Access to Resources", "Access to Blog", "Access to News"],
    hasChecks: false, // На первой карточке нет галочек
    buttonColor: "green",
    totalPrice: 294, // 49 * 6
    months: 6
  },
  {
    title: "1 Year Access",
    price: 67,
    period: "/month",
    features: ["Full Access to Resources", "Access to Blog", "Access to News"],
    hasChecks: true,
    isFeatured: true,
    buttonColor: "orange",
    totalPrice: 804, // 67 * 12
    months: 12
  },
  {
    title: "Lifetime Access",
    price: 89,
    period: "/month",
    features: ["Full Access to Resources", "Access to Blog", "Access to News"],
    hasChecks: true,
    buttonColor: "green",
    totalPrice: 534, // 89 * 6
    months: 6
  }
];

const Card = () => {
  return (
    <div className="pricing-wrapper">
      <h1 className="main-header">Get full accesses. Today</h1>
      
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}>
            <div className="card-content">
              <h3 className={`plan-name color-${plan.buttonColor === 'orange' ? 'green' : 'blue'}`}>
                {plan.title}
              </h3>
              
              <div className="price-display">
                <span className="dollar">$</span>
                <span className="price-num">{plan.price}</span>
                <span className="per-month">{plan.period}</span>
              </div>
              
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className={plan.hasChecks ? 'item-checked' : 'item-plain'}>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`buy-button ${plan.buttonColor}`}>
                {plan.isFeatured ? 'Buy now' : 'Buy Now'}
              </button>

              <p className="legal-text">
                On checkout you will be charged the total amount of ${plan.totalPrice} for the {plan.months} month package.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-info">
        <div className="info-title">
          <span className="icon-circle">i</span> Instant Access
        </div>
        <div className="info-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
          <a href="#" className="learn-more-link">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Card;