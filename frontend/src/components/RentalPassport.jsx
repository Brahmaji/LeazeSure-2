import React from 'react';
import { Shield, CheckCircle, FileText, User, BadgeCheck, Lock, Share2 } from 'lucide-react';

const RentalPassport = () => {
  return (
    <section 
      id="tenants"
      data-testid="rental-passport-section"
      className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Horizontal Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-gray-100 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0009B3]/3 to-transparent"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left - Text Content */}
            <div data-testid="feature-passport-text">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0009B3]/5 border border-[#0009B3]/10 mb-6">
                <Shield className="w-4 h-4 text-[#0009B3]" />
                <span className="font-body text-sm text-[#0009B3] font-medium">Rental Passport</span>
              </div>
              
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#000000] tracking-tight mb-4">
                One profile. <span className="gradient-text">Unlimited applications.</span>
              </h2>
              
              <p className="font-body text-lg text-[#475569] leading-relaxed mb-8">
                Create your verified Rental Passport once and share it with any landlord instantly. No more repetitive paperwork, no more waiting—just seamless, trusted applications.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: FileText, text: 'Verified identity, income, and rental history' },
                  { icon: Lock, text: 'Bank-level security for your sensitive data' },
                  { icon: Share2, text: 'Share with landlords in one click' },
                  { icon: BadgeCheck, text: 'Stand out as a pre-verified, trusted tenant' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0BFFC9]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#0009B3]" />
                    </div>
                    <span className="font-body text-[#475569]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Mockup */}
            <div 
              data-testid="feature-passport-mockup"
              className="relative"
            >
              <div className="mockup-glow"></div>
              
              {/* Passport Card Mockup */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-xl relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_lease-trust/artifacts/tg4pvm2n_Shield%20Logo%20SVG%202.svg" 
                      alt="LeazeSure" 
                      className="h-6 w-auto"
                    />
                    <span className="font-heading font-medium text-sm text-[#000000]">Rental Passport</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-50 border border-green-200">
                    <span className="font-body text-xs text-green-700 font-medium">Active</span>
                  </div>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[#000000]">Michael Chen</h4>
                    <p className="font-body text-sm text-[#475569]">Passport ID: LS-2024-8847</p>
                    <div className="flex items-center gap-2 mt-1">
                      <BadgeCheck className="w-4 h-4 text-[#0009B3]" />
                      <span className="font-body text-xs text-[#0009B3] font-medium">Identity Verified</span>
                    </div>
                  </div>
                </div>

                {/* Verification Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Income', value: 'Verified', status: true },
                    { label: 'Employment', value: 'Verified', status: true },
                    { label: 'Rental History', value: '3 Properties', status: true },
                    { label: 'References', value: '2 Verified', status: true },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-3">
                      <p className="font-body text-xs text-[#475569] mb-1">{item.label}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-medium text-sm text-[#000000]">{item.value}</span>
                        <CheckCircle className="w-4 h-4 text-[#0BFFC9]" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Score */}
                <div className="bg-gradient-to-r from-[#0009B3]/5 to-[#0BFFC9]/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-sm text-[#475569]">Trust Score</span>
                    <span className="font-heading font-semibold text-xl text-[#0009B3]">94/100</span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div className="w-[94%] h-full gradient-brand rounded-full progress-fill"></div>
                  </div>
                  <p className="font-body text-xs text-[#475569] mt-2">Excellent - Top 5% of applicants</p>
                </div>

                {/* Share Button */}
                <div className="mt-6 flex justify-center">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0009B3] text-white font-heading font-medium text-sm hover:bg-[#0009B3]/90 transition-all">
                    <Share2 className="w-4 h-4" />
                    Share Passport
                  </button>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-gray-100 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0BFFC9]/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#0009B3]" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#000000] font-medium">Background Clear</p>
                    <p className="font-body text-xs text-[#475569]">Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalPassport;
