import React from 'react';
import { Users, CheckCircle, Shield, FileSearch, BarChart3, Clock, BadgeCheck, AlertCircle, User } from 'lucide-react';

const LandlordDashboard = () => {
  const tenants = [
    { name: 'Sarah Johnson', property: 'Unit 4A', status: 'verified', score: 94, payment: 'On-time' },
    { name: 'Michael Chen', property: 'Unit 2B', status: 'verified', score: 88, payment: 'On-time' },
    { name: 'Emma Wilson', property: 'Unit 3C', status: 'pending', score: null, payment: null },
  ];

  return (
    <section 
      id="landlords"
      data-testid="landlord-dashboard-section"
      className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Horizontal Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-gray-100 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#0009B3]/3 to-transparent"></div>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left - Mockup */}
            <div data-testid="feature-dashboard-mockup">
              <div className="mockup-glow"></div>
              
              {/* Dashboard Mockup */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-100 shadow-xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_lease-trust/artifacts/tg4pvm2n_Shield%20Logo%20SVG%202.svg" 
                      alt="LeazeSure" 
                      className="h-6 w-auto"
                    />
                    <span className="font-heading font-medium text-sm text-[#000000]">Landlord Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0009B3] flex items-center justify-center">
                      <span className="text-white text-xs font-medium">JD</span>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <p className="font-body text-xs text-[#475569] mb-1">Active Tenants</p>
                    <p className="font-heading font-semibold text-xl text-[#000000]">12</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <p className="font-body text-xs text-[#475569] mb-1">Applications</p>
                    <p className="font-heading font-semibold text-xl text-[#0009B3]">5</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                    <p className="font-body text-xs text-[#475569] mb-1">Collection Rate</p>
                    <p className="font-heading font-semibold text-xl text-[#0BFFC9]">98%</p>
                  </div>
                </div>

                {/* Tenant List */}
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <span className="font-heading font-medium text-sm text-[#000000]">Recent Tenants</span>
                    <span className="font-body text-xs text-[#0009B3] cursor-pointer">View All</span>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {tenants.map((tenant, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0009B3]/10 to-[#0BFFC9]/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-[#0009B3]" />
                          </div>
                          <div>
                            <p className="font-heading font-medium text-sm text-[#000000]">{tenant.name}</p>
                            <p className="font-body text-xs text-[#475569]">{tenant.property}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {tenant.status === 'verified' ? (
                            <>
                              <div className="text-right">
                                <p className="font-heading font-medium text-sm text-[#000000]">{tenant.score}</p>
                                <p className="font-body text-xs text-[#475569]">Trust Score</p>
                              </div>
                              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50">
                                <BadgeCheck className="w-3 h-3 text-green-600" />
                                <span className="font-body text-xs text-green-700">Verified</span>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-50">
                              <AlertCircle className="w-3 h-3 text-yellow-600" />
                              <span className="font-body text-xs text-yellow-700">Pending</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0009B3] text-white font-heading font-medium text-sm hover:bg-[#0009B3]/90 transition-all">
                    <FileSearch className="w-4 h-4" />
                    Screen Applicant
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-[#000000] font-heading font-medium text-sm hover:bg-gray-200 transition-all">
                    <BarChart3 className="w-4 h-4" />
                    View Reports
                  </button>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div data-testid="feature-dashboard-text">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0009B3]/5 border border-[#0009B3]/10 mb-6">
                <Users className="w-4 h-4 text-[#0009B3]" />
                <span className="font-body text-sm text-[#0009B3] font-medium">For Landlords</span>
              </div>
              
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#000000] tracking-tight mb-4">
                Pre-screen and manage tenants <span className="gradient-text">in one place</span>
              </h2>
              
              <p className="font-body text-lg text-[#475569] leading-relaxed mb-8">
                Stop wasting time on manual background checks. Access verified Rental Passports, report rent to credit bureaus, and manage all your tenants from a single dashboard.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { 
                    icon: Shield, 
                    title: 'Instant Pre-Screening', 
                    desc: 'Access verified tenant profiles with identity, income, and rental history' 
                  },
                  { 
                    icon: BarChart3, 
                    title: 'Report Rent Payments', 
                    desc: 'Report to Equifax and incentivize on-time payments' 
                  },
                  { 
                    icon: Clock, 
                    title: 'Save Hours Weekly', 
                    desc: 'Automate verification and reduce screening time by 80%' 
                  },
                  { 
                    icon: Users, 
                    title: 'Centralized Management', 
                    desc: 'Track all tenants, payments, and documents in one place' 
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#0009B3]/10 to-[#0BFFC9]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#0009B3]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-[#000000] mb-1">{item.title}</h4>
                      <p className="font-body text-sm text-[#475569]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandlordDashboard;
