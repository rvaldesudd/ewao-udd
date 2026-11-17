/* =====================================================================
   EWAO · Voluntariado Profesional — lógica de la landing (MVP)
   Grupo 04 · Marketing Internacional UDD 2026
   ---------------------------------------------------------------------
   1) CONFIGURA AQUÍ tus IDs. Si hubspotPortalId/hubspotFormGuid están
      vacíos, la landing funciona en MODO DEMO: guarda las postulaciones
      en este navegador y muestra el registro que se enviaría al CRM.
   ===================================================================== */
const EWAO_CONFIG = {
  hubspotPortalId: "52317481",  // cuenta HubSpot del Grupo 04 (prueba Marketing Hub Pro)
  hubspotFormGuid: "33e7d774-618d-447c-aa84-ceb9a06987d8",  // formulario "Voluntariado eWAO"
  // Solo estos campos existen como propiedades en HubSpot; el resto queda en el mini CRM local.
  hubspotFields: ["firstname","lastname","email","country","ruta_interes","grupo_responsable","origen_visita","consentimiento_comunicaciones","vol_score","vol_ruta","vol_area_tecnica","vol_modalidad","vol_pasaporte_id","vol_referido_por"],
  hubspotRegion: "na1",     // "na1" o "eu1" según la cuenta (ver URL de HubSpot)
  loadHubspotTracking: true,// carga el script de seguimiento (cookie hutk) si hay portalId
  gtmId: "GTM-W53PHWN7",    // contenedor GTM del Grupo 04 (envía a GA4 G-3D6WN730FL)
  metaPixelId: "",          // ej. "123456789012345" (opcional)
  landingName: "voluntariado",
  // Formulario base común (propuesta Grupo 7): nombres internos de los campos compartidos.
  // Si el Grupo 7 usa otros nombres, cámbialos solo aquí.
  common: {
    rutaInteres: "ruta_interes",          // desplegable común: visitar, comprar, colaborar, ...
    grupo: "grupo_responsable",
    origen: "origen_visita",
    consentComms: "consentimiento_comunicaciones" // casilla opcional
  },
  rutaInteresDefault: "colaborar",        // valor si la persona no llega desde el home con ?ruta=
  grupoValue: "Grupo 04 - Voluntariado",
  contactEmail: "voluntario@ewaoproject.com",
  weeklyFee: 250
};

/* ---------------------------------------------------------------------
   Medición: dataLayer (GTM/GA4) + Meta Pixel opcional
   --------------------------------------------------------------------- */
window.dataLayer = window.dataLayer || [];
function track(event, params = {}) {
  window.dataLayer.push({ event, landing: EWAO_CONFIG.landingName, ...params });
  if (window.fbq) {
    if (event === "generate_lead") fbq("track", "Lead", { content_name: params.ruta || "" });
    if (event === "view_fichas") fbq("track", "ViewContent", { content_name: "fichas_necesidad" });
  }
}
(function loadTags() {
  if (EWAO_CONFIG.gtmId) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtm.js?id=" + EWAO_CONFIG.gtmId;
    document.head.appendChild(s);
  }
  if (EWAO_CONFIG.metaPixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq("init", EWAO_CONFIG.metaPixelId); fbq("track", "PageView");
  }
  if (EWAO_CONFIG.hubspotPortalId && EWAO_CONFIG.loadHubspotTracking) {
    const h = document.createElement("script");
    h.async = true; h.defer = true; h.id = "hs-script-loader";
    h.src = "https://js.hs-scripts.com/" + EWAO_CONFIG.hubspotPortalId + ".js";
    document.head.appendChild(h);
  }
})();

/* ---------------------------------------------------------------------
   Origen del contacto: UTM + referido por pasaporte (?ref=EWAO-VOL-XXXX)
   --------------------------------------------------------------------- */
const qs = new URLSearchParams(location.search);
const ORIGIN = (() => {
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem("ewao_origin") || "{}"); } catch (e) {}
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "ref", "ruta"].forEach(k => { if (qs.get(k)) saved[k] = qs.get(k); });
  try { sessionStorage.setItem("ewao_origin", JSON.stringify(saved)); } catch (e) {}
  return saved;
})();

/* ---------------------------------------------------------------------
   Idioma ES / EN
   --------------------------------------------------------------------- */
const EN = {
  proto_s:"Academic prototype, not official", proto_l:" · Group 04 Volunteering · International Marketing UDD 2026", fact2b:"2 wks – 3 months",
  nav_need:"Needs", nav_modes:"Formats", nav_price:"Contribution", nav_proc:"Process", nav_trans:"Transparency",
  cta_apply:"Apply", cta_apply2:"Apply now",
  hero_eyebrow:"EWAO Professional Volunteering · Waorani territory, Ecuadorian Amazon",
  hero_h1:"Your technical skills, <em>where the community needs them</em>",
  hero_sub:"Work with the Keweriono Association on initiatives the community itself defines: finite projects with a technical brief and a clear deliverable, professional coordination, and a relationship that continues after your stay.",
  hero_cta1:"See open needs", hero_cta2:"Apply in 4 steps",
  fact1:"people per group", fact2:"on-site stay", fact3:"per week, real costs", fact4b:"Remote", fact4:"Open Collaboration, free",
  credit:"Photo: official EWAO Project image bank (ewaoproject.com)", credit2:"Photo: official EWAO Project image bank (ewaoproject.com)",
  q_eyebrow:"Before you continue", q_h2:"This is not voluntourism",
  q_lead:"We don't sell an experience: we open an opportunity to work together. First there is a need defined by the community; then we look for the person with the right skills.",
  q_no_t:"What we don't do", q_no1:"“Help” a community that didn't ask for it", q_no2:"Fill seats or tourist calendars",
  q_no3:"Promise personal transformation or “unique experiences”", q_no4:"Publish images, knowledge or data without community consent", q_no5:"Claim impacts we can't prove",
  q_si_t:"What we do", q_si1:"Need briefs validated by the Keweriono Assembly", q_si2:"Realistic, finite projects with a defined deliverable",
  q_si3:"Two-phase selection based on skills, not volume", q_si4:"Learning both ways: technical knowledge and knowledge of the territory", q_si5:"Remote continuity and an alumni network after your stay",
  m_eyebrow:"How the model works", m_h2:"Who decides, who connects, who contributes",
  m_lead:"Volunteering is one line of the EWAO Model. It respects community governance: the Keweriono Association sets priorities and how many people the territory can host.",
  m1_role:"Decides · source of legitimacy", m1_p:"Waorani community organised in an Assembly. It defines needs, priorities, what is shared and how many people the territory can receive.",
  m2_role:"Connects · coordinates", m2_p:"Turns each need into a publishable brief, selects profiles, coordinates logistics through a standard operating procedure (SOP) and returns results to the territory.",
  m3_t:"Professional volunteering", m3_role:"Contributes skills", m3_p:"Professionals and advanced students who bring a specific skill to initiatives such as water and sanitation, housing, energy or education.",
  m_note:"Volunteering is kept separate from the tourism offer: expectations, protocols and accommodation are different. The stay is community-based and simple.",
  n_eyebrow:"Contribution areas", n_h2:"Needs looking for skills",
  n_lead:"These are the programme's priority areas, currently in a pre-operational phase: the call is open and the pilot group has not yet travelled. Each specific project is published as a brief with leads, the community involved, materials, schedule and final deliverable.",
  st_area:"Priority area", st_dev:"In development", st_ok:"Done", st_proy:"Planned",
  f_perfil:"Profile", f_entregable:"Type of deliverable", f_mod:"Format", f_mod_pres:"On-site (group stay or residency)", f_cta:"Apply to this area",
  f1_t:"Sustainable construction & infrastructure", f1_p:"Civil engineering, bioclimatic architecture, carpentry, natural building.", f1_e:"A finished structure or system, with plans and a maintenance manual for the community.",
  f2_t:"Water, energy & agroecology", f2_p:"Environmental science, hydrology, agronomy, renewable energy.", f2_e:"An operating water filtration system, agroforestry garden or energy installation, handed over.",
  f3_t:"Training & technical education", f3_p:"Pedagogy, micro-project management, basic accounting, participatory methods.", f3_e:"Workshops delivered and training material that stays with the community.", f3_m:"On-site or remote mentoring",
  f4_t:"Communication, data & translation", f4_p:"Design, translation, data analysis, mapping, market research.", f4_e:"A task with a short brief and clear scope; human review whenever cultural content is involved.", f4_m:"Remote · EWAO Open Collaboration", f4_cta:"Collaborate remotely",
  n_callout:"<b>Your field isn't listed?</b> The list isn't exhaustive. Apply anyway: the form compares your profile with current briefs and, if there's no match today, we'll let you know when the community opens one.",
  mo_eyebrow:"Choose your route", mo_h2:"Three ways to collaborate", mo_lead:"The format depends on your availability and on what the need requires — not on what makes the most attractive trip.",
  mo1_t:"Group stay", mo1_d:"2 to 4 weeks · 6–10 people", mo1_1:"Focused work fronts: 1–3 projects per group", mo1_2:"About 5 hours of contribution per day", mo1_3:"Coordination and intercultural mediation included",
  mo1_w:"Best for: advanced students and young professionals; senior experts on short stays.",
  mo2_t:"Residency", mo2_d:"1 to 3 months", mo2_1:"A defined role within a longer-term initiative", mo2_2:"Reduced weekly contribution for long stays", mo2_3:"Over 3 months: tailored agreement",
  mo2_w:"Best for: professionals on a career break or sabbatical with proven experience.",
  mo3_t:"Remote collaboration", mo3_d:"Per task · no travel · free", mo3_1:"Tasks with a short brief and clear scope", mo3_2:"Public credit for your work (with your permission)", mo3_3:"Entry point and continuity for alumni",
  mo3_w:"Best for: design, translation, data, communication and mentoring.", mo_cta:"Choose this route",
  p_eyebrow:"Transparent contribution", p_h2:"Not a donation: it covers real costs",
  p_lead:"Your contribution funds the operation of your stay so that hosting you is not a burden on the community. Here's what it covers and what it doesn't.",
  p_tag:"Standard contribution", p_week:"/ week", p_c1:"Community accommodation", p_c2:"Meals", p_c3:"Internet access (limited)", p_c4:"Coordination and support", p_c5:"Translation and intercultural mediation", p_c6:"Materials and programme operation",
  p_notinc:"<b>Not included:</b> international flights, medical and evacuation insurance (mandatory), visa fees or personal expenses. Transfers to the territory are detailed in each group's brief.",
  c_t:"Estimate your contribution", c_l:"Weeks in the territory:",
  c_n1:"Standard rate. Stays of 1 to 3 months may qualify for a reduced contribution, confirmed at interview.",
  c_split:"<b>Where does it go?</b> The programme SOP allocates 70% to the local economy (materials and logistics support).",
  c_split_st:"In development · to be verified with the pilot report",
  pr_eyebrow:"From interest to continuity", pr_h2:"How the process works", pr_lead:"We automate the repetitive parts so the human team can focus on what matters: the interview, coordination with the community and support.",
  s1_t:"Apply", s1_p:"4-step form with your technical profile and availability.", s2_t:"Phase 1: screening", s2_p:"The system compares your profile with current briefs and assigns a route.",
  s3_t:"Phase 2: interview", s3_p:"Technical and adaptation conversation with the coordination team.", s4_t:"Committee & confirmation", s4_p:"Your fit with the need and the territory's capacity is validated.",
  s5_t:"Contribution & agreements", s5_p:"Payment, operating commitment and liability waiver.", s6_t:"Onboarding", s6_p:"Participant manual, health, insurance, visa and community agreement.",
  s7_t:"Stay", s7_p:"Work on your brief, daily follow-up and logging of hours and progress.", s8_t:"Handover & continuity", s8_p:"Two-way evaluation, delivery of results and transition to the remote network.",
  auto:"Automated", human:"Human",
  co_eyebrow:"Real conditions", co_h2:"What you need to know about the territory",
  co1_t:"Working day", co1_p:"About 5 hours of contribution per day; the rest is shared with community life.",
  co2_t:"Simple accommodation", co2_p:"Community stay, shared meals and basic comforts.",
  co3_t:"Limited connectivity", co3_p:"Internet access is restricted; plan your work to function offline.",
  co4_t:"Humid tropical climate", co4_p:"Heat, humidity, rain and insects. Weather events may change dates and transfers.",
  co5_t:"Health & safety", co5_p:"Mandatory medical and evacuation insurance, emergency protocols and fitness suited to remote environments.",
  fit_y:"It's for you if…", fy1:"You have a specific technical skill and want to apply it to a real need", fy2:"You value cultural exchange and learning from the community", fy3:"You adapt to uncertainty and simple conditions", fy4:"You accept that the community sets priorities and pace",
  fit_n:"It's not for you if…", fn1:"You're looking for a holiday or an adventure", fn2:"You need comfort or constant connectivity", fn3:"You expect a highly structured setting or immediate results", fn4:"You want to photograph or post about community life without permission",
  fo_eyebrow:"Application", fo_h2:"Apply in 4 steps", fo_lead:"It takes about 4 minutes. At the end you'll see your recommended route and receive your EWAO Passport with a QR code.",
  fa_t:"What happens to your data", fa1:"It is stored in EWAO's single CRM, with your explicit consent.", fa2:"An automatic score sorts applications; none is rejected without human review.",
  fa3:"You'll receive a confirmation email with the next steps for your route.", fa4:"We only share your contact with another EWAO line if you authorise it.",
  fa_contact:"Questions? Write to <a href=\"mailto:voluntario@ewaoproject.com\">voluntario@ewaoproject.com</a>",
  st1_t:"How you'd like to collaborate", q_mod:"Which format interests you?", q_mod1:"2–4 weeks", q_mod2:"1–3 months", q_mod3:"Per task, no travel",
  q_disp:"When could you travel?", sel:"Select…", d1:"January – March 2027", d2:"April – June 2027", d3:"July – September 2027", d4:"October – December 2027", d5:"Flexible",
  q_horas:"How many hours per week could you give?", h4:"Per one-off project",
  st2_t:"Your technical skills", q_area:"Main contribution area",
  a1:"Architecture & natural building", a2:"Construction & carpentry", a3:"Water, sanitation & renewable energy", a4:"Agroecology & permaculture", a5:"Biology & environmental science", a6:"Education & pedagogy",
  a7:"Health & community development", a8:"Project management & research", a9:"Communication, media & storytelling", a10:"Design, data & technology", a11:"Translation & languages", a12:"Other",
  q_exp:"Experience in that area", e1:"Advanced student", e2:"1 to 3 years", e3:"3 to 10 years", e4:"More than 10 years",
  q_port:"LinkedIn or portfolio (optional, adds to your score)", q_idioma:"Spanish level", i1:"Native / advanced", i2:"Intermediate", i3:"Basic or none", q_otros:"Other languages", ph_otros:"e.g. English, German",
  st3_t:"Readiness and motivation", q_cond:"Do you accept the conditions in the territory? (5 h per day, community accommodation, limited connectivity, mandatory insurance)",
  yes_acc:"Yes, I accept them", doubts:"I have questions", no_acc:"Not for now",
  q_contrib:"Can you cover the USD 250 weekly contribution?", yes:"Yes", p_apoyo:"I'd seek support (university, employer, grant)", no:"No",
  q_mot:"What could you contribute specifically? Describe a deliverable you know how to produce.",
  q_mot_h:"e.g. “Design and build, together with the community, a rainwater harvesting system for 10 families, with a maintenance manual.”",
  q_canal:"How did you hear about us?", ch1:"University", ch2:"Professional association", ch3:"Alumni or recommendation", ch4:"Social media", ch5:"Search engine (Google or other)", ch6:"Other",
  st4_t:"Your contact details", q_name:"First name", q_last:"Last name", q_email:"Email", q_country:"Country of residence", q_age:"Age range",
  consent:"I agree that EWAO may process my data to evaluate my application and contact me about it. I can request access, correction or deletion at any time.",
  optin:"(Optional) I'd like to receive new need briefs and remote collaboration opportunities.",
  privacy:"Boxes unchecked by default. Data processed under Ecuador's Organic Law on Personal Data Protection and the GDPR for EU residents.",
  back:"← Back", next:"Continue →", send:"Submit application",
  err_choice:"Choose an option.", err_sel:"Select an option.", err_req:"Required field.", err_email:"Enter a valid email.", err_mot:"Please write at least 40 characters.", err_consent:"We need your consent to process the application.",
  res_next:"Next steps (automated):", pass_l:"EWAO collaboration passport", pass_p:"Share your QR: anyone who applies with it is recorded as your referral in the collaborator network.",
  pass_dl:"Download QR", pass_cp:"Copy link", demo_t:"Demo mode:", demo_p:"HubSpot is not yet configured in app.js. This is the record that would be sent to the CRM (also saved in this browser):",
  af_eyebrow:"After your stay", af_h2:"Collaboration doesn't end when you go home",
  af_lead:"Those who return home can keep contributing from there. The on-site experience feeds a stable network of skills for the community.",
  af1_k:"Relate", af1_t:"Two-way evaluation", af1_p:"The community evaluates the contribution and you evaluate the organisation. Both feed into improving the programme.",
  af2_k:"Reactivate", af2_t:"Alumni network", af2_p:"After 90 days we invite you to a remote task matching your profile and to share your passport with colleagues.",
  af3_k:"Continue", af3_p:"Remote tasks with cultural context and human review: translating, designing, analysing data, researching markets.",
  t_eyebrow:"We only communicate what we can prove", t_h2:"Claim registry",
  t_lead:"Every claim on this page has a status and evidence. We follow Directive (EU) 2024/825: no generic environmental claims or “impact” we cannot verify.",
  th_claim:"Claim", th_state:"Status", th_ev:"Evidence (Evidence Hub)",
  cl1:"The programme has a Standard Operating Procedure (SOP) governing costs, risks, group size and work fronts.", cl1_e:"Programme SOP, internally approved <small>(EWAO backing report, 2026; available on request)</small>",
  cl2:"Host communities validated the initial work fronts.", cl2_e:"Backing report, section “Current implementation status” <small>(Luje, 2026)</small>",
  cl3:"The standard contribution is USD 250 per week and includes accommodation, meals, coordination, translation and materials.", cl3_e:"Booklet “Professional Volunteering Programme 2026” <small>(EWAO, 2026)</small>",
  cl4:"70% of the contribution goes to the local economy.", cl4_e:"SOP financial design. <small>To be verified with the pilot group's financial report.</small>",
  cl5:"Pilot group of 6 to 10 participants, scaling to 3–4 groups per year.", cl5_e:"Operating plan in the backing report. <small>Subject to territory capacity and funding.</small>",
  cl6:"Alumni network and EWAO Open Collaboration.", cl6_e:"Joint proposal by Group 04 and Group 06 <small>(UDD, 2026)</small>",
  r1_t:"No charity framing", r1_p:"We talk about collaboration and mutual learning, not “helping”.", r2_t:"No exoticism", r2_p:"Images and stories only with community authorisation.",
  r3_t:"No greenwashing", r3_p:"No “sustainable” or “carbon neutral” without certifiable evidence.", r4_t:"Protected knowledge", r4_p:"Projects involving traditional knowledge trigger a consent and results-return protocol.",
  fq_eyebrow:"FAQ", fq_h2:"What people ask us most",
  fq1:"Why do I pay if I'm contributing my work?", fa1x:"Because hosting you has real costs (food, accommodation, internal transfers, coordination, translation). If they aren't covered, the burden falls on the community. It isn't a donation or a tourist fee: it covers the operation of your stay.",
  fq2:"Do I need a visa?", fa2x:"It depends on your nationality and length of stay. Ecuador offers a temporary residence visa for volunteering linked to recognised organisations; it requires a valid passport, an apostilled criminal record certificate and proof of means. We guide you through your case during onboarding.",
  fq3:"Do I need to speak Spanish?", fa3x:"It helps a lot, but it's not essential. The programme includes translation and intercultural mediation. Your language level is used to prepare materials and the interview.",
  fq4:"Is it safe?", fa4x:"We work with emergency protocols, mandatory medical and evacuation insurance and permanent local coordination. The territory is remote: we explain its conditions honestly before you decide.",
  fq5:"Can I collaborate without travelling?", fa5x:"Yes. Choose the remote collaboration route in the form. You'll receive tasks with a clear scope matching your profile, at no cost.",
  fq6:"Can I take photos or post about my stay?", fa6x:"Only with the community's authorisation and following the community agreement. The images and knowledge of the territory belong to the community.",
  fin_h2:"Do your skills match a need?", fin_p:"Apply in 4 minutes. If there's no matching brief today, we'll let you know when the community opens one.",
  ft_p:"Professional Volunteering is one line of the EWAO Model, developed with the Keweriono Association in Waorani territory, Ecuadorian Amazon.",
  ft_c:"Contact", ft_l:"On this page", ft_b:"© 2026 EWAO Project · Academic prototype, not official, developed by Group 04 (Volunteering) — International Marketing UDD, for adoption by EWAO and the Keweriono Association."
};

/* Textos dinámicos (resultado del formulario) en ambos idiomas */
const DYN = {
  es: {
    step:(n)=>`Paso ${n} de 4`,
    persona:{ voluntario_habilidades:"Voluntario/a de habilidades", profesional_transicion:"Profesional en transición", experto_senior:"Experto/a senior", colaborador_remoto:"Colaborador/a remoto/a" },
    routes:{
      entrevista:{ t:"Pasas a entrevista", p:"Tu perfil encaja con las áreas prioritarias del programa. El equipo de coordinación te contactará para agendar la entrevista técnica (Fase 2).",
        s:["Correo de confirmación con tu pasaporte y resumen de la postulación","Invitación para agendar la entrevista en un plazo de 7 días","Guía previa: condiciones del territorio, seguro y visa"] },
      revision:{ t:"En revisión del equipo", p:"Tu perfil tiene potencial, pero necesitamos revisar con la comunidad si existe una ficha compatible con tu capacidad y fechas.",
        s:["Correo de confirmación con tu pasaporte","Revisión humana de tu perfil frente a las fichas vigentes","Respuesta con la decisión o una propuesta alternativa"] },
      remoto:{ t:"Ruta de colaboración remota", p:"Te proponemos aportar desde tu país a través de EWAO Open Collaboration, con tareas de alcance claro según tu perfil.",
        s:["Correo de bienvenida a la red de colaboración remota","Primer brief de tarea compatible con tu área","Invitación a futuras fichas presenciales si te interesa"] },
      interes:{ t:"Te avisaremos", p:"Hoy no hay una ficha compatible con tu perfil o disponibilidad. Guardamos tu postulación y te escribiremos cuando la comunidad abra una necesidad que encaje.",
        s:["Correo de confirmación con tu pasaporte","Alerta automática cuando se publique una ficha compatible","Opción de colaborar en remoto mientras tanto"] }
    },
    copied:"Enlace copiado", sending:"Enviando…", errSend:"No pudimos conectar con el CRM. Tu postulación quedó guardada en este navegador; también puedes escribir a ",
    calcStd:"Tarifa estándar. Estancias de 1 a 3 meses pueden acceder a una contribución reducida, que se confirma en la entrevista.",
    calcLong:"Referencia a tarifa estándar. Para estancias de 1 a 3 meses aplica una contribución reducida que se confirma en la entrevista.",
    weeks:"semanas"
  },
  en: {
    step:(n)=>`Step ${n} of 4`,
    persona:{ voluntario_habilidades:"Skills volunteer", profesional_transicion:"Professional in transition", experto_senior:"Senior expert", colaborador_remoto:"Remote collaborator" },
    routes:{
      entrevista:{ t:"You move on to interview", p:"Your profile fits the programme's priority areas. The coordination team will contact you to schedule the technical interview (Phase 2).",
        s:["Confirmation email with your passport and application summary","Invitation to schedule the interview within 7 days","Pre-read: territory conditions, insurance and visa"] },
      revision:{ t:"Under team review", p:"Your profile has potential, but we need to check with the community whether there is a brief matching your skills and dates.",
        s:["Confirmation email with your passport","Human review of your profile against current briefs","Reply with a decision or an alternative proposal"] },
      remoto:{ t:"Remote collaboration route", p:"We suggest contributing from your country through EWAO Open Collaboration, with clearly scoped tasks matching your profile.",
        s:["Welcome email to the remote collaboration network","First task brief matching your area","Invitation to future on-site briefs if you're interested"] },
      interes:{ t:"We'll let you know", p:"There's no brief matching your profile or availability today. We've saved your application and will write when the community opens a matching need.",
        s:["Confirmation email with your passport","Automatic alert when a matching brief is published","Option to collaborate remotely in the meantime"] }
    },
    copied:"Link copied", sending:"Sending…", errSend:"We couldn't reach the CRM. Your application was saved in this browser; you can also write to ",
    calcStd:"Standard rate. Stays of 1 to 3 months may qualify for a reduced contribution, confirmed at interview.",
    calcLong:"Shown at the standard rate. Stays of 1 to 3 months qualify for a reduced contribution, confirmed at interview.",
    weeks:"weeks"
  }
};

let LANG = "es";
const ORIG = new Map();
function applyLang(lang) {
  LANG = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n],[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18n || el.dataset.i18nHtml;
    const html = !!el.dataset.i18nHtml;
    if (!ORIG.has(el)) ORIG.set(el, html ? el.innerHTML : el.textContent);
    const val = lang === "en" ? EN[key] : ORIG.get(el);
    if (val == null) return;
    if (html) el.innerHTML = val; else el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    if (!ORIG.has(el)) ORIG.set(el, el.placeholder);
    el.placeholder = lang === "en" ? (EN[el.dataset.i18nPh] || el.placeholder) : ORIG.get(el);
  });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  updateProgress(); updateCalc();
  if (lastResult) renderResult(lastResult, false);
  try { localStorage.setItem("ewao_lang", lang); } catch (e) {}
}
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => { applyLang(b.dataset.lang); track("lang_change", { lang: b.dataset.lang }); }));

/* ---------------------------------------------------------------------
   Navegación, animaciones y eventos de interacción
   --------------------------------------------------------------------- */
const navToggle = document.getElementById("navToggle"), navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => { const o = navLinks.classList.toggle("open"); navToggle.setAttribute("aria-expanded", o); });
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { navLinks.classList.remove("open"); navToggle.setAttribute("aria-expanded", false); }));

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

let fichasSeen = false;
new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !fichasSeen) { fichasSeen = true; track("view_fichas"); } }), { threshold: .3 })
  .observe(document.getElementById("necesidades"));

const scrollMarks = { 70: false, 90: false };
addEventListener("scroll", () => {
  const pct = (scrollY + innerHeight) / document.documentElement.scrollHeight * 100;
  [70, 90].forEach(m => { if (!scrollMarks[m] && pct >= m) { scrollMarks[m] = true; track("scroll_" + m, { percent: m }); } });
}, { passive: true });

// CTAs: medición + preselección de modalidad/área en el formulario
document.querySelectorAll("[data-cta]").forEach(a => a.addEventListener("click", () => {
  track("cta_click", { cta_id: a.dataset.cta });
  if (a.dataset.modo) { const r = document.querySelector(`input[name=modalidad][value="${a.dataset.modo}"]`); if (r) { r.checked = true; onModeChange(); } }
  if (a.dataset.area) { const s = document.getElementById("area"); s.value = a.dataset.area; }
}));
document.querySelectorAll(".faq details").forEach(d => d.addEventListener("toggle", () => { if (d.open) track("faq_open", { question: d.querySelector("summary").textContent }); }));

/* ---------------------------------------------------------------------
   Calculadora de contribución
   --------------------------------------------------------------------- */
const weeks = document.getElementById("weeks");
function updateCalc() {
  const w = +weeks.value, total = w * EWAO_CONFIG.weeklyFee;
  document.getElementById("weeksVal").textContent = w;
  document.getElementById("calcOut").textContent = (w > 4 ? (LANG === "en" ? "up to " : "hasta ") : "") + "USD " + total.toLocaleString(LANG === "en" ? "en-US" : "es-CL");
  document.getElementById("calcNote").textContent = w > 4 ? DYN[LANG].calcLong : DYN[LANG].calcStd;
}
let calcTracked = false;
weeks.addEventListener("input", () => { updateCalc(); if (!calcTracked) { calcTracked = true; track("calc_use"); } });

/* ---------------------------------------------------------------------
   Formulario por pasos
   --------------------------------------------------------------------- */
const form = document.getElementById("volForm");
const steps = [...form.querySelectorAll(".fstep")];
const prevBtn = document.getElementById("prevBtn"), nextBtn = document.getElementById("nextBtn"), submitBtn = document.getElementById("submitBtn");
let cur = 0, started = false, lastResult = null;

function mode() { const r = form.querySelector("input[name=modalidad]:checked"); return r ? r.value : ""; }
function onModeChange() {
  const rem = mode() === "remoto";
  form.querySelectorAll(".only-pres").forEach(el => el.classList.toggle("hidden", rem));
  form.querySelectorAll(".only-rem").forEach(el => el.classList.toggle("hidden", !rem));
}
form.querySelectorAll("input[name=modalidad]").forEach(r => r.addEventListener("change", onModeChange));
form.addEventListener("focusin", () => { if (!started) { started = true; track("form_start"); } });

function updateProgress() {
  document.querySelectorAll(".progress span").forEach((s, i) => s.classList.toggle("on", i <= cur));
  document.getElementById("progLabel").textContent = DYN[LANG].step(cur + 1);
}
function showStep(i) {
  steps.forEach((s, k) => s.classList.toggle("active", k === i));
  cur = i;
  prevBtn.style.visibility = i === 0 ? "hidden" : "visible";
  nextBtn.classList.toggle("hidden", i === steps.length - 1);
  submitBtn.classList.toggle("hidden", i !== steps.length - 1);
  updateProgress();
  document.getElementById("formCard").scrollIntoView({ behavior: "smooth", block: "start" });
}

function val(name) {
  const el = form.elements[name];
  if (!el) return "";
  if (el instanceof RadioNodeList) return el.value;
  if (el.type === "checkbox") return el.checked;
  return (el.value || "").trim();
}
function validateStep(i) {
  let ok = true;
  steps[i].querySelectorAll(".field[data-req]").forEach(f => {
    if (f.closest(".hidden")) { f.classList.remove("invalid"); return; }
    const n = f.dataset.req, v = val(n);
    let good = !!v;
    if (n === "email") good = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    if (n === "motivacion") good = v.length >= 40;
    if (n === "consent") good = v === true;
    f.classList.toggle("invalid", !good);
    if (!good) ok = false;
  });
  const first = steps[i].querySelector(".field.invalid input, .field.invalid select, .field.invalid textarea");
  if (first) first.focus({ preventScroll: false });
  return ok;
}
nextBtn.addEventListener("click", () => { if (validateStep(cur)) { track("form_step", { step: cur + 1, modalidad: mode() }); showStep(cur + 1); } });
prevBtn.addEventListener("click", () => showStep(cur - 1));
form.addEventListener("input", e => { const f = e.target.closest(".field.invalid"); if (f) f.classList.remove("invalid"); });
form.addEventListener("change", e => { const f = e.target.closest(".field.invalid"); if (f) f.classList.remove("invalid"); });

/* ---------------------------------------------------------------------
   Scoring (Fase 1 automática) — ver README para la tabla de puntajes
   --------------------------------------------------------------------- */
const AREA_PRIORITY = { arquitectura: 25, construccion: 25, agua: 25, agroecologia: 25, educacion: 25, ambiental: 18, salud: 15, gestion: 15, comunicacion: 15, datos: 15, traduccion: 12, otra: 5 };
const EXP_PTS = { estudiante: 10, "1-3": 15, "3-10": 20, "10+": 25 };

function computeScore(d) {
  const b = {};
  b.area = AREA_PRIORITY[d.area] || 0;
  b.experiencia = EXP_PTS[d.experiencia] || 0;
  b.evidencia = /^https?:\/\/\S+\.\S+/.test(d.portafolio) ? 5 : 0;
  b.motivacion = d.motivacion.length >= 120 ? 10 : d.motivacion.length >= 40 ? 5 : 0;
  if (d.modalidad === "remoto") {
    b.disponibilidad = { "1-3": 8, "4-8": 15, "9+": 20, proyecto: 12 }[d.horas] || 0;
    b.idioma = d.idioma === "nativo" ? 10 : d.idioma === "intermedio" ? 8 : 6;
    b.ajuste = ["comunicacion", "datos", "traduccion", "gestion", "educacion"].includes(d.area) ? 15 : 5;
  } else {
    b.disponibilidad = d.modalidad === "residencial" ? 15 : 12;
    b.idioma = d.idioma === "nativo" ? 10 : d.idioma === "intermedio" ? 6 : 2;
    b.condiciones = d.condiciones === "si" ? 10 : d.condiciones === "dudas" ? 4 : 0;
    b.contribucion = d.contribucion === "si" ? 10 : d.contribucion === "apoyo" ? 5 : 0;
  }
  const total = Math.min(100, Object.values(b).reduce((a, c) => a + c, 0));
  return { total, breakdown: b };
}
function persona(d) {
  if (d.modalidad === "remoto") return "colaborador_remoto";
  if (d.edad === "55+") return "experto_senior";
  const senior = ["3-10", "10+"].includes(d.experiencia);
  if (senior && (["35-44", "45-54"].includes(d.edad) || d.modalidad === "residencial")) return "profesional_transicion";
  return "voluntario_habilidades";
}
function route(d, score) {
  if (d.modalidad === "remoto") return "remoto";
  if (d.condiciones === "no") return d.area && score >= 30 ? "remoto" : "interes";
  if (d.contribucion === "no") return "remoto";
  if (score >= 70 && d.condiciones === "si") return "entrevista";
  if (score >= 45) return "revision";
  return "interes";
}
function passportId() {
  const c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; let s = "";
  const r = crypto.getRandomValues(new Uint32Array(5));
  r.forEach(n => s += c[n % c.length]);
  return "EWAO-VOL-" + s;
}

/* ---------------------------------------------------------------------
   Envío a HubSpot (Forms API v3, sin claves privadas en el navegador)
   --------------------------------------------------------------------- */
function getCookie(n) { const m = document.cookie.match("(^|;)\\s*" + n + "=([^;]+)"); return m ? decodeURIComponent(m[2]) : ""; }
function origenVisita() {
  const utm = [ORIGIN.utm_source, ORIGIN.utm_medium, ORIGIN.utm_campaign].filter(Boolean).join(" / ");
  if (utm) return utm;
  if (ORIGIN.ref) return "pasaporte_qr";
  try { if (document.referrer) return new URL(document.referrer).hostname; } catch (e) {}
  return "directo";
}
function buildRecord(d, sc, rt, ps, pid) {
  const C = EWAO_CONFIG.common;
  return {
    firstname: d.firstname, lastname: d.lastname, email: d.email, country: d.country,
    [C.rutaInteres]: ORIGIN.ruta || EWAO_CONFIG.rutaInteresDefault,
    [C.grupo]: EWAO_CONFIG.grupoValue,
    [C.origen]: origenVisita(),
    [C.consentComms]: d.optin ? "true" : "false",
    vol_modalidad: d.modalidad, vol_disponibilidad: d.modalidad === "remoto" ? d.horas : d.disponibilidad,
    vol_area_tecnica: d.area, vol_experiencia: d.experiencia, vol_portafolio_url: d.portafolio,
    vol_idioma_espanol: d.idioma, vol_otros_idiomas: d.otros_idiomas,
    vol_condiciones_territorio: d.condiciones || "n/a", vol_contribucion: d.contribucion || "n/a",
    vol_motivacion: d.motivacion, vol_canal_origen: d.canal, vol_rango_edad: d.edad,
    vol_score: sc.total, vol_ruta: rt, vol_buyer_persona: ps, vol_pasaporte_id: pid,
    vol_referido_por: ORIGIN.ref || "", vol_idioma_landing: LANG
  };
}
async function sendToHubspot(rec, consentText) {
  const host = EWAO_CONFIG.hubspotRegion === "eu1" ? "api-eu1.hsforms.com" : "api.hsforms.com";
  const url = `https://${host}/submissions/v3/integration/submit/${EWAO_CONFIG.hubspotPortalId}/${EWAO_CONFIG.hubspotFormGuid}`;
  const body = {
    fields: Object.entries(rec).filter(([k, v]) => v !== "" && v != null && (!EWAO_CONFIG.hubspotFields || EWAO_CONFIG.hubspotFields.includes(k))).map(([name, value]) => ({ objectTypeId: "0-1", name, value: String(value) })),
    context: { hutk: getCookie("hubspotutk") || undefined, pageUri: location.href, pageName: document.title },
    legalConsentOptions: { consent: { consentToProcess: true, text: consentText } }
  };
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error("HubSpot " + res.status + " " + (await res.text()).slice(0, 300));
  return res.json();
}
function saveLocal(rec) {
  try { const a = JSON.parse(localStorage.getItem("ewao_vol_leads") || "[]"); a.push({ fecha: new Date().toISOString(), ...rec }); localStorage.setItem("ewao_vol_leads", JSON.stringify(a)); } catch (e) {}
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!validateStep(cur)) return;
  const d = {};
  ["modalidad","disponibilidad","horas","area","experiencia","portafolio","idioma","otros_idiomas","condiciones","contribucion","motivacion","canal","firstname","lastname","email","country","edad","consent","optin"].forEach(n => d[n] = val(n));
  if (d.modalidad === "remoto") { d.condiciones = ""; d.contribucion = ""; d.disponibilidad = ""; }
  const sc = computeScore(d), ps = persona(d), rt = route(d, sc.total), pid = passportId();
  const rec = buildRecord(d, sc, rt, ps, pid);
  submitBtn.disabled = true; submitBtn.textContent = DYN[LANG].sending;

  let mode = "demo", error = null;
  saveLocal(rec);
  if (EWAO_CONFIG.hubspotPortalId && EWAO_CONFIG.hubspotFormGuid) {
    try { await sendToHubspot(rec, document.querySelector("[data-i18n=consent]").textContent); mode = "hubspot"; }
    catch (err) { error = err; console.error(err); }
  }
  track("form_submit", { ruta: rt, score: sc.total, modalidad: d.modalidad, persona: ps, area: d.area, crm: mode });
  track("generate_lead", { ruta: rt, value: rt === "entrevista" ? 3 : rt === "revision" ? 2 : 1 });

  lastResult = { rec, sc, rt, ps, pid, mode, error };
  form.classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  renderResult(lastResult, true);
  document.getElementById("formCard").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ---------------------------------------------------------------------
   Resultado + Pasaporte QR
   --------------------------------------------------------------------- */
function referralUrl(pid) {
  const base = location.href.split("#")[0].split("?")[0];
  return `${base}?ref=${pid}&utm_source=pasaporte&utm_medium=qr&utm_campaign=referidos_voluntariado#postular`;
}
function drawQR(text) {
  const q = new window.EwaoQR(-1, window.EwaoQRLevel.M); q.addData(text); q.make();
  const n = q.getModuleCount(), cv = document.getElementById("qr"), size = 264, ctx = cv.getContext("2d");
  cv.width = size; cv.height = size;
  const quiet = 2, cell = size / (n + quiet * 2);
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, size, size); ctx.fillStyle = "#174133";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c))
    ctx.fillRect(Math.floor((c + quiet) * cell), Math.floor((r + quiet) * cell), Math.ceil(cell), Math.ceil(cell));
}
function renderResult(R, animate) {
  const t = DYN[LANG], r = t.routes[R.rt];
  document.getElementById("resPersona").textContent = t.persona[R.ps];
  document.getElementById("resTitle").textContent = r.t;
  document.getElementById("resText").textContent = r.p;
  document.getElementById("resSteps").innerHTML = r.s.map(x => `<li>${x}</li>`).join("");
  document.getElementById("scoreNum").textContent = R.sc.total;
  const bar = document.getElementById("scoreBar");
  if (animate) { bar.style.width = "0"; requestAnimationFrame(() => setTimeout(() => bar.style.width = R.sc.total + "%", 60)); } else bar.style.width = R.sc.total + "%";
  document.getElementById("passId").textContent = R.pid;
  drawQR(referralUrl(R.pid));
  const demo = document.getElementById("demoBox");
  if (R.mode !== "hubspot") {
    demo.classList.remove("hidden");
    document.getElementById("demoPayload").textContent = JSON.stringify({ ...R.rec, _score_detalle: R.sc.breakdown }, null, 2);
    if (R.error) demo.insertAdjacentHTML("afterbegin", `<p style="color:#b42318">${t.errSend}<a href="mailto:${EWAO_CONFIG.contactEmail}">${EWAO_CONFIG.contactEmail}</a></p>`);
  }
}
document.getElementById("dlQr").addEventListener("click", () => {
  const a = document.createElement("a"); a.download = (lastResult ? lastResult.pid : "pasaporte-ewao") + ".png";
  a.href = document.getElementById("qr").toDataURL("image/png"); a.click(); track("qr_download");
});
document.getElementById("cpLink").addEventListener("click", async e => {
  const url = referralUrl(lastResult.pid);
  try { await navigator.clipboard.writeText(url); } catch (err) { prompt("URL", url); }
  const b = e.currentTarget, o = b.textContent; b.textContent = DYN[LANG].copied; setTimeout(() => b.textContent = o, 1800);
  track("passport_share");
});

/* ---------------------------------------------------------------------
   Mini CRM local para la demo (abrir la página con #crm-demo)
   --------------------------------------------------------------------- */
function renderCRM() {
  const sec = document.getElementById("crm-demo");
  if (location.hash !== "#crm-demo") { sec.classList.add("hidden"); return; }
  sec.classList.remove("hidden");
  let a = []; try { a = JSON.parse(localStorage.getItem("ewao_vol_leads") || "[]"); } catch (e) {}
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  document.getElementById("crmRows").innerHTML = a.length ? a.slice().reverse().map(l => `<tr><td>${esc(l.fecha.slice(0,16).replace("T"," "))}</td><td>${esc(l.vol_pasaporte_id)}</td><td>${esc(l.firstname)} ${esc(l.lastname)}</td><td>${esc(l.country)}</td><td>${esc(l.vol_modalidad)}</td><td>${esc(l.vol_area_tecnica)}</td><td>${esc(l.vol_buyer_persona)}</td><td><b>${esc(l.vol_score)}</b></td><td>${esc(l.vol_ruta)}</td><td>${esc(l.vol_canal_origen)}</td><td>${esc(l.vol_referido_por)}</td></tr>`).join("") : `<tr><td colspan="11">Sin postulaciones guardadas en este navegador.</td></tr>`;
  sec.scrollIntoView();
}
document.getElementById("crmExport").addEventListener("click", () => {
  let a = []; try { a = JSON.parse(localStorage.getItem("ewao_vol_leads") || "[]"); } catch (e) {}
  if (!a.length) return;
  const cols = Object.keys(a[0]);
  const csv = [cols.join(",")].concat(a.map(r => cols.map(c => `"${String(r[c] ?? "").replace(/"/g, '""')}"`).join(","))).join("\n");
  const l = document.createElement("a"); l.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv" })); l.download = "postulaciones-voluntariado-demo.csv"; l.click();
});
document.getElementById("crmClear").addEventListener("click", () => { localStorage.removeItem("ewao_vol_leads"); renderCRM(); });
addEventListener("hashchange", renderCRM);

/* ---------------------------------------------------------------------
   Inicio
   --------------------------------------------------------------------- */
(function init() {
  let l = "es";
  try { l = qs.get("lang") || localStorage.getItem("ewao_lang") || ((navigator.language || "es").startsWith("es") ? "es" : "en"); } catch (e) {}
  applyLang(l === "en" ? "en" : "es");
  updateCalc(); onModeChange(); renderCRM();
  if (ORIGIN.ref) { const c = document.getElementById("canal"); c.value = "referido"; }
  track("page_view_landing", { lang: LANG, ref: ORIGIN.ref || "", utm_source: ORIGIN.utm_source || "" });
})();
