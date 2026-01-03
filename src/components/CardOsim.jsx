import React from 'react';
import './CardOsim.css';

const plans = [
  {
    title: "1 Month Access",
    price: 49,
    period: "/month",
    features: ["Full Access to Resources", "Access to Blog", "Access to News"],
    buttonClass: "button-g",
    totalPrice: 294,
    months: 6,
    cardClass: "carp"
  },
  {
    title: "1 Year Access",
    price: 67,
    period: "/month",
    features: ["Full Access to Resources", "Access to Blog", "Access to News"],
    buttonClass: "button", // Оранжевая кнопка
    totalPrice: 804,
    months: 12,
    cardClass: "card two",
    isFeatured: true 
  },
  {
    title: "Lifetime Access",
    price: 89,
    period: "/month",
    features: ["Full Access to Resources", "Access to Blog", "Access to News"],
    buttonClass: "button-g",
    totalPrice: 534,
    months: 6,
    cardClass: "cart three"
  }
];

const CardOsim = () => {
  return (
    <section className="Cards-section">
      <div className="card-container">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={plan.cardClass} 
            style={!plan.isFeatured ? { boxShadow: "0 0 25px rgba(0,0,0,0.1)" } : {}}
          >
            <div className="card-realitive" style={plan.isFeatured ? { bottom: "30px" } : {}}>
              <div className="For-mouth">
                <p style={{ color: plan.isFeatured ? "#2BCA8B" : "#183EB6" }}>
                  {plan.title}
                </p>

                <div className="moneys">
                  <span className="money">${plan.price}</span>
                  <span>{plan.period}</span>
                </div>
              </div>

              <nav className="good">
                {/* Используем features-one для первой карточки, как в вашем CSS */}
                <ul className={index === 0 ? "features-one" : "features"}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </nav>

              <button className={plan.buttonClass}>Buy now</button>

              <p className="ptag">
                On checkout you will be charged the total amount of ${plan.totalPrice} for the {plan.months} month package.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardOsim;