import React from 'react';
import { Button } from './ui/button';
import { Shield, CheckCircle, FileCheck, User, BadgeCheck, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient blobs */}
        <div className="blob absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-[#0009B3]/20 to-[#0BFFC9]/20"></div>
        <div className="blob absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-[#0BFFC9]/15 to-[#0009B3]/15" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0BFFC9]/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0009B3]/5 border border-[#0009B3]/10 mb-6">
              <Shield className="w-4 h-4 text-[#0009B3]" />
              <span className="font-body text-sm text-[#0009B3] font-medium">The Trust Layer for Renting</span>
            </div>
            
            <h1
              data-testid="hero-headline"
              className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#000000] tracking-tight leading-[1.1] mb-6">

              Build trust before the{' '}
              <span className="gradient-text">rental decision</span>
            </h1>
            
            <p className="font-body text-lg sm:text-xl text-[#475569] leading-relaxed mb-8 max-w-xl">
              Create your reusable Rental Passport, build credit through rent reporting to Equifax, and help landlords pre-screen tenants faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                data-testid="hero-cta-primary"
                className="btn-primary bg-[#0009B3] text-white hover:bg-[#0009B3]/90 hover:shadow-xl transition-all rounded-full px-8 py-6 font-heading font-medium text-base">

                Get Early Access
              </Button>
              <Button
                data-testid="hero-cta-secondary"
                variant="outline"
                className="btn-secondary bg-white text-[#0009B3] border-2 border-gray-200 hover:border-[#0009B3] hover:bg-gray-50 transition-all rounded-full px-8 py-6 font-heading font-medium text-base"
                onClick={() => window.location.href = '/'}>

                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <CheckCircle className="w-4 h-4 text-[#0BFFC9]" />
                <span className="font-body !font-['Comic_Sans_MS']">Equifax </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <CheckCircle className="w-4 h-4 text-[#0BFFC9]" />
                <span className="font-body">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <CheckCircle className="w-4 h-4 text-[#0BFFC9]" />
                <span className="font-body">Free for Tenants</span>
              </div>
            </div>
          </div>

          {/* Right Content - HTML Mockup */}
          <div
            data-testid="hero-mockup-container"
            className="relative lg:pl-8">

            <div className="mockup-glow"></div>
            
            {/* Laptop Frame */}
            <div className="relative animate-float">
              <div className="bg-[#1a1a1a] rounded-t-xl p-2 pt-4">
                <div className="flex gap-2 px-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              {/* Dashboard Mockup */}
              <div className="bg-white rounded-b-xl shadow-2xl p-6 border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-medium text-[#000000] text-sm">Sarah Johnson</p>
                      <p className="font-body text-xs text-[#475569]">Rental Passport</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                    <BadgeCheck className="w-4 h-4 text-green-600" />
                    <span className="font-body text-xs text-green-700 font-medium">Verified</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#0009B3]/5 to-[#0BFFC9]/5 rounded-xl p-4">
                    <p className="font-body !text-sm mb-1 text-[#475569]">Score</p>
                    <p className="font-heading font-semibold text-xl text-[#0009B3]">92</p>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2">
                      <div className="w-[92%] h-full gradient-brand rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-body text-xs text-[#475569] mb-1">Rent History</p>
                    <p className="font-heading font-semibold text-xl text-[#000000]">4 yrs</p>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="font-body text-xs text-green-600">On-time</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-body text-xs text-[#475569] mb-1">Credit Impact</p>
                    <p className="font-heading font-semibold text-xl text-[#000000]">+45</p>
                    <p className="font-body text-xs mt-2 !text-[#0B60FF]">pts gained</p>
                  </div>
                </div>

                {/* Verifications */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-heading font-medium text-sm text-[#000000] mb-3">Verified Documents</p>
                  <div className="space-y-2">
                    {[
                    { name: 'Identity Verified', icon: FileCheck },
                    { name: 'Income Verified', icon: FileCheck },
                    { name: 'References Checked', icon: FileCheck }].
                    map((item, index) =>
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0BFFC9]/20 flex items-center justify-center">
                          <item.icon className="w-3 h-3 text-[#0009B3]" />
                        </div>
                        <span className="font-body text-sm text-[#475569]">{item.name}</span>
                        <CheckCircle className="w-4 h-4 text-[#0BFFC9] ml-auto" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 hidden lg:block animate-pulse-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0BFFC9]/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#0009B3]" />
                </div>
                <div>
                  <p className="font-heading font-medium text-sm text-[#000000]">Rent Reported</p>
                  <p className="font-body text-xs text-[#475569]">Equifax Updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;