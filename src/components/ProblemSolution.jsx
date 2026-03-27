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
    /** Warm left accent — no blue gradient (kept separate from tenant column) */
    panelAccent: 'border-l-4 border-l-amber-600',
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
    panelAccent: 'border-l-4 border-l-orange-700',
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
    panelAccent: 'border-l-4 border-l-rose-700',
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
      className={cn(
        'grid grid-cols-3 gap-1.5 rounded-2xl border p-1.5 shadow-sm sm:gap-2',
        /* Desktop: stacked tabs — avoids cramming 3 rich tabs into half the viewport */
        'lg:grid lg:grid-cols-1 lg:gap-2 lg:p-2',
        isLandlord
          ? 'border-stone-300/80 bg-stone-100/65'
          : 'border-gray-200/90 bg-white/90',
      )}
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
              'flex min-h-[3.25rem] flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1.5 py-2.5 text-center transition-all duration-200',
              'lg:min-h-0 lg:w-full lg:flex-row lg:items-start lg:justify-start lg:gap-3 lg:px-4 lg:py-3.5 lg:text-left',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]',
              isLandlord
                ? 'focus-visible:ring-slate-700'
                : 'focus-visible:ring-[#0009B3]',
              selected
                ? isLandlord
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                  : 'bg-[#0009B3] text-white shadow-md shadow-[#0009B3]/25'
                : isLandlord
                  ? 'text-[#475569] hover:bg-stone-200/60 hover:text-[#0f172a]'
                  : 'text-[#475569] hover:bg-gray-50 hover:text-[#0f172a]',
            )}
          >
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg lg:h-9 lg:w-9',
                selected
                  ? 'bg-white/15'
                  : isLandlord
                    ? 'bg-stone-200/80'
                    : 'bg-gray-100',
              )}
            >
              <Icon
                className={cn(
                  'h-3.5 w-3.5 lg:h-4 lg:w-4',
                  selected
                    ? 'text-white'
                    : isLandlord
                      ? 'text-slate-700'
                      : 'text-[#0009B3]',
                )}
              />
            </span>
            <span className="min-w-0 flex-1 px-0.5 lg:px-0">
              <span className="font-heading block text-[11px] font-semibold leading-tight sm:text-xs lg:text-[0.9375rem]">
                <span className="lg:hidden">{p.shortLabel}</span>
                <span className="hidden lg:inline">{p.label}</span>
              </span>
              <span
                className={cn(
                  'font-body mt-0.5 hidden text-[11px] leading-snug lg:mt-1 lg:block lg:text-xs lg:leading-relaxed',
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

function PersonaPanel({ persona, panelId, labelledBy, variant = 'tenant', className }) {
  if (!persona) return null;
  const iconClass = variant === 'landlord' ? 'text-amber-900/80' : 'text-[#0009B3]';
  const isLandlord = variant === 'landlord';
  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={labelledBy}
      className={cn('mt-4 sm:mt-6 lg:mt-0 lg:flex lg:h-full lg:flex-col', className)}
    >
      <p
        id={`${panelId}-hint`}
        className="font-body mb-3 text-center text-xs leading-snug text-[#64748b] lg:hidden"
      >
        {persona.description}
      </p>
      <div
        className={cn(
          'rounded-2xl p-4 sm:p-5 lg:min-h-[280px] lg:flex-1 lg:p-6',
          isLandlord
            ? cn(
                'border-y border-r border-stone-200/90 bg-stone-50/95 shadow-sm ring-1 ring-stone-900/[0.06]',
                persona.panelAccent,
              )
            : cn(
                'border border-[#0009B3]/10 bg-gradient-to-br to-white/80',
                persona.accent,
              ),
        )}
      >
        <ul className="space-y-4 sm:space-y-5 lg:space-y-4">
          {persona.items.map((item, index) => (
            <li key={index} className="flex gap-3 sm:gap-4 lg:gap-4">
              <div
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm sm:h-10 sm:w-10',
                  isLandlord ? 'ring-1 ring-stone-200/90' : 'ring-1 ring-gray-100',
                )}
              >
                <item.icon className={cn('h-4 w-4 sm:h-5 sm:w-5', iconClass)} />
              </div>
              <div className="min-w-0 pt-0.5">
                <h4 className="font-heading text-sm font-semibold leading-snug text-[#0f172a] sm:text-[15px]">
                  {item.title}
                </h4>
                <p className="font-body mt-1 text-[13px] leading-relaxed text-[#475569] sm:text-sm">
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
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#0009B3_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14 md:mb-16 lg:mb-20">
          <div className="mb-4 inline-flex max-w-[calc(100vw-1.5rem)] items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-red-500 sm:h-4 sm:w-4" />
            <span className="font-body text-xs font-medium text-red-600 sm:text-sm">The renting problem</span>
          </div>
          <h2 className="font-heading mx-auto mb-3 max-w-4xl text-[1.625rem] font-semibold leading-[1.15] tracking-tight text-[#000000] sm:mb-4 sm:text-3xl sm:leading-tight md:text-4xl lg:mb-5 lg:text-5xl lg:leading-[1.1]">
            Renting today is broken
          </h2>
          <p className="font-body mx-auto max-w-2xl px-1 text-base leading-relaxed text-[#475569] sm:max-w-3xl sm:text-lg lg:text-xl lg:leading-relaxed">
            Different journeys, same friction. Pick your path—then see how LeazeSure removes the
            bottlenecks for both sides.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 sm:mb-16 sm:gap-8 md:mb-20 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div
            id="tenants"
            data-testid="problem-tenant-card"
            className="isolate scroll-mt-20 overflow-hidden rounded-2xl border border-gray-200/90 bg-gradient-to-br from-gray-50/95 to-white p-5 shadow-soft sm:scroll-mt-24 sm:rounded-3xl sm:p-7 md:p-8 lg:p-10"
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 sm:mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0009B3]/10">
                <span className="text-2xl" aria-hidden>
                  🏠
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-lg font-semibold text-[#000000] sm:text-xl">For tenants</h3>
                <p className="font-body text-xs text-[#64748b] sm:text-sm">Choose the journey closest to you</p>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-6 xl:gap-8">
              <div className="lg:col-span-5 xl:col-span-4">
                <PersonaPicker
                  idPrefix="tenant-personas"
                  panelId="tenant-personas-panel"
                  personas={tenantPersonas}
                  value={tenantId}
                  onChange={setTenantId}
                  ariaLabel="Tenant journey"
                  variant="tenant"
                />
              </div>
              <div className="lg:col-span-7 xl:col-span-8">
                <PersonaPanel
                  persona={tenant}
                  panelId="tenant-personas-panel"
                  labelledBy={`tenant-personas-tab-${tenantId}`}
                  variant="tenant"
                />
              </div>
            </div>
          </div>

          <div
            id="landlords"
            data-testid="problem-landlord-card"
            className="isolate scroll-mt-20 overflow-hidden rounded-2xl border border-stone-300/80 bg-gradient-to-b from-stone-100/70 via-stone-50/90 to-white p-5 shadow-soft sm:scroll-mt-24 sm:rounded-3xl sm:p-7 md:p-8 lg:p-10"
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 sm:mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-200/80 ring-1 ring-stone-300/60">
                <span className="text-2xl" aria-hidden>
                  🔑
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-lg font-semibold text-[#000000] sm:text-xl">For landlords</h3>
                <p className="font-body text-xs text-[#64748b] sm:text-sm">Tailored pains by how you operate</p>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-6 xl:gap-8">
              <div className="lg:col-span-5 xl:col-span-4">
                <PersonaPicker
                  idPrefix="landlord-personas"
                  panelId="landlord-personas-panel"
                  personas={landlordPersonas}
                  value={landlordId}
                  onChange={setLandlordId}
                  ariaLabel="Landlord segment"
                  variant="landlord"
                />
              </div>
              <div className="lg:col-span-7 xl:col-span-8">
                <PersonaPanel
                  persona={landlord}
                  panelId="landlord-personas-panel"
                  labelledBy={`landlord-personas-tab-${landlordId}`}
                  variant="landlord"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 md:mt-0">
          <div className="absolute left-1/2 top-[-1.75rem] flex -translate-x-1/2 flex-col items-center sm:top-[-2rem] md:top-[-2.5rem]">
            <div className="h-6 w-px bg-gradient-to-b from-gray-200 to-[#0009B3] sm:h-10" />
            <div className="gradient-brand flex h-9 w-9 items-center justify-center rounded-full shadow-lg sm:h-10 sm:w-10">
              <ArrowRight className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0009B3] to-[#0009B3]/90 px-5 py-8 text-center sm:rounded-3xl sm:px-8 sm:py-10 md:p-10 lg:p-14">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#0BFFC9]/20 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#0BFFC9]/10 blur-3xl filter" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <Shield className="h-4 w-4 text-[#0BFFC9]" />
                <span className="font-body text-sm font-medium text-white">The solution</span>
              </div>

              <h3 className="font-heading mb-3 text-2xl font-semibold leading-tight text-white sm:mb-4 sm:text-3xl md:text-4xl">
                One platform. Complete trust.
              </h3>
              <p className="font-body mx-auto mb-6 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
                LeazeSure creates a verified trust layer between tenants and landlords. Build your
                Rental Passport once, use it everywhere, and let your rent payments build your
                credit.
              </p>

              <div className="mx-auto flex w-full max-w-md flex-col gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:gap-6">
                {[
                  'Reusable Rental Passport',
                  'Equifax Rent Reporting',
                  'Instant pre-screening',
                  'Tenant management',
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 sm:w-auto sm:justify-start sm:px-4"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#0BFFC9]" />
                    <span className="font-body text-left text-xs text-white sm:text-sm">{feature}</span>
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
