import React from 'react';
import { FileX, Clock, AlertTriangle, UserX, ArrowRight, Shield } from 'lucide-react';

const ProblemSolution = () => {
  const tenantProblems = [
    {
      icon: FileX,
      title: 'Repetitive Applications',
      description: 'Filling out the same forms, uploading documents again and again for every rental.'
    },
    {
      icon: AlertTriangle,
      title: 'No Credit Building',
      description: 'Your largest monthly payment does nothing to improve your credit score.'
    },
    {
      icon: Clock,
      title: 'Slow Approvals',
      description: 'Waiting days or weeks for landlords to verify your background and income.'
    }
  ];

  const landlordProblems = [
    {
      icon: UserX,
      title: 'Risky Tenants',
      description: 'No reliable way to verify tenant history and trustworthiness upfront.'
    },
    {
      icon: Clock,
      title: 'Manual Screening',
      description: 'Hours spent on background checks, reference calls, and document verification.'
    },
    {
      icon: FileX,
      title: 'Scattered Management',
      description: 'Tracking payments and tenant info across spreadsheets and emails.'
    }
  ];

  return (
    <section 
      id="features"
      data-testid="problem-solution-section"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0009B3_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="font-body text-sm text-red-600 font-medium">The Renting Problem</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#000000] tracking-tight mb-4">
            Renting today is broken
          </h2>
          <p className="font-body text-lg text-[#475569] max-w-2xl mx-auto">
            Both tenants and landlords face the same issues: too much friction, too little trust, and wasted time.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Tenant Problems */}
          <div 
            data-testid="problem-tenant-card"
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0009B3]/10 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#000000]">For Tenants</h3>
            </div>
            <div className="space-y-6">
              {tenantProblems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <problem.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-[#000000] mb-1">{problem.title}</h4>
                    <p className="font-body text-sm text-[#475569] leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Landlord Problems */}
          <div 
            data-testid="problem-landlord-card"
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0009B3]/10 flex items-center justify-center">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#000000]">For Landlords</h3>
            </div>
            <div className="space-y-6">
              {landlordProblems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <problem.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-[#000000] mb-1">{problem.title}</h4>
                    <p className="font-body text-sm text-[#475569] leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="relative">
          {/* Connector */}
          <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-px h-10 bg-gradient-to-b from-gray-200 to-[#0009B3]"></div>
            <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center shadow-lg">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-gradient-to-br from-[#0009B3] to-[#0009B3]/90 rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0BFFC9]/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0BFFC9]/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Shield className="w-4 h-4 text-[#0BFFC9]" />
                <span className="font-body text-sm text-white font-medium">The Solution</span>
              </div>
              
              <h3 className="font-heading font-semibold text-3xl sm:text-4xl text-white mb-4">
                One platform. Complete trust.
              </h3>
              <p className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-8">
                LeazeSure creates a verified trust layer between tenants and landlords. Build your Rental Passport once, use it everywhere, and let your rent payments build your credit.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  'Reusable Rental Passport',
                  'Equifax Rent Reporting',
                  'Instant Pre-Screening',
                  'Tenant Management'
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#0BFFC9]"></div>
                    <span className="font-body text-sm text-white">{feature}</span>
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

export default ProblemSolution;
