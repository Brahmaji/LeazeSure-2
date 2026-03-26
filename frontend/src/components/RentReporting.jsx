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
                    <div className="w-6 h-6 rounded bg-[#0009B3] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">E</span>
                    </div>
                    <span className="font-body text-xs text-[#475569]">Reported to Equifax</span>
                  </div>
                </div>

                {/* Credit Score Display */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <svg className="w-48 h-24" viewBox="0 0 200 100">
                      <path
                        d="M20 90 Q100 20 180 90"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      <path
                        d="M20 90 Q100 20 180 90"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray="240"
                        strokeDashoffset="60"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0009B3" />
                          <stop offset="100%" stopColor="#0BFFC9" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center pt-4">
                      <div className="text-center">
                        <p className="font-heading font-bold text-4xl text-[#000000]">742</p>
                        <p className="font-body text-xs text-[#475569]">Credit Score</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <TrendingUp className="w-4 h-4 text-[#0BFFC9]" />
                    <span className="font-body text-sm text-[#0009B3] font-medium">+45 pts in 6 months</span>
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
                  'Average credit score increase of 40+ points',
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
                <div className="w-10 h-10 rounded-lg bg-[#0009B3] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <p className="font-heading font-medium text-sm text-[#000000]">Official Equifax Partner</p>
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
