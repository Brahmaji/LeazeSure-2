import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";

const initialFormData = {
  fullName: "",
  role: "tenant",
  companyName: "",
  pmUnits: "",
  pmChallenges: [],
  pmScreening: "",
  pmPilot: "",
  pmPay: "",
  llUnits: "",
  llWorries: "",
  llVerifyManually: "",
  llRentReporting: "",
  llDashboard: "",
  tStatus: "",
  tApplications: "",
  tFrustrations: [],
  tPassport: "",
  tPayAmount: "",
  email: "",
  cityProvince: "",
  earlyPilot: "",
};

const inputStyle = {
  width: "100%",
  borderRadius: "10px",
  border: "1.5px solid rgba(255,255,255,0.18)",
  padding: "12px 16px",
  fontSize: "14px",
  background: "rgba(255,255,255,0.07)",
  color: "#fff",
  outline: "none",
  transition: "border-color 0.2s",
};

function FieldLabel({ children }) {
  return (
    <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.75)", marginBottom: "10px", letterSpacing: "0.01em" }}>
      {children}
    </p>
  );
}

function PillOption({ checked, onClick, label, icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "9px 18px",
        borderRadius: "9999px",
        border: checked ? "1.5px solid #0BFFC9" : "1.5px solid rgba(255,255,255,0.18)",
        background: checked ? "rgba(11,255,201,0.12)" : "rgba(255,255,255,0.05)",
        color: checked ? "#0BFFC9" : "rgba(255,255,255,0.65)",
        fontSize: "13px",
        fontWeight: checked ? 600 : 400,
        cursor: "pointer",
        transition: "all 0.15s ease",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
      {checked && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 2 }}>
          <path d="M2 6L5 9L10 3" stroke="#0BFFC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function CheckPill({ checked, onClick, label, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "9px 16px",
        borderRadius: "10px",
        border: checked ? "1.5px solid #0BFFC9" : "1.5px solid rgba(255,255,255,0.15)",
        background: checked ? "rgba(11,255,201,0.1)" : "rgba(255,255,255,0.04)",
        color: checked ? "#fff" : "rgba(255,255,255,0.55)",
        fontSize: "13px",
        fontWeight: checked ? 500 : 400,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "all 0.15s ease",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "100%",
      }}
    >
      <span style={{
        width: 16, height: 16, borderRadius: 4,
        border: checked ? "1.5px solid #0BFFC9" : "1.5px solid rgba(255,255,255,0.3)",
        background: checked ? "rgba(11,255,201,0.2)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="#0BFFC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}

const stepLabels = ["Info", "Questions", "Contact"];

function StepIndicator({ current, total }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 32 }}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700,
              border: i <= current ? "2px solid #0BFFC9" : "2px solid rgba(255,255,255,0.15)",
              background: i === current ? "#0BFFC9" : i < current ? "rgba(11,255,201,0.15)" : "rgba(255,255,255,0.05)",
              color: i === current ? "#000" : i < current ? "#0BFFC9" : "rgba(255,255,255,0.3)",
              boxShadow: i === current ? "0 0 20px rgba(11,255,201,0.4)" : "none",
              transition: "all 0.3s ease",
            }}>
              {i < current ? "✓" : i + 1}
            </div>
            <span style={{
              fontSize: 11, fontWeight: 500,
              color: i <= current ? "rgba(11,255,201,0.8)" : "rgba(255,255,255,0.25)",
              transition: "color 0.3s ease",
            }}>
              {stepLabels[i]}
            </span>
          </div>
          {i < total - 1 && (
            <div style={{
              width: 60, height: 1.5, borderRadius: 2,
              background: i < current ? "rgba(11,255,201,0.5)" : "rgba(255,255,255,0.1)",
              margin: "0 10px", marginBottom: 20,
              transition: "background 0.5s ease",
            }} />
          )}
        </div>
      ))}
    </div>
  );
}

function RoleTabs({ role, onChange }) {
  const tabs = [
    { value: "tenant", label: "Tenant", icon: "🏠", desc: "Looking to rent" },
    { value: "landlord", label: "Landlord", icon: "🔑", desc: "Own rental units" },
    { value: "property_manager", label: "Property Mgmt", icon: "🏢", desc: "Manage properties" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
      {tabs.map((t) => (
        <button
          key={t.value}
          type="button"
          onClick={() => onChange(t.value)}
          style={{
            borderRadius: 12, padding: "14px 10px", textAlign: "left",
            border: role === t.value ? "1.5px solid #0BFFC9" : "1.5px solid rgba(255,255,255,0.12)",
            background: role === t.value ? "rgba(11,255,201,0.08)" : "rgba(255,255,255,0.04)",
            cursor: "pointer", transition: "all 0.2s ease",
            position: "relative",
          }}
        >
          <span style={{ fontSize: 22, display: "block", marginBottom: 6 }}>{t.icon}</span>
          <span style={{
            fontSize: 12, fontWeight: 700, display: "block",
            color: role === t.value ? "#0BFFC9" : "rgba(255,255,255,0.75)",
            marginBottom: 2,
          }}>{t.label}</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{t.desc}</span>
          {role === t.value && (
            <div style={{
              position: "absolute", top: 8, right: 8,
              width: 7, height: 7, borderRadius: "50%",
              background: "#0BFFC9",
            }} />
          )}
        </button>
      ))}
    </div>
  );
}

function QuestionBlock({ label, children, hint }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <FieldLabel>{label}{hint && <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.35)", marginLeft: 6 }}>{hint}</span>}</FieldLabel>
      {children}
    </div>
  );
}

export default function EarlyAccessSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleArrayItem = (key, value, max) => {
    setForm((prev) => {
      const arr = prev[key];
      if (arr.includes(value)) return { ...prev, [key]: arr.filter((v) => v !== value) };
      if (max && arr.length >= max) return prev;
      return { ...prev, [key]: [...arr, value] };
    });
  };

  const canProceedStep0 = form.fullName.trim().length > 0;
  const canProceedStep1 = (() => {
    if (form.role === "property_manager") return form.companyName.trim().length > 0 && form.pmUnits !== "";
    if (form.role === "landlord") return form.llUnits !== "";
    return form.tStatus !== "";
  })();
  const canSubmit = form.email.trim().length > 0 && form.email.includes("@");

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");
    try {
      const { error } = await supabase.from("early_access_signups").insert([{
        email: form.email,
        role: form.role,
        full_name: form.fullName,
        city_province: form.cityProvince,
        data: form,
      }]);
      if (error) {
        if (error.code === "23505") {
          setSubmitError("This email is already registered. You're on the list!");
          setSubmitted(true);
        } else {
          setSubmitError(error.message || "Something went wrong. Please try again.");
        }
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep0 = () => (
    <div>
      <QuestionBlock label="What's your full name?">
        <input
          type="text"
          style={inputStyle}
          placeholder="Your full name"
          value={form.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          onFocus={(e) => e.target.style.borderColor = "rgba(11,255,201,0.6)"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.18)"}
        />
      </QuestionBlock>
      <QuestionBlock label="Which best describes you?">
        <RoleTabs role={form.role} onChange={(r) => updateField("role", r)} />
      </QuestionBlock>
    </div>
  );

  const renderPMQuestions = () => (
    <div>
      <QuestionBlock label="Company Name">
        <input
          type="text"
          style={inputStyle}
          placeholder="Your company name"
          value={form.companyName}
          onChange={(e) => updateField("companyName", e.target.value)}
          onFocus={(e) => e.target.style.borderColor = "rgba(11,255,201,0.6)"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.18)"}
        />
      </QuestionBlock>
      <QuestionBlock label="How many units do you manage?">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["1–20", "21–100", "101–500", "500+"].map((v) => (
            <PillOption key={v} checked={form.pmUnits === v} onClick={() => updateField("pmUnits", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="Biggest leasing challenge?" hint="(up to 2)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {["Fraudulent documents", "Late/missed rent", "Slow approvals", "Maintenance Automation", "Payment disputes", "Tenant communication"].map((v) => (
            <CheckPill
              key={v} label={v}
              checked={form.pmChallenges.includes(v)}
              onClick={() => toggleArrayItem("pmChallenges", v, 2)}
              disabled={!form.pmChallenges.includes(v) && form.pmChallenges.length >= 2}
            />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="How do you currently screen tenants?">
        <input
          type="text"
          style={inputStyle}
          placeholder="Describe your current process..."
          value={form.pmScreening}
          onChange={(e) => updateField("pmScreening", e.target.value)}
          onFocus={(e) => e.target.style.borderColor = "rgba(11,255,201,0.6)"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.18)"}
        />
      </QuestionBlock>
      <QuestionBlock label="Open to piloting a Verified Passport + AI Screening?">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Yes", "Maybe", "Not sure"].map((v) => (
            <PillOption key={v} checked={form.pmPilot === v} onClick={() => updateField("pmPilot", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="Would you pay for fraud reduction + screening automation?">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Yes", "Depends on pricing", "No"].map((v) => (
            <PillOption key={v} checked={form.pmPay === v} onClick={() => updateField("pmPay", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
    </div>
  );

  const renderLandlordQuestions = () => (
    <div>
      <QuestionBlock label="How many rental units do you own?">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["1", "2–5", "6–20", "20+"].map((v) => (
            <PillOption key={v} checked={form.llUnits === v} onClick={() => updateField("llUnits", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="What worries you most about renting?">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {["Tenant fraud", "Tenant Screenings", "LTB delays", "Maintenance disputes", "All of the above"].map((v) => (
            <CheckPill key={v} label={v} checked={form.llWorries === v} onClick={() => updateField("llWorries", v)} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="Do you verify income & references manually?">
        <div style={{ display: "flex", gap: 8 }}>
          {["Yes", "No"].map((v) => (
            <PillOption key={v} checked={form.llVerifyManually === v} onClick={() => updateField("llVerifyManually", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="Would rent reporting make you more comfortable selecting tenants?">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Yes", "Maybe", "No"].map((v) => (
            <PillOption key={v} checked={form.llRentReporting === v} onClick={() => updateField("llRentReporting", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="Interested in a dashboard with verified tenant profiles?">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Yes", "Maybe", "Not sure"].map((v) => (
            <PillOption key={v} checked={form.llDashboard === v} onClick={() => updateField("llDashboard", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
    </div>
  );

  const renderTenantQuestions = () => (
    <div>
      <QuestionBlock label="Are you currently:">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Searching", "Moving within 6 months", "Already renting", "Student", "Newcomer"].map((v) => (
            <PillOption key={v} checked={form.tStatus === v} onClick={() => updateField("tStatus", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="Rentals applied to in the past year?">
        <div style={{ display: "flex", gap: 8 }}>
          {["1–3", "4–10", "10+"].map((v) => (
            <PillOption key={v} checked={form.tApplications === v} onClick={() => updateField("tApplications", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="What frustrates you most?">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {["Multiple document submissions to all landlords", "Slow approvals", "Landlords not responding", "No credit benefit from rent"].map((v) => (
            <CheckPill key={v} label={v} checked={form.tFrustrations.includes(v)} onClick={() => toggleArrayItem("tFrustrations", v)} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="Would you use a Verified Passport to apply everywhere?">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Yes", "Maybe", "Not sure"].map((v) => (
            <PillOption key={v} checked={form.tPassport === v} onClick={() => updateField("tPassport", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
      <QuestionBlock label="How much would you pay/month if rent helped build your credit?">
        <input
          type="text"
          style={inputStyle}
          placeholder="e.g. $5, $10, $15..."
          value={form.tPayAmount}
          onChange={(e) => updateField("tPayAmount", e.target.value)}
          onFocus={(e) => e.target.style.borderColor = "rgba(11,255,201,0.6)"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.18)"}
        />
      </QuestionBlock>
    </div>
  );

  const renderStep1 = () => {
    const roleMap = {
      property_manager: { label: "Property Management Co.", icon: "🏢" },
      landlord: { label: "Independent Landlord", icon: "🔑" },
      tenant: { label: "Tenant", icon: "🏠" },
    };
    const { label, icon } = roleMap[form.role];
    return (
      <div>
        <div style={{
          display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
          padding: "10px 16px", borderRadius: 10,
          background: "rgba(11,255,201,0.06)", border: "1px solid rgba(11,255,201,0.15)",
        }}>
          <span style={{ fontSize: 18 }}>{icon}</span>
          <span style={{ fontSize: 13, color: "#0BFFC9", fontWeight: 600 }}>{label} Questions</span>
        </div>
        {form.role === "property_manager" && renderPMQuestions()}
        {form.role === "landlord" && renderLandlordQuestions()}
        {form.role === "tenant" && renderTenantQuestions()}
      </div>
    );
  };

  const renderStep2 = () => (
    <div>
      <QuestionBlock label={<>Email Address <span style={{ color: "#f87171", marginLeft: 4 }}>*</span></>}>
        <input
          type="email"
          style={inputStyle}
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          onFocus={(e) => e.target.style.borderColor = "rgba(11,255,201,0.6)"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.18)"}
        />
      </QuestionBlock>
      <QuestionBlock label="City / Province">
        <input
          type="text"
          style={inputStyle}
          placeholder="e.g. Toronto, ON"
          value={form.cityProvince}
          onChange={(e) => updateField("cityProvince", e.target.value)}
          onFocus={(e) => e.target.style.borderColor = "rgba(11,255,201,0.6)"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.18)"}
        />
      </QuestionBlock>
      <QuestionBlock label="Would you like early pilot access + pricing perks?">
        <div style={{ display: "flex", gap: 8 }}>
          {["Yes", "No"].map((v) => (
            <PillOption key={v} checked={form.earlyPilot === v} onClick={() => updateField("earlyPilot", v)} label={v} />
          ))}
        </div>
      </QuestionBlock>
    </div>
  );

  const renderSuccess = () => (
    <div style={{ textAlign: "center", padding: "48px 0" }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "rgba(11,255,201,0.12)", border: "2px solid rgba(11,255,201,0.4)",
        boxShadow: "0 0 40px rgba(11,255,201,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 28, margin: "0 auto 20px",
      }}>✓</div>
      <h3 className="font-heading gradient-text-cyan" style={{ fontSize: 28, fontWeight: 700, marginBottom: 10 }}>
        You're on the list!
      </h3>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, maxWidth: 360, margin: "0 auto", lineHeight: 1.6 }}>
        Thank you for signing up. We'll reach out soon with pilot details and exclusive pricing.
      </p>
    </div>
  );

  const steps = [renderStep0, renderStep1, renderStep2];
  const stepTitles = ["Basic Information", "Tell Us More", "Contact & Consent"];
  const canProceed = [canProceedStep0, canProceedStep1, canSubmit];

  return (
    <section
      ref={sectionRef}
      id="early-access"
      className="relative overflow-hidden"
      style={{ padding: "96px 0", background: "#060612" }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,9,179,0.2) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 30% at 50% 0%, rgba(11,255,201,0.05) 0%, transparent 60%)" }} />
      </div>

      <div
        className="relative"
        style={{
          maxWidth: 600, margin: "0 auto", padding: "0 24px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex", gap: 6 }}>
            <span style={{ fontSize: 8 }}>◆</span>Early Access
          </span>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(32px, 5vw, 46px)", fontWeight: 700, color: "#fff", marginTop: 16, marginBottom: 12, letterSpacing: "-0.025em", lineHeight: 1.15 }}
          >
            Join the <span className="gradient-text-cyan">Waitlist.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, maxWidth: 440, margin: "0 auto" }}>
            Help us build Ontario's rental trust layer. Answer a few questions and get early pilot access + exclusive pricing.
          </p>
        </div>

        {/* Card */}
        <div style={{
          borderRadius: 20, padding: "32px 32px",
          background: "linear-gradient(160deg, rgba(11,255,201,0.03) 0%, rgba(0,9,179,0.12) 40%, rgba(6,6,18,0.9) 100%)",
          border: "1px solid rgba(11,255,201,0.14)",
          boxShadow: "0 0 60px rgba(11,255,201,0.04), 0 32px 80px rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
        }}>
          {submitted ? renderSuccess() : (
            <>
              <StepIndicator current={step} total={3} />

              {/* Step title */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 3, height: 20, borderRadius: 2, background: "linear-gradient(to bottom, #0BFFC9, rgba(11,255,201,0.2))" }} />
                  <span className="font-heading" style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>{stepTitles[step]}</span>
                </div>
                <div style={{ height: 1, background: "linear-gradient(90deg, rgba(11,255,201,0.25), transparent)" }} />
              </div>

              {/* Step content */}
              <div style={{ minHeight: 280 }}>
                {steps[step]()}
              </div>

              {/* Navigation */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginTop: 32, paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}>
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    style={{
                      padding: "10px 24px", borderRadius: 9999,
                      border: "1.5px solid rgba(255,255,255,0.2)",
                      background: "transparent", color: "rgba(255,255,255,0.65)",
                      fontSize: 13, fontWeight: 600, cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.4)"; e.target.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    ← Back
                  </button>
                ) : <div />}

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={() => canProceed[step] && setStep(step + 1)}
                    style={{
                      padding: "11px 32px", borderRadius: 9999,
                      background: canProceed[step] ? "linear-gradient(135deg, #0009B3, #0BFFC9)" : "rgba(255,255,255,0.08)",
                      color: canProceed[step] ? "#000" : "rgba(255,255,255,0.25)",
                      fontSize: 13, fontWeight: 700, cursor: canProceed[step] ? "pointer" : "not-allowed",
                      border: "none", transition: "all 0.2s",
                      boxShadow: canProceed[step] ? "0 4px 20px rgba(11,255,201,0.25)" : "none",
                    }}
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={canSubmit && !submitting ? handleSubmit : undefined}
                    className={canSubmit && !submitting ? "animate-pulse-glow" : ""}
                    style={{
                      padding: "11px 32px", borderRadius: 9999,
                      background: canSubmit && !submitting ? "linear-gradient(135deg, #0009B3, #0BFFC9)" : "rgba(255,255,255,0.08)",
                      color: canSubmit && !submitting ? "#000" : "rgba(255,255,255,0.25)",
                      fontSize: 13, fontWeight: 700, cursor: canSubmit && !submitting ? "pointer" : "not-allowed",
                      border: "none", transition: "all 0.2s",
                      boxShadow: canSubmit && !submitting ? "0 4px 20px rgba(11,255,201,0.25)" : "none",
                    }}
                  >
                    {submitting ? "Submitting..." : "Join Waitlist ✓"}
                  </button>
                )}
              </div>

              {submitError && (
                <div style={{
                  marginTop: 16, padding: "12px 16px", borderRadius: 10, fontSize: 13, textAlign: "center",
                  background: "rgba(255,80,80,0.08)", border: "1px solid rgba(255,80,80,0.2)", color: "rgba(255,130,130,0.9)",
                }}>
                  {submitError}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
