import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from './ui/button';

const FinalCTA = () => {
  return (
    <section 
      data-testid="final-cta-section"
      className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          data-testid="final-cta-container"
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 gradient-brand"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0BFFC9]/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Shield className="w-4 h-4 text-[#0BFFC9]" />
              <span className="font-body text-sm text-white font-medium">Join Early Access</span>
            </div>

            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              Ready to build trust in your rental journey?
            </h2>

            <p className="font-body text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of tenants building credit and landlords renting with confidence. Get early access to LeazeSure today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                data-testid="final-cta-button"
                className="btn-primary bg-white text-[#0009B3] hover:bg-white/90 hover:shadow-xl transition-all rounded-full px-8 py-6 font-heading font-medium text-base"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all rounded-full px-8 py-6 font-heading font-medium text-base"
              >
                Schedule a Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {['Bank-Level Security', 'Equifax Partner', 'GDPR Compliant'].map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0BFFC9]"></div>
                  <span className="font-body text-sm text-white/90">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
