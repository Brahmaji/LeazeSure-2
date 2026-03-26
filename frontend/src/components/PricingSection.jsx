import React from 'react';
import { Check, Sparkles, Building2, User } from 'lucide-react';
import { Button } from './ui/button';

const PricingSection = () => {
  const plans = [
    {
      id: 'tenant-free',
      testId: 'pricing-tier-free',
      name: 'Tenant Free',
      icon: User,
      price: '$0',
      period: 'forever',
      description: 'Get started with your Rental Passport',
      features: [
        'Create your Rental Passport',
        'Share with unlimited landlords',
        'Basic identity verification',
        'Rental history tracking',
        'Email support',
      ],
      cta: 'Get Started Free',
      highlight: false,
      gradient: false,
    },
    {
      id: 'tenant-premium',
      testId: 'pricing-tier-premium',
      name: 'Tenant Premium',
      icon: Sparkles,
      price: '$9.99',
      period: '/month',
      description: 'Build credit while you rent',
      badge: 'Early Access: 50% Off',
      features: [
        'Everything in Free, plus:',
        'Rent reporting to Equifax',
        'Credit score tracking',
        'Priority verification',
        'Enhanced trust score',
        'Premium support',
      ],
      cta: 'Get Early Access',
      highlight: true,
      gradient: true,
    },
    {
      id: 'landlord',
      testId: 'pricing-tier-landlord',
      name: 'Landlord Plan',
      icon: Building2,
      price: '$29',
      period: '/month',
      description: 'Manage tenants with confidence',
      badge: 'Per Property',
      features: [
        'Unlimited tenant screening',
        'Access Rental Passports',
        'Report rent to credit bureaus',
        'Tenant management dashboard',
        'Payment tracking',
        'Priority support',
      ],
      cta: 'Get Early Access',
      highlight: false,
      gradient: false,
    },
  ];

  return (
    <section 
      id="pricing"
      data-testid="pricing-section"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#0009B3]/5 to-[#0BFFC9]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-[#0BFFC9]/5 to-[#0009B3]/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0009B3]/5 border border-[#0009B3]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#0009B3]" />
            <span className="font-body text-sm text-[#0009B3] font-medium">Simple Pricing</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#000000] tracking-tight mb-4">
            Plans for everyone
          </h2>
          <p className="font-body text-lg text-[#475569] max-w-2xl mx-auto">
            Whether you're a tenant looking to build credit or a landlord managing properties, we have a plan for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              data-testid={plan.testId}
              className={`relative rounded-3xl p-8 ${
                plan.highlight 
                  ? 'pricing-highlight bg-white' 
                  : 'bg-white border border-gray-100 shadow-soft'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                    plan.highlight 
                      ? 'gradient-brand text-white' 
                      : 'bg-gray-100 text-[#475569]'
                  }`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                plan.highlight 
                  ? 'gradient-brand' 
                  : 'bg-gray-100'
              }`}>
                <plan.icon className={`w-6 h-6 ${plan.highlight ? 'text-white' : 'text-[#0009B3]'}`} />
              </div>

              {/* Plan Info */}
              <h3 className="font-heading font-semibold text-xl text-[#000000] mb-2">{plan.name}</h3>
              <p className="font-body text-sm text-[#475569] mb-4">{plan.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-heading font-bold text-4xl ${
                  plan.highlight ? 'gradient-text' : 'text-[#000000]'
                }`}>
                  {plan.price}
                </span>
                <span className="font-body text-[#475569]">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlight 
                        ? 'bg-[#0BFFC9]' 
                        : 'bg-gray-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-[#0009B3]' : 'text-[#475569]'}`} />
                    </div>
                    <span className="font-body text-sm text-[#475569]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full rounded-full py-6 font-heading font-medium ${
                  plan.highlight 
                    ? 'bg-[#0009B3] text-white hover:bg-[#0009B3]/90 hover:shadow-lg' 
                    : 'bg-gray-100 text-[#000000] hover:bg-gray-200'
                } transition-all`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <p className="text-center font-body text-sm text-[#475569] mt-10">
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
