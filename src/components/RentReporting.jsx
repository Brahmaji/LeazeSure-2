import React from 'react';
import { TrendingUp, CheckCircle, CreditCard, Plane, RefreshCcw, Star, Calendar } from 'lucide-react';

const RentReporting = () => {
  const benefitCards = [
    {
      id: 'newcomer',
      testId: 'reporting-card-newcomer',
      icon: Plane,
      title: 'Newcomers',
      subtitle: 'New to the country?',
      description: 'Start building your credit history from day one. Your rent payments establish your financial reputation.',
      gradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'rebuilding',
      testId: 'reporting-card-rebuilding',
      icon: RefreshCcw,
      title: 'Rebuilding Credit',
      subtitle: 'Getting back on track?',
      description: 'Use your consistent rent payments to demonstrate financial responsibility and rebuild your score.',
      gradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'good',
      testId: 'reporting-card-good',
      icon: Star,
      title: 'Good Credit',
      subtitle: 'Already doing great?',
      description: 'Boost your score even higher. Adding rent payments diversifies your credit mix and shows reliability.',
      gradient: 'from-emerald-50 to-teal-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    }
  ];

  return (
    <section 
      data-testid="rent-reporting-section"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Horizontal Card */}
        <div 
          data-testid="feature-reporting-main"
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-soft border border-gray-100 relative overflow-hidden mb-12"
        >
          {/* Background accent */}
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#0BFFC9]/5 to-transparent"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left - Mockup */}
            <div className="order-2 lg:order-1">
              <div className="mockup-glow"></div>
              
              {/* Credit Score Dashboard */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-heading font-medium text-sm text-[#000000]">Credit Impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://www.equifax.com/favicon.ico" alt="Equifax" className="w-6 h-6 rounded object-contain" />
                    <span className="font-body text-xs text-[#475569]">Reported to Equifax</span>
                  </div>
                </div>

                {/* Credit Score Display */}
                <div className="text-center mb-6">
                  {/* Gauge SVG — semicircle, center (100,105), r=75 */}
                  {/* Arc length = π×75 = 235.6  |  742 on 300–850 = 80.4%  |  dashoffset = 235.6×(1−0.804) ≈ 46 */}
                  <svg viewBox="0 0 200 115" className="w-56 mx-auto">
                    <defs>
                      <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0009B3" />
                        <stop offset="100%" stopColor="#0BFFC9" />
                      </linearGradient>
                    </defs>
                    {/* Background track */}
                    <path d="M 25 105 A 75 75 0 0 1 175 105" fill="none" stroke="#f0f0f0" strokeWidth="14" strokeLinecap="round" />
                    {/* Filled track */}
                    <path d="M 25 105 A 75 75 0 0 1 175 105" fill="none" stroke="url(#gaugeGrad)" strokeWidth="14" strokeLinecap="round"
                      strokeDasharray="236" strokeDashoffset="46" />
                    {/* Range labels */}
                    <text x="18" y="115" textAnchor="middle" fontSize="9" fill="#94a3b8">300</text>
                    <text x="182" y="115" textAnchor="middle" fontSize="9" fill="#94a3b8">850</text>
                    {/* Score */}
                    <text x="100" y="82" textAnchor="middle" fontSize="38" fontWeight="800" fill="#0f172a" letterSpacing="-1">742</text>
                    {/* Label */}
                    <text x="100" y="100" textAnchor="middle" fontSize="11" fill="#64748b" letterSpacing="0.5">Credit Score</text>
                  </svg>
                  {/* Rating badge + trend */}
                  <div className="flex items-center justify-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Very Good</span>
                    <span className="flex items-center gap-1 font-body text-sm text-[#0009B3] font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-[#0BFFC9]" /> +45 pts in 6 months
                    </span>
                  </div>
                </div>

                {/* Payment Timeline */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-medium text-sm text-[#000000]">Recent Payments</span>
                    <span className="font-body text-xs text-[#475569]">Last 6 months</span>
                  </div>
                  <div className="flex gap-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
                      <div key={month} className="flex-1 text-center">
                        <div className={`w-full aspect-square rounded-lg flex items-center justify-center ${
                          index < 6 ? 'bg-gradient-to-br from-[#0009B3] to-[#0BFFC9]' : 'bg-gray-200'
                        }`}>
                          <CheckCircle className={`w-4 h-4 ${index < 6 ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <p className="font-body text-xs text-[#475569] mt-1">{month}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0BFFC9]"></div>
                    <span className="font-body text-xs text-[#475569]">On-time payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-[#475569]" />
                    <span className="font-body text-xs text-[#475569]">Next report: July 1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0BFFC9]/10 border border-[#0BFFC9]/20 mb-6">
                <CreditCard className="w-4 h-4 text-[#0009B3]" />
                <span className="font-body text-sm text-[#0009B3] font-medium">Rent Reporting</span>
              </div>
              
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#000000] tracking-tight mb-4">
                Turn rent into <span className="gradient-text">credit history</span>
              </h2>
              
              <p className="font-body text-lg text-[#475569] leading-relaxed mb-6">
                Your largest monthly expense should work for you. We report your on-time rent payments directly to Equifax, helping you build credit with every payment.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Automatic monthly reporting to Equifax',
                  'Average credit score may increase of 40+ points',
                  'No impact on your credit for signing up',
                  'Track your progress in real-time',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0BFFC9] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#0009B3]" />
                    </div>
                    <span className="font-body text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Equifax Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100">
                <img src="https://www.equifax.com/favicon.ico" alt="Equifax" className="w-10 h-10 rounded-lg object-contain" />
                <div>
                  <p className="font-heading font-medium text-sm text-[#000000]">Reporting to Equifax</p>
                  <p className="font-body text-xs text-[#475569]">Data reported directly to credit bureaus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefitCards.map((card) => (
            <div 
              key={card.id}
              data-testid={card.testId}
              className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-soft feature-card`}
            >
              <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center mb-4`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#000000] mb-1">{card.title}</h3>
              <p className="font-body text-sm text-[#0009B3] font-medium mb-3">{card.subtitle}</p>
              <p className="font-body text-sm text-[#475569] leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentReporting;
