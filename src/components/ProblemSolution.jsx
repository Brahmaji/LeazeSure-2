import React, { useState } from 'react';
import {
  FileX,
  Clock,
  AlertTriangle,
  UserX,
  ArrowRight,
  Shield,
  Plane,
  TrendingUp,
  BadgeCheck,
  Home,
  Building2,
  UsersRound,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const tenantPersonas = [
  {
    id: 'newcomers',
    label: 'Newcomers',
    shortLabel: 'New',
    description: 'New to the area or renting for the first time.',
    icon: Plane,
    accent: 'from-sky-500/15 to-blue-600/5',
    items: [
      {
        icon: FileX,
        title: 'No local rental history',
        description:
          'Landlords can’t see your story—so you re-prove yourself on every single application.',
      },
      {
        icon: Clock,
        title: 'Longer vetting cycles',
        description:
          'Without a portable profile, every landlord starts from zero—delays move-in dates.',
      },
      {
        icon: AlertTriangle,
        title: 'Higher perceived risk',
        description:
          'Thin files get lumped together—even when your income and references are solid.',
      },
    ],
  },
  {
    id: 'rebuilding',
    label: 'Rebuilding credit',
    shortLabel: 'Rebuild',
    description: 'Improving your score and proving reliability over time.',
    icon: TrendingUp,
    accent: 'from-violet-500/15 to-purple-600/5',
    items: [
      {
        icon: AlertTriangle,
        title: 'Rent doesn’t count—yet',
        description:
          'Your biggest monthly payment rarely helps your credit, even when you pay on time.',
      },
      {
        icon: FileX,
        title: 'One number defines you',
        description:
          'A single score overshadows steady employment, savings, and rental track record.',
      },
      {
        icon: Clock,
        title: 'Fewer doors open',
        description:
          'You wait longer for replies and see fewer listings that feel within reach.',
      },
    ],
  },
  {
    id: 'good-credit',
    label: 'Good credit',
    shortLabel: 'Strong',
    description: 'Solid profile—you want speed and recognition.',
    icon: BadgeCheck,
    accent: 'from-emerald-500/15 to-teal-600/5',
    items: [
      {
        icon: Clock,
        title: 'Still stuck in the queue',
        description:
          'Great credit doesn’t skip the same document loops and back-and-forth every time.',
      },
      {
        icon: FileX,
        title: 'No reusable proof',
        description:
          'You rebuild the same “package” for each landlord instead of verifying once.',
      },
      {
        icon: AlertTriangle,
        title: 'On-time rent is invisible',
        description:
          'You don’t get extra signal for years of reliable payments—just another application.',
      },
    ],
  },
];

const landlordPersonas = [
  {
    id: 'independent',
    label: 'Independent',
    shortLabel: 'Solo',
    description: 'One or a few units—you wear every hat.',
    icon: Home,
    accent: 'from-amber-500/12 to-orange-600/5',
    items: [
      {
        icon: UserX,
        title: 'High-stakes decisions',
        description:
          'A single vacancy or bad fit hits cash flow immediately—there’s little margin for error.',
      },
      {
        icon: Clock,
        title: 'Screening eats your week',
        description:
          'References, documents, and follow-ups pull you away from maintenance and tenants.',
      },
      {
        icon: FileX,
        title: 'Records live everywhere',
        description:
          'Leases, IDs, and payment notes scattered across inbox, drives, and paper folders.',
      },
    ],
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    shortLabel: 'Scale',
    description: 'Multiple properties—consistency matters.',
    icon: Building2,
    accent: 'from-cyan-500/12 to-blue-600/5',
    items: [
      {
        icon: Clock,
        title: 'Volume breaks the process',
        description:
          'What worked for two doors collapses when applications pile up across addresses.',
      },
      {
        icon: AlertTriangle,
        title: 'Inconsistent standards',
        description:
          'Different criteria per building creates risk, disputes, and uneven tenant quality.',
      },
      {
        icon: FileX,
        title: 'No single source of truth',
        description:
          'Teams re-verify the same facts because nothing is shared or timestamped centrally.',
      },
    ],
  },
  {
    id: 'managers',
    label: 'Property managers',
    shortLabel: 'PM',
    description: 'Managing for owners—trust is the product.',
    icon: UsersRound,
    accent: 'from-indigo-500/12 to-indigo-700/5',
    items: [
      {
        icon: UserX,
        title: 'Reputation on the line',
        description:
          'Owners expect institutional-grade diligence; one miss erodes confidence fast.',
      },
      {
        icon: FileX,
        title: 'Weak audit trails',
        description:
          'Hard to show who verified what, when—especially across staff and vendors.',
      },
      {
        icon: Clock,
        title: 'Communication overload',
        description:
          'Chasing documents between tenants, owners, and tools burns hours every week.',
      },
    ],
  },
];

function PersonaPicker({ personas, value, onChange, ariaLabel, idPrefix, panelId, variant = 'tenant' }) {
  const isLandlord = variant === 'landlord';
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex flex-col gap-1 rounded-2xl border border-gray-200/90 bg-white/80 p-1 shadow-sm sm:flex-row"
    >
      {personas.map((p) => {
        const selected = value === p.id;
        const Icon = p.icon;
        return (
          <button
            key={p.id}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${p.id}`}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(p.id)}
            className={cn(
              'flex flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all duration-200 sm:py-2',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              isLandlord
                ? 'focus-visible:ring-slate-700'
                : 'focus-visible:ring-[#0009B3]',
              selected
                ? isLandlord
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                  : 'bg-[#0009B3] text-white shadow-md shadow-[#0009B3]/25'
                : 'text-[#475569] hover:bg-gray-50 hover:text-[#0f172a]',
            )}
          >
            <span
              className={cn(
                'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                selected ? 'bg-white/15' : 'bg-gray-100',
              )}
            >
              <Icon
                className={cn(
                  'h-4 w-4',
                  selected
                    ? 'text-white'
                    : isLandlord
                      ? 'text-slate-700'
                      : 'text-[#0009B3]',
                )}
              />
            </span>
            <span className="min-w-0">
              <span className="font-heading block text-sm font-semibold leading-tight">
                <span className="sm:hidden">{p.shortLabel}</span>
                <span className="hidden sm:inline">{p.label}</span>
              </span>
              <span
                className={cn(
                  'font-body mt-0.5 block text-[11px] leading-snug line-clamp-2',
                  selected ? 'text-white/85' : 'text-[#64748b]',
                )}
              >
                {p.description}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function PersonaPanel({ persona, panelId, labelledBy, variant = 'tenant' }) {
  if (!persona) return null;
  const iconClass = variant === 'landlord' ? 'text-slate-800' : 'text-[#0009B3]';
  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={labelledBy}
      className="mt-6 min-h-[280px] md:min-h-[260px]"
    >
      <div
        className={cn(
          'rounded-2xl border border-gray-100 bg-gradient-to-br p-5 md:p-6',
          persona.accent,
        )}
      >
        <ul className="space-y-5">
          {persona.items.map((item, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                <item.icon className={cn('h-5 w-5', iconClass)} />
              </div>
              <div className="min-w-0 pt-0.5">
                <h4 className="font-heading text-[15px] font-semibold text-[#0f172a]">
                  {item.title}
                </h4>
                <p className="font-body mt-1 text-sm leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ProblemSolution = () => {
  const [tenantId, setTenantId] = useState(tenantPersonas[0].id);
  const [landlordId, setLandlordId] = useState(landlordPersonas[0].id);

  const tenant = tenantPersonas.find((p) => p.id === tenantId);
  const landlord = landlordPersonas.find((p) => p.id === landlordId);

  return (
    <section
      id="features"
      data-testid="problem-solution-section"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#0009B3_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <span className="font-body text-sm font-medium text-red-600">The renting problem</span>
          </div>
          <h2 className="font-heading mb-4 text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl lg:text-5xl">
            Renting today is broken
          </h2>
          <p className="font-body mx-auto max-w-2xl text-lg text-[#475569]">
            Different journeys, same friction. Pick your path—then see how LeazeSure removes the
            bottlenecks for both sides.
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div
            id="tenants"
            data-testid="problem-tenant-card"
            className="scroll-mt-24 rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50/90 to-white p-8 shadow-soft lg:p-10"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0009B3]/10">
                <span className="text-2xl" aria-hidden>
                  🏠
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#000000]">For tenants</h3>
                <p className="font-body text-sm text-[#64748b]">Choose the journey closest to you</p>
              </div>
            </div>

            <PersonaPicker
              idPrefix="tenant-personas"
              panelId="tenant-personas-panel"
              personas={tenantPersonas}
              value={tenantId}
              onChange={setTenantId}
              ariaLabel="Tenant journey"
              variant="tenant"
            />

            <PersonaPanel
              persona={tenant}
              panelId="tenant-personas-panel"
              labelledBy={`tenant-personas-tab-${tenantId}`}
              variant="tenant"
            />
          </div>

          <div
            id="landlords"
            data-testid="problem-landlord-card"
            className="scroll-mt-24 rounded-3xl border border-gray-100 bg-gradient-to-br from-slate-50/90 to-white p-8 shadow-soft lg:p-10"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/8">
                <span className="text-2xl" aria-hidden>
                  🔑
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#000000]">For landlords</h3>
                <p className="font-body text-sm text-[#64748b]">Tailored pains by how you operate</p>
              </div>
            </div>

            <PersonaPicker
              idPrefix="landlord-personas"
              panelId="landlord-personas-panel"
              personas={landlordPersonas}
              value={landlordId}
              onChange={setLandlordId}
              ariaLabel="Landlord segment"
              variant="landlord"
            />

            <PersonaPanel
              persona={landlord}
              panelId="landlord-personas-panel"
              labelledBy={`landlord-personas-tab-${landlordId}`}
              variant="landlord"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-[-2.5rem] flex -translate-x-1/2 transform flex-col items-center">
            <div className="h-10 w-px bg-gradient-to-b from-gray-200 to-[#0009B3]" />
            <div className="gradient-brand flex h-10 w-10 items-center justify-center rounded-full shadow-lg">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0009B3] to-[#0009B3]/90 p-10 text-center lg:p-14">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#0BFFC9]/20 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#0BFFC9]/10 blur-3xl filter" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <Shield className="h-4 w-4 text-[#0BFFC9]" />
                <span className="font-body text-sm font-medium text-white">The solution</span>
              </div>

              <h3 className="font-heading mb-4 text-3xl font-semibold text-white sm:text-4xl">
                One platform. Complete trust.
              </h3>
              <p className="font-body mx-auto mb-8 max-w-2xl text-lg text-white/80">
                LeazeSure creates a verified trust layer between tenants and landlords. Build your
                Rental Passport once, use it everywhere, and let your rent payments build your
                credit.
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                {[
                  'Reusable Rental Passport',
                  'Equifax Rent Reporting',
                  'Instant pre-screening',
                  'Tenant management',
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#0BFFC9]" />
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
