import { useState } from "react";

const theme = {
  navy: "#0B1D3A",
  gold: "#C9943A",
  goldLight: "#E8B86D",
  cream: "#F9F5EE",
  white: "#FFFFFF",
  gray: "#6B7280",
  lightGray: "#F3F4F6",
  red: "#DC2626",
  green: "#16A34A",
  border: "#E5E0D5",
};

const styles = {
  app: {
    maxWidth: 420,
    margin: "0 auto",
    minHeight: "100vh",
    background: theme.cream,
    fontFamily: "'Georgia', serif",
    position: "relative",
    boxShadow: "0 0 40px rgba(0,0,0,0.15)",
  },
  topBar: {
    background: theme.navy,
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    color: theme.gold,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  logoSub: {
    color: "#8BA4C8",
    fontSize: 9,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginTop: 1,
  },
  navIcon: {
    color: theme.white,
    fontSize: 20,
    cursor: "pointer",
    padding: "4px 8px",
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 420,
    background: theme.navy,
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0 14px",
    zIndex: 100,
    borderTop: `2px solid ${theme.gold}`,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    gap: 3,
  },
  navLabel: {
    fontSize: 9,
    letterSpacing: 0.5,
    fontFamily: "sans-serif",
  },
  screen: {
    paddingBottom: 90,
    paddingTop: 0,
    minHeight: "calc(100vh - 60px)",
  },
  heroBanner: {
    background: `linear-gradient(135deg, ${theme.navy} 0%, #1a3a6b 100%)`,
    padding: "28px 20px 24px",
    position: "relative",
    overflow: "hidden",
  },
  heroTitle: {
    color: theme.white,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 1.3,
    marginBottom: 6,
  },
  heroSub: {
    color: theme.goldLight,
    fontSize: 12,
    fontFamily: "sans-serif",
    letterSpacing: 0.3,
  },
  heroBadge: {
    position: "absolute",
    right: 20,
    top: 28,
    background: theme.gold,
    borderRadius: "50%",
    width: 64,
    height: 64,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(201,148,58,0.4)",
  },
  heroBadgeText: {
    color: theme.navy,
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "sans-serif",
    lineHeight: 1.2,
  },
  section: {
    padding: "18px 16px 8px",
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: theme.gold,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontFamily: "sans-serif",
    marginBottom: 12,
    borderLeft: `3px solid ${theme.gold}`,
    paddingLeft: 8,
  },
  quickGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  quickCard: {
    background: theme.white,
    borderRadius: 10,
    padding: "14px 12px",
    border: `1px solid ${theme.border}`,
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.2s",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  quickIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  quickLabel: {
    fontSize: 11,
    color: theme.navy,
    fontFamily: "sans-serif",
    fontWeight: "600",
    lineHeight: 1.3,
  },
  newsCard: {
    background: theme.white,
    borderRadius: 10,
    padding: "14px",
    marginBottom: 10,
    border: `1px solid ${theme.border}`,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  newsBadge: {
    display: "inline-block",
    background: theme.navy,
    color: theme.gold,
    fontSize: 8,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    padding: "2px 7px",
    borderRadius: 3,
    marginBottom: 6,
  },
  newsTitle: {
    fontSize: 13,
    color: theme.navy,
    fontWeight: "bold",
    lineHeight: 1.4,
    marginBottom: 4,
  },
  newsMeta: {
    fontSize: 10,
    color: theme.gray,
    fontFamily: "sans-serif",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    border: `1px solid ${theme.border}`,
    borderRadius: 8,
    fontSize: 13,
    fontFamily: "sans-serif",
    background: theme.white,
    color: theme.navy,
    boxSizing: "border-box",
    outline: "none",
  },
  btn: {
    background: theme.navy,
    color: theme.white,
    border: "none",
    borderRadius: 8,
    padding: "13px 20px",
    fontSize: 13,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    letterSpacing: 0.5,
  },
  btnGold: {
    background: theme.gold,
    color: theme.navy,
    border: "none",
    borderRadius: 8,
    padding: "13px 20px",
    fontSize: 13,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    letterSpacing: 0.5,
  },
  caseCard: {
    background: theme.white,
    borderRadius: 10,
    padding: "14px",
    marginBottom: 10,
    border: `1px solid ${theme.border}`,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  caseNo: {
    fontSize: 13,
    fontWeight: "bold",
    color: theme.navy,
    fontFamily: "sans-serif",
    marginBottom: 4,
  },
  caseRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  caseMeta: {
    fontSize: 11,
    color: theme.gray,
    fontFamily: "sans-serif",
  },
  statusBadge: (color) => ({
    fontSize: 9,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    letterSpacing: 1,
    padding: "3px 8px",
    borderRadius: 4,
    background: color === "green" ? "#DCFCE7" : color === "red" ? "#FEE2E2" : "#FEF9C3",
    color: color === "green" ? theme.green : color === "red" ? theme.red : "#92400E",
  }),
  formItem: {
    background: theme.white,
    borderRadius: 10,
    padding: "14px",
    marginBottom: 10,
    border: `1px solid ${theme.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    cursor: "pointer",
  },
  formName: {
    fontSize: 13,
    color: theme.navy,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginBottom: 3,
  },
  formDesc: {
    fontSize: 11,
    color: theme.gray,
    fontFamily: "sans-serif",
  },
  judgCard: {
    background: theme.white,
    borderRadius: 10,
    padding: "14px",
    marginBottom: 10,
    border: `1px solid ${theme.border}`,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  judgCourt: {
    fontSize: 9,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: theme.gold,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  judgTitle: {
    fontSize: 13,
    color: theme.navy,
    fontWeight: "bold",
    lineHeight: 1.4,
    marginBottom: 5,
  },
  judgExcerpt: {
    fontSize: 11,
    color: theme.gray,
    fontFamily: "sans-serif",
    lineHeight: 1.5,
    marginBottom: 6,
  },
  profileCard: {
    background: theme.navy,
    margin: "0 16px 16px",
    borderRadius: 12,
    padding: "20px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: theme.gold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    margin: "0 auto 12px",
    border: `3px solid ${theme.goldLight}`,
  },
  profileName: {
    color: theme.white,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileSub: {
    color: theme.goldLight,
    fontSize: 12,
    fontFamily: "sans-serif",
  },
  profileMeta: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 16,
    paddingTop: 16,
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  profileStat: {
    textAlign: "center",
  },
  profileStatNum: {
    color: theme.gold,
    fontSize: 18,
    fontWeight: "bold",
  },
  profileStatLabel: {
    color: "#8BA4C8",
    fontSize: 9,
    fontFamily: "sans-serif",
    letterSpacing: 0.5,
  },
  infoRow: {
    background: theme.white,
    borderRadius: 10,
    padding: "13px 16px",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    gap: 12,
    border: `1px solid ${theme.border}`,
  },
  infoLabel: {
    fontSize: 11,
    color: theme.gray,
    fontFamily: "sans-serif",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 13,
    color: theme.navy,
    fontFamily: "sans-serif",
    fontWeight: "600",
  },
  loginScreen: {
    minHeight: "100vh",
    background: theme.navy,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  loginLogo: {
    fontSize: 36,
    color: theme.gold,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  loginSub: {
    color: "#8BA4C8",
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginBottom: 32,
  },
  loginBox: {
    background: theme.cream,
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 360,
  },
  label: {
    fontSize: 11,
    color: theme.gray,
    fontFamily: "sans-serif",
    fontWeight: "600",
    letterSpacing: 0.5,
    marginBottom: 6,
    display: "block",
  },
  fieldGroup: {
    marginBottom: 16,
  },
  divider: {
    height: 1,
    background: theme.border,
    margin: "12px 0",
  },
  chip: {
    display: "inline-block",
    background: "#EFF6FF",
    color: "#1D4ED8",
    fontSize: 10,
    fontFamily: "sans-serif",
    padding: "3px 8px",
    borderRadius: 4,
    marginRight: 6,
    marginTop: 4,
  },
  tickerWrap: {
    background: theme.gold,
    padding: "7px 16px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    overflow: "hidden",
  },
  tickerLabel: {
    fontSize: 9,
    fontWeight: "bold",
    color: theme.navy,
    fontFamily: "sans-serif",
    letterSpacing: 1,
    whiteSpace: "nowrap",
    background: theme.navy,
    color: theme.gold,
    padding: "2px 7px",
    borderRadius: 3,
  },
  tickerText: {
    fontSize: 11,
    color: theme.navy,
    fontFamily: "sans-serif",
    whiteSpace: "nowrap",
    fontWeight: "500",
  },
};

// ─── DATA ───────────────────────────────────────────────
const mockCases = [
  { no: "WP/1234/2024", title: "Ram Prasad vs. State of UP", court: "Allahabad High Court", nextDate: "12 Jun 2025", status: "green", statusLabel: "Listed" },
  { no: "CS/567/2023", title: "Mehta Traders vs. ABC Pvt Ltd", court: "District Court, Delhi", nextDate: "18 Jun 2025", status: "yellow", statusLabel: "Adjourned" },
  { no: "CR/890/2024", title: "CBI vs. Rakesh Sharma", court: "Sessions Court, Mumbai", nextDate: "07 Jul 2025", status: "red", statusLabel: "Urgent" },
  { no: "MA/2201/2023", title: "Sunita Devi vs. Ramesh Kumar", court: "Family Court, Lucknow", nextDate: "22 Jun 2025", status: "green", statusLabel: "Listed" },
];

const mockForms = [
  { name: "Vakalatnama", desc: "Standard power of attorney for advocate", icon: "📜" },
  { name: "Application for Bail", desc: "Sessions / High Court bail application", icon: "🔓" },
  { name: "Caveat Petition", desc: "Notice of interest in proceedings", icon: "⚠️" },
  { name: "Written Statement", desc: "Defendant's reply to plaint", icon: "📝" },
  { name: "Legal Notice Format", desc: "Formal notice under CPC", icon: "📬" },
  { name: "Stay Application", desc: "Application for interim stay order", icon: "⛔" },
  { name: "Affidavit Template", desc: "General sworn statement format", icon: "✍️" },
  { name: "Writ Petition (HC)", desc: "High Court writ under Article 226", icon: "🏛️" },
];

const mockNews = [
  { tag: "Supreme Court", title: "SC holds that anticipatory bail can be granted even after chargesheet is filed", date: "28 May 2025" },
  { tag: "High Court", title: "Delhi HC directs DSLSA to set up legal aid kiosks in all district courts", date: "27 May 2025" },
  { tag: "Amendment", title: "BNS 2023: Key changes from IPC that every advocate must know", date: "26 May 2025" },
  { tag: "Tribunal", title: "NCLT Allahabad bench issues SOP for insolvency resolution timelines", date: "25 May 2025" },
];

const mockJudgements = [
  {
    court: "Supreme Court of India",
    title: "Arnesh Kumar vs. State of Bihar — Guidelines on Arrest in 498A",
    excerpt: "Held: Police officers should not arrest automatically on a cognizable offence. Magistrates must apply their mind before remanding accused to custody.",
    citation: "(2014) 8 SCC 273",
    date: "2 Jul 2014",
    tags: ["CrPC", "498A", "Arrest"],
  },
  {
    court: "Supreme Court of India",
    title: "Vishaka vs. State of Rajasthan — Sexual Harassment Guidelines",
    excerpt: "Laid down binding guidelines for prevention of sexual harassment at workplace until legislature enacts suitable legislation.",
    citation: "AIR 1997 SC 3011",
    date: "13 Aug 1997",
    tags: ["Constitutional", "Women's Rights"],
  },
  {
    court: "Delhi High Court",
    title: "Shyam Sunder vs. Union of India — RTI and Third Party Information",
    excerpt: "Third-party information cannot be disclosed under RTI if it would harm the competitive position of the party concerned.",
    citation: "W.P.(C) 4872/2020",
    date: "11 Mar 2022",
    tags: ["RTI", "Privacy"],
  },
  {
    court: "Allahabad High Court",
    title: "Shiv Kumar Sharma vs. State — On Default Bail Rights",
    excerpt: "Default bail under Section 167(2) CrPC is an indefeasible right and cannot be defeated by filing a chargesheet during pendency.",
    citation: "Criminal Misc. Bail Appln. No. 221/2023",
    date: "15 Sep 2023",
    tags: ["Bail", "CrPC 167"],
  },
];

// ─── COMPONENTS ─────────────────────────────────────────

function TopBar({ title, onBack, onNotif }) {
  return (
    <div style={styles.topBar}>
      {onBack ? (
        <span style={{ ...styles.navIcon, fontSize: 18 }} onClick={onBack}>← Back</span>
      ) : (
        <div>
          <div style={styles.logo}>⚖ Lawyers4Lawyers</div>
          <div style={styles.logoSub}>For Indian Advocates</div>
        </div>
      )}
      {title && <span style={{ color: theme.white, fontSize: 15, fontWeight: "bold" }}>{title}</span>}
      <span style={styles.navIcon} onClick={onNotif}>🔔</span>
    </div>
  );
}

function BottomNav({ active, setScreen }) {
  const items = [
    { icon: "🏠", label: "Home", screen: "home" },
    { icon: "📁", label: "Cases", screen: "cases" },
    { icon: "📋", label: "Forms", screen: "forms" },
    { icon: "📰", label: "News", screen: "news" },
    { icon: "🧑‍⚖️", label: "Profile", screen: "profile" },
  ];
  return (
    <div style={styles.bottomNav}>
      {items.map((i) => (
        <div key={i.screen} style={styles.navItem} onClick={() => setScreen(i.screen)}>
          <span style={{ fontSize: 20 }}>{i.icon}</span>
          <span style={{ ...styles.navLabel, color: active === i.screen ? theme.gold : "#8BA4C8" }}>
            {i.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── SCREENS ────────────────────────────────────────────

function LoginScreen({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", barno: "", phone: "", pass: "" });

  return (
    <div style={styles.loginScreen}>
      <div style={styles.loginLogo}>⚖</div>
      <div style={{ color: theme.gold, fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
        Lawyers4Lawyers
      </div>
      <div style={styles.loginSub}>Empowering Indian Advocates Since 2020</div>

      <div style={styles.loginBox}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {["login", "signup"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                flex: 1, padding: "10px", border: "none", borderRadius: 8, cursor: "pointer",
                fontFamily: "sans-serif", fontWeight: "bold", fontSize: 12, letterSpacing: 0.5,
                background: mode === m ? theme.navy : theme.border,
                color: mode === m ? theme.white : theme.gray,
              }}
            >
              {m === "login" ? "LOG IN" : "SIGN UP"}
            </button>
          ))}
        </div>

        {mode === "signup" && (
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name</label>
            <input style={styles.input} placeholder="Adv. Rajesh Kumar" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
        )}
        {mode === "signup" && (
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Bar Council Enrollment No.</label>
            <input style={styles.input} placeholder="UP/2345/2018" value={form.barno}
              onChange={e => setForm({ ...form, barno: e.target.value })} />
          </div>
        )}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input style={styles.input} placeholder="+91 98765 43210" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Password</label>
          <input style={styles.input} type="password" placeholder="••••••••" value={form.pass}
            onChange={e => setForm({ ...form, pass: e.target.value })} />
        </div>

        <button style={styles.btnGold} onClick={onLogin}>
          {mode === "login" ? "LOGIN →" : "CREATE ACCOUNT →"}
        </button>

        {mode === "login" && (
          <p style={{ textAlign: "center", fontSize: 11, fontFamily: "sans-serif", color: theme.gray, marginTop: 12 }}>
            Forgot password? <span style={{ color: theme.gold, cursor: "pointer" }}>Reset via OTP</span>
          </p>
        )}
      </div>
    </div>
  );
}

function HomeScreen({ setScreen }) {
  return (
    <div style={styles.screen}>
      <div style={styles.heroBanner}>
        <div style={{ color: "#8BA4C8", fontSize: 11, fontFamily: "sans-serif", marginBottom: 8 }}>
          Friday, 29 May 2025
        </div>
        <div style={styles.heroTitle}>Good Morning,{"\n"}Adv. Rajesh Kumar Bidhuri</div>
        <div style={styles.heroSub}>Bar Council No: D/1892/2018</div>
        <div style={styles.heroBadge}>
          <div style={{ fontSize: 18 }}>⚖</div>
          <div style={{ ...styles.heroBadgeText, color: theme.navy }}>PRO</div>
        </div>
      </div>

      {/* Ticker */}
      <div style={styles.tickerWrap}>
        <span style={styles.tickerLabel}>LIVE</span>
        <span style={styles.tickerText}>SC: 3-judge bench constituted for Waqf Board challenge • Delhi HC: Summer vacation from 26 May to 14 Jun 2025</span>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Quick Access</div>
        <div style={styles.quickGrid}>
          {[
            { icon: "📁", label: "Case Tracker", s: "cases" },
            { icon: "📋", label: "Court Forms", s: "forms" },
            { icon: "📚", label: "Judgements", s: "judgements" },
            { icon: "📰", label: "Legal News", s: "news" },
            { icon: "📅", label: "Hearing Dates", s: "cases" },
            { icon: "🧑‍⚖️", label: "My Profile", s: "profile" },
          ].map((q) => (
            <div key={q.label} style={styles.quickCard} onClick={() => setScreen(q.s)}>
              <div style={styles.quickIcon}>{q.icon}</div>
              <div style={styles.quickLabel}>{q.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Today's Hearings</div>
        {mockCases.slice(0, 2).map((c) => (
          <div key={c.no} style={styles.caseCard}>
            <div style={styles.caseNo}>{c.no}</div>
            <div style={{ fontSize: 12, color: theme.navy, fontFamily: "sans-serif" }}>{c.title}</div>
            <div style={styles.caseRow}>
              <div style={styles.caseMeta}>{c.court}</div>
              <span style={styles.statusBadge(c.status)}>{c.statusLabel}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Latest News</div>
        {mockNews.slice(0, 2).map((n, i) => (
          <div key={i} style={styles.newsCard}>
            <div style={styles.newsBadge}>{n.tag}</div>
            <div style={styles.newsTitle}>{n.title}</div>
            <div style={styles.newsMeta}>{n.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CasesScreen() {
  const [search, setSearch] = useState("");
  const filtered = mockCases.filter(
    (c) => c.no.toLowerCase().includes(search.toLowerCase()) || c.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div style={styles.screen}>
      <div style={{ ...styles.heroBanner, padding: "20px 20px 18px" }}>
        <div style={{ color: theme.goldLight, fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif", marginBottom: 12 }}>
          📁 Case Tracker
        </div>
        <input
          style={{ ...styles.input, background: "rgba(255,255,255,0.1)", color: theme.white, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, fontSize: 13 }}
          placeholder="Search case no. or party name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Active Cases ({filtered.length})</div>
        {filtered.map((c) => (
          <div key={c.no} style={styles.caseCard}>
            <div style={styles.caseRow}>
              <div style={styles.caseNo}>{c.no}</div>
              <span style={styles.statusBadge(c.status)}>{c.statusLabel}</span>
            </div>
            <div style={{ fontSize: 13, color: theme.navy, fontFamily: "sans-serif", margin: "6px 0 4px", fontWeight: "600" }}>
              {c.title}
            </div>
            <div style={styles.caseMeta}>🏛 {c.court}</div>
            <div style={{ ...styles.divider, margin: "10px 0 8px" }} />
            <div style={styles.caseRow}>
              <div style={{ ...styles.caseMeta }}>📅 Next Hearing: <strong>{c.nextDate}</strong></div>
              <span style={{ fontSize: 11, color: theme.gold, cursor: "pointer", fontFamily: "sans-serif" }}>Details →</span>
            </div>
          </div>
        ))}
        <button style={{ ...styles.btnGold, marginTop: 8 }}>+ Add New Case</button>
      </div>
    </div>
  );
}

function FormsScreen() {
  return (
    <div style={styles.screen}>
      <div style={{ ...styles.heroBanner, padding: "20px 20px 18px" }}>
        <div style={{ color: theme.goldLight, fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif", marginBottom: 4 }}>
          📋 Court Forms Library
        </div>
        <div style={{ color: "#8BA4C8", fontSize: 11, fontFamily: "sans-serif" }}>
          Ready-to-use templates for all courts
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Available Forms</div>
        {mockForms.map((f) => (
          <div key={f.name} style={styles.formItem}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>{f.icon}</span>
              <div>
                <div style={styles.formName}>{f.name}</div>
                <div style={styles.formDesc}>{f.desc}</div>
              </div>
            </div>
            <span style={{ fontSize: 20, color: theme.gold }}>↓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsScreen() {
  return (
    <div style={styles.screen}>
      <div style={{ ...styles.heroBanner, padding: "20px 20px 18px" }}>
        <div style={{ color: theme.goldLight, fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif", marginBottom: 4 }}>
          📰 Legal News & Updates
        </div>
        <div style={{ color: "#8BA4C8", fontSize: 11, fontFamily: "sans-serif" }}>Supreme Court • High Courts • Tribunals</div>
      </div>
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Today's Headlines</div>
        {mockNews.map((n, i) => (
          <div key={i} style={styles.newsCard}>
            <div style={styles.newsBadge}>{n.tag}</div>
            <div style={styles.newsTitle}>{n.title}</div>
            <div style={{ ...styles.newsMeta, marginTop: 6 }}>🗓 {n.date} &nbsp;•&nbsp; <span style={{ color: theme.gold, cursor: "pointer" }}>Read more →</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JudgementsScreen() {
  const [search, setSearch] = useState("");
  const filtered = mockJudgements.filter(
    (j) => j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.court.toLowerCase().includes(search.toLowerCase()) ||
      j.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div style={styles.screen}>
      <div style={{ ...styles.heroBanner, padding: "20px 20px 18px" }}>
        <div style={{ color: theme.goldLight, fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif", marginBottom: 10 }}>
          📚 Judgements Database
        </div>
        <input
          style={{ ...styles.input, background: "rgba(255,255,255,0.1)", color: theme.white, border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, fontSize: 13 }}
          placeholder="Search by case name, court, or topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Landmark Judgements</div>
        {filtered.map((j, i) => (
          <div key={i} style={styles.judgCard}>
            <div style={styles.judgCourt}>🏛 {j.court}</div>
            <div style={styles.judgTitle}>{j.title}</div>
            <div style={styles.judgExcerpt}>{j.excerpt}</div>
            <div style={{ marginBottom: 8 }}>
              {j.tags.map((t) => <span key={t} style={styles.chip}>{t}</span>)}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 10, color: theme.gray, fontFamily: "sans-serif" }}>
                Citation: <strong>{j.citation}</strong>
              </div>
              <span style={{ fontSize: 11, color: theme.gold, cursor: "pointer", fontFamily: "sans-serif" }}>Read full →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div style={styles.screen}>
      <div style={{ background: theme.navy, padding: "20px 0 0", marginBottom: 16 }}>
        <div style={{ color: theme.goldLight, fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif", padding: "0 20px 16px" }}>
          🧑‍⚖️ Advocate Profile
        </div>
      </div>
      <div style={styles.profileCard}>
        <div style={styles.avatar}>👨‍⚖️</div>
        <div style={styles.profileName}>Adv. Rajesh Kumar Bidhuri</div>
        <div style={styles.profileSub}>Advocate • District Court, Delhi</div>
        <div style={styles.profileMeta}>
          <div style={styles.profileStat}>
            <div style={styles.profileStatNum}>47</div>
            <div style={styles.profileStatLabel}>Cases</div>
          </div>
          <div style={styles.profileStat}>
            <div style={styles.profileStatNum}>12</div>
            <div style={styles.profileStatLabel}>Hearings This Month</div>
          </div>
          <div style={styles.profileStat}>
            <div style={styles.profileStatNum}>7yr</div>
            <div style={styles.profileStatLabel}>Experience</div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Enrollment Details</div>
        {[
          { icon: "🪪", label: "Bar Council No.", value: "UP/2345/2018" },
          { icon: "🏛", label: "Enrolled Court", value: "District Court, Delhi" },
          { icon: "📅", label: "Enrollment Date", value: "14 March 2018" },
          { icon: "📱", label: "Mobile", value: "+91 98765 43210" },
          { icon: "📧", label: "Email", value: "adv.rajesh@example.com" },
        ].map((r) => (
          <div key={r.label} style={styles.infoRow}>
            <span style={{ fontSize: 20 }}>{r.icon}</span>
            <div>
              <div style={styles.infoLabel}>{r.label}</div>
              <div style={styles.infoValue}>{r.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "0 16px 16px" }}>
        <button style={styles.btn}>Edit Profile</button>
        <button style={{ ...styles.btn, background: "transparent", color: theme.red, border: `1px solid ${theme.red}`, marginTop: 8 }}>
          Log Out
        </button>
      </div>
    </div>
  );
}

// ─── ROOT ───────────────────────────────────────────────

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [screen, setScreen] = useState("home");

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  const renderScreen = () => {
    switch (screen) {
      case "home": return <HomeScreen setScreen={setScreen} />;
      case "cases": return <CasesScreen />;
      case "forms": return <FormsScreen />;
      case "news": return <NewsScreen />;
      case "judgements": return <JudgementsScreen />;
      case "profile": return <ProfileScreen />;
      default: return <HomeScreen setScreen={setScreen} />;
    }
  };

  const showJudgements = screen === "judgements";

  return (
    <div style={styles.app}>
      <TopBar
        title={showJudgements ? "Judgements" : undefined}
        onBack={showJudgements ? () => setScreen("home") : undefined}
        onNotif={() => {}}
      />
      {renderScreen()}
      {!showJudgements && <BottomNav active={screen} setScreen={setScreen} />}
      {showJudgements && (
        <div style={styles.bottomNav}>
          <div style={styles.navItem} onClick={() => setScreen("home")}>
            <span style={{ fontSize: 20 }}>🏠</span>
            <span style={{ ...styles.navLabel, color: "#8BA4C8" }}>Home</span>
          </div>
          <div style={styles.navItem}>
            <span style={{ fontSize: 20 }}>📚</span>
            <span style={{ ...styles.navLabel, color: theme.gold }}>Judgements</span>
          </div>
          <div style={styles.navItem} onClick={() => setScreen("news")}>
            <span style={{ fontSize: 20 }}>📰</span>
            <span style={{ ...styles.navLabel, color: "#8BA4C8" }}>News</span>
          </div>
        </div>
      )}
    </div>
  );
}
