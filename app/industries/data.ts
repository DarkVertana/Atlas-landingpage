import type { IconKey } from "./icons";

/* Industry landing-page content. One typed record per industry, consumed by the
   shared /industries/[slug] template so every page renders on the same shape as
   the service pages. Copy is FCRA-safe: Atlas provides consumer reports, clients
   make decisions; no accuracy/speed absolutes; database results are separated
   from the complete report. No em dashes anywhere in copy. */

export type IndustryFeature = { title: string; desc: string; icon: IconKey };
export type IndustryFaq = { q: string; a: string };

export type Industry = {
  slug: string;
  /** Menu label, e.g. "Staffing agencies" */
  name: string;
  metaTitle: string;
  metaDescription: string;
  /** package-recommender ?industry= key, for the "See recommended package" link */
  recommender: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    steps: string[];
    image: string;
  };
  /** "What matters here" feature list (exactly 6) */
  featuresTitle: string;
  featuresIntro: string;
  features: IndustryFeature[];
  showcase: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    bullets: string[];
  };
  faqs: IndustryFaq[];
};

export const INDUSTRIES: Record<string, Industry> = {
  "staffing-agencies": {
    slug: "staffing-agencies",
    name: "Staffing agencies",
    metaTitle: "Background Checks for Staffing Agencies | Atlas Screening",
    metaDescription:
      "High-volume, fast-turnaround background screening built for staffing and recruiting firms. Bulk ordering, applicant-guided intake, and reusable reports across placements.",
    recommender: "staffing",
    hero: {
      eyebrow: "For staffing agencies",
      title: "Screening that keeps pace with your req load.",
      description:
        "Staffing runs on speed and volume. Atlas gives recruiters bulk ordering, applicant-guided intake, and a clear view of every check in flight, so placements are never held up waiting on a report.",
      steps: ["Order in bulk", "Applicant intake", "Track status", "Place faster"],
      image: "/assets/images/Employment-verification.webp",
    },
    featuresTitle: "Built for the way agencies actually hire.",
    featuresIntro:
      "Recruiters juggle dozens of candidates across many clients at once. These are the pieces of Atlas that matter most when volume is the job.",
    features: [
      {
        title: "Bulk and batch ordering",
        desc: "Kick off checks for a whole candidate list at once, then track them together instead of one order at a time.",
        icon: "chart",
      },
      {
        title: "Applicant-guided intake",
        desc: "Candidates enter and consent to their own information through a guided flow, which cuts recruiter data entry and rejections for bad data.",
        icon: "id",
      },
      {
        title: "Fast database results",
        desc: "National criminal database and identity results return quickly, so you can move on early signal while verified court records are confirmed.",
        icon: "clock",
      },
      {
        title: "Reusable across placements",
        desc: "When a candidate moves between assignments, prior results stay on file, so you are not paying to re-screen the same person needlessly.",
        icon: "refresh",
      },
      {
        title: "Client-ready packages",
        desc: "Save a screening package per client so every requisition runs the exact checks that client requires, without rebuilding it each time.",
        icon: "briefcase",
      },
      {
        title: "Compliance handled",
        desc: "Standalone disclosure, written authorization, and the adverse-action workflow are built in, so high volume never means cutting compliance corners.",
        icon: "shield",
      },
    ],
    showcase: {
      eyebrow: "In the product",
      title: "Every candidate,",
      highlight: "one live queue.",
      description:
        "See who has been invited, who is still completing intake, and which reports are ready, across every client you staff for, in a single dashboard.",
      bullets: [
        "Real-time status on every check in flight",
        "Bulk invitations and reusable client packages",
        "Automatic alerts the moment a report is ready",
      ],
    },
    faqs: [
      {
        q: "Can we order checks in bulk for a candidate list?",
        a: "Yes. You can invite a full list of candidates at once and track their checks together. Each candidate completes their own guided intake and consent, so the recruiter is not entering personal data by hand.",
      },
      {
        q: "How fast do results come back?",
        a: "National criminal database and identity results typically return quickly. County court verifications and other manual searches can take longer depending on the jurisdiction. Atlas separates fast database results from the complete verified report so you always know what is confirmed.",
      },
      {
        q: "Can each client have its own screening package?",
        a: "Yes. You can save a package per client so every requisition automatically runs the checks that client requires. That keeps screening consistent when recruiters are moving between many accounts.",
      },
      {
        q: "Who makes the hiring decision?",
        a: "Your agency and your client do. Atlas is a Consumer Reporting Agency that furnishes the report; it does not make or recommend hiring decisions. When a report may lead to an adverse decision, the pre-adverse and adverse-action process applies.",
      },
      {
        q: "Is applicant consent handled for us?",
        a: "Yes. Atlas collects standalone disclosure and written authorization as part of the applicant flow, with timestamped consent stored on the report. Screening always requires a permissible purpose and the candidate's authorization.",
      },
    ],
  },

  "healthcare": {
    slug: "healthcare",
    name: "Healthcare",
    metaTitle: "Background Checks for Healthcare Employers | Atlas Screening",
    metaDescription: "FCRA-compliant background screening for hospitals, clinics, home health, and senior care. Sanctions and exclusion list checks, license verification, and ongoing monitoring for credentialed staff.",
    recommender: "healthcare",
    hero: {
      eyebrow: "For healthcare",
      title: "Screening built for a duty of care.",
      description: "Healthcare hiring carries real responsibility to patients and residents. Atlas gives your team sanctions and exclusion list checks, license verification, and ongoing monitoring, so credentialed staff stay cleared to serve the people who depend on them.",
      steps: ["Verify credentials", "Screen sanctions", "Monitor staff", "Hire with care"],
      image: "/assets/images/about-team.jpg",
    },
    featuresTitle: "The checks healthcare hiring actually depends on.",
    featuresIntro: "Clinical and support roles put staff close to vulnerable patients, so screening has to reach past a basic criminal check. These are the parts of Atlas that matter most in care settings.",
    features: [
      { title: "Sanctions and exclusion lists", desc: "Screen candidates against healthcare sanctions and exclusion lists so you can identify individuals barred from federally funded programs before they join your staff.", icon: "shield" },
      { title: "License and credential checks", desc: "Verify professional licenses for nurses, therapists, and clinical staff against issuing sources to confirm they are active and in good standing at the time of hire.", icon: "badge" },
      { title: "Ongoing staff monitoring", desc: "Keep active credentialed staff under continuous review so new sanctions, exclusions, or license changes surface between annual reviews rather than at renewal.", icon: "refresh" },
      { title: "Drug screening coordination", desc: "Order relevant drug screening alongside the background check and track collection and results in one place, without chasing separate vendors.", icon: "doc" },
      { title: "Criminal record searches", desc: "Search county, state, and multi-jurisdiction sources, with database hits confirmed at the source before they appear on the final verified report.", icon: "search" },
      { title: "Compliant adverse action", desc: "Run pre-adverse and adverse action steps with guided notices and required waiting periods, keeping consent and permissible purpose documented throughout.", icon: "scale" },
    ],
    showcase: {
      eyebrow: "In the product",
      title: "Cleared to care,",
      highlight: "and monitored after.",
      description: "A clean report at hire is a starting point, not the finish. Atlas keeps credentialed staff under ongoing review so changes in license status, sanctions, or exclusions reach you while someone is still on shift, giving you time to act before patients are affected.",
      bullets: [
        "Continuous monitoring flags new sanctions and exclusions for active staff",
        "License status tracked against issuing sources through each credential period",
        "Consent and permissible purpose preserved across the initial check and monitoring",
      ],
    },
    faqs: [
      { q: "Do you screen against healthcare sanctions and exclusion lists?", a: "Yes. We check candidates against healthcare sanctions and exclusion lists that identify individuals barred from participating in federally funded programs. This helps you spot excluded individuals before hire and keep them out of roles tied to reimbursed care. Your team reviews the report and decides how to proceed." },
      { q: "Can you verify professional licenses for clinical staff?", a: "We verify professional licenses against issuing sources to confirm status and standing at the time of the check. This covers nurses, therapists, and other credentialed roles where an active license is a condition of the position. We report what the source shows, and the hiring decision remains yours." },
      { q: "How does ongoing monitoring work for active staff?", a: "With candidate consent and a permissible purpose, we can keep active staff under continuous review so new sanctions, exclusions, or record changes surface between formal reviews. When something appears, it is reported to you for evaluation. Monitoring supports your process but does not replace your own judgment on employment." },
      { q: "Are fast database results the same as the final report?", a: "No. Early database results give you a quick preliminary view, but they are not confirmed. We verify hits at the source before they appear on the completed report, so database speed and verified accuracy stay separate. Please base decisions on the final verified report rather than preliminary data." },
      { q: "How is adverse action handled if a report affects a hiring decision?", a: "If information in a report may lead you to decline a candidate, the FCRA adverse action process applies. We help you send the pre-adverse notice with a copy of the report, observe the required waiting period, and issue the final notice. Atlas provides the consumer report while your organization makes the employment decision." },
    ],
  },

  "transportation-logistics": {
    slug: "transportation-logistics",
    name: "Transportation & logistics",
    metaTitle: "Background Checks for Transportation & Logistics | Atlas Screening",
    metaDescription: "Driver screening built for fleets, delivery, and gig operations. Motor vehicle records by state, CDL and endorsement checks, and continuous MVR monitoring for active drivers.",
    recommender: "transportation",
    hero: {
      eyebrow: "For transportation & logistics",
      title: "Screening built for the people behind the wheel.",
      description: "Drivers carry your cargo, your brand, and real safety risk. Atlas pulls motor vehicle records by state, verifies CDL class and endorsements, and monitors active drivers so your fleet stays road ready without slowing down hiring.",
      steps: ["Collect consent", "Pull MVR & CDL", "Review the report", "Monitor active drivers"],
      image: "/assets/images/Motor-vehicle-records.webp",
    },
    featuresTitle: "The checks that matter for a moving fleet.",
    featuresIntro: "Transportation hiring turns on driving history and license standing, not just a name and a date. These are the parts of Atlas that speak directly to the road.",
    features: [
      { title: "State motor vehicle records", desc: "Atlas requests motor vehicle records from state DMV sources to surface violations, suspensions, and license status for your review as part of a consumer report.", icon: "car" },
      { title: "CDL class & endorsements", desc: "Confirm commercial license class and endorsements such as hazmat, tanker, or passenger, so you can match a driver to the routes and equipment the role requires.", icon: "badge" },
      { title: "Continuous MVR monitoring", desc: "Enroll active drivers in ongoing monitoring so new violations or license changes surface between annual reviews, giving your safety team a current picture.", icon: "refresh" },
      { title: "Driver-friendly record format", desc: "Reports follow a record format oriented to how transportation employers read driving history, keeping MVR details organized for faster safety review.", icon: "doc" },
      { title: "Drug screening coordination", desc: "Coordinate drug and alcohol testing for safety sensitive roles alongside the background report, so screening for a driver moves as one workflow.", icon: "shield" },
      { title: "Fast database results, verified report", desc: "Preliminary database results can return quickly, while the completed report reflects records confirmed against their sources before you rely on it.", icon: "clock" },
    ],
    showcase: {
      eyebrow: "In the product",
      title: "Every driver,",
      highlight: "one safety view.",
      description: "Atlas keeps each driver's MVR, license standing, and screening status in a single record, so recruiters and safety staff work from the same information. You decide who is cleared to drive; Atlas gives you the verified report behind that call.",
      bullets: [
        "MVR, CDL, and screening results together per driver",
        "Monitoring alerts when a driver's record changes",
        "Consent and permissible purpose captured before every pull",
      ],
    },
    faqs: [
      { q: "How does Atlas pull motor vehicle records?", a: "Atlas requests motor vehicle records from state DMV sources based on the states a driver has been licensed in. Results are compiled into the consumer report for your review. Because each state maintains its own records, coverage and detail can vary by jurisdiction." },
      { q: "Can Atlas verify CDL class and endorsements?", a: "Yes. Atlas can confirm a driver's commercial license class and endorsements, such as hazmat, tanker, or passenger, as reflected in the motor vehicle record. This helps you match drivers to the equipment and routes a role requires. The hiring decision remains yours to make." },
      { q: "What is continuous MVR monitoring?", a: "Continuous monitoring enrolls active drivers so that new violations, suspensions, or license status changes can surface between scheduled reviews. It supplements, rather than replaces, your periodic MVR pulls. Any adverse information is provided for your review under a permissible purpose." },
      { q: "Do you handle drug and alcohol screening for drivers?", a: "Atlas can coordinate drug and alcohol testing for safety sensitive driver roles alongside the background report, keeping the process in one workflow. Testing programs and their requirements vary, so we align the setup to the program your operation follows." },
      { q: "How fast are results, and when can I act on them?", a: "Preliminary database results can return quickly, but the completed report reflects records confirmed against their sources and may take longer. You should rely on the finalized report before making a decision. If that report may lead to an adverse action, follow the FCRA adverse action process, including notice and a copy of the report." },
    ],
  },

  "financial-services": {
    slug: "financial-services",
    name: "Financial services",
    metaTitle: "Background Checks for Financial Services | Atlas Screening",
    metaDescription: "FCRA-regulated background screening for banks, credit unions, fintech, insurance, and fiduciary roles. Federal and county criminal, global watchlist and sanctions screening, verifications, and credit checks where permitted.",
    recommender: "financial",
    hero: {
      eyebrow: "For financial services",
      title: "Screening built for regulated, fiduciary roles.",
      description: "Banks, credit unions, fintech, and insurers hold money and trust in the same hands. Atlas pairs federal and county criminal searches with global watchlist and sanctions screening, so you can review candidates for regulated roles with the detail those roles demand.",
      steps: ["Collect consent", "Screen and verify", "Review the report", "You decide"],
      image: "/assets/services/credit-report.webp",
    },
    featuresTitle: "The checks that matter when money is on the line.",
    featuresIntro: "Financial roles carry duties that reach beyond the usual hire. These are the parts of Atlas that regulated and fiduciary positions lean on most.",
    features: [
      { title: "Federal and county criminal", desc: "Atlas searches federal district records alongside county-level courts, giving you a layered criminal history view rather than a single database snapshot.", icon: "scale" },
      { title: "Global watchlist and sanctions", desc: "Screen candidates against sanctions lists, enforcement actions, and politically exposed person data drawn from international and domestic sources.", icon: "globe" },
      { title: "Employment and education", desc: "Verify past employers, titles, dates, and claimed degrees, so the record behind a finance resume matches what the candidate reported.", icon: "badge" },
      { title: "Credit checks where permitted", desc: "For qualifying finance roles, Atlas can include a credit-based report, subject to permissible purpose and the state law limits noted in our FAQs.", icon: "chart" },
      { title: "Consent and permissible purpose", desc: "Atlas guides each order through disclosure, authorization, and permissible-purpose steps before any report is compiled.", icon: "lock" },
      { title: "Adverse-action support", desc: "When a report may inform a negative decision, Atlas supplies the notices and timing structure the FCRA adverse-action process requires.", icon: "shield" },
    ],
    showcase: {
      eyebrow: "In the product",
      title: "Fast database hits,",
      highlight: "verified reports to follow.",
      description: "Atlas separates quick database results from the fully verified report so your team sees early signals without mistaking them for a finished check. Watchlist, criminal, and verification results arrive as each source confirms, and the compiled report reflects what has actually been reviewed.",
      bullets: [
        "Early database results flagged as preliminary, not final",
        "Watchlist and sanctions screening across domestic and international sources",
        "Verified criminal and employment findings compiled into one report",
      ],
    },
    faqs: [
      { q: "Can we run credit checks on every financial hire?", a: "Not uniformly. Credit-based employment decisions are restricted in roughly 11 states, and permissible purpose plus state law govern when a credit report may be used. Atlas can include credit reports for qualifying roles where the law allows, but the rules vary by state and position rather than applying nationwide." },
      { q: "What does watchlist and sanctions screening cover?", a: "Atlas checks candidates against sanctions lists, enforcement and regulatory actions, and politically exposed person data from domestic and international sources. These results are consumer report information for you to review. Atlas provides the findings, and your team makes the hiring decision." },
      { q: "How do fast database results differ from the final report?", a: "Database searches can surface early signals quickly, but they are not a verified conclusion. Atlas confirms hits against source records before they appear in the compiled report, so preliminary database results and the verified report stay clearly separate." },
      { q: "Do we still need candidate consent for regulated roles?", a: "Yes. Every check requires clear disclosure, written authorization, and a permissible purpose before Atlas compiles a report, and this applies to fiduciary and regulated positions as well. Atlas guides each order through those steps." },
      { q: "What happens if a report may affect our decision?", a: "When a report may inform an adverse decision, the FCRA sets out a pre-adverse and adverse-action process, including notice and a window for the candidate to respond. Atlas supplies the supporting notices and timing structure, and your team makes the final call." },
    ],
  },

  "retail-hospitality": {
    slug: "retail-hospitality",
    name: "Retail & hospitality",
    metaTitle: "Background Checks for Retail & Hospitality | Atlas Screening",
    metaDescription: "High-volume, cost-efficient background screening for retail, restaurants, hotels, and events. Identity and national criminal core checks, fast database results, and mobile applicant intake for seasonal hourly hiring.",
    recommender: "retail",
    hero: {
      eyebrow: "For retail & hospitality",
      title: "Screening built for high-volume hourly hiring.",
      description: "Stores, restaurants, hotels, and events hire in waves, often against a clock. Atlas pairs identity and national criminal core checks with fast database results and mobile-friendly intake, so your team can keep filling shifts while every report is handled with care.",
      steps: ["Order at volume", "Applicant intake", "Fast database results", "Verified report"],
      image: "/assets/images/call-center-agent-office-helping-customers-by-answering-questions.webp",
    },
    featuresTitle: "Made for seasonal peaks and steady turnover.",
    featuresIntro: "Retail and hospitality teams hire constantly, from holiday rushes to new store openings. These are the parts of Atlas that matter most when speed and cost both count.",
    features: [
      { title: "Volume ordering at scale", desc: "Launch checks for many candidates at once during seasonal peaks and openings, with pricing structured to stay efficient as your hiring volume grows.", icon: "cart" },
      { title: "Identity and criminal core", desc: "Start with identity confirmation and a national criminal database search, the core checks most retail and hospitality roles rely on before an offer.", icon: "id" },
      { title: "Fast database results", desc: "Database searches return quickly so recruiters can keep moving, while flagged items continue through verification before they appear on the final report.", icon: "clock" },
      { title: "Mobile applicant intake", desc: "Candidates provide consent and enter their information from a phone in minutes, a fit for hourly applicants who rarely sit at a desk.", icon: "users" },
      { title: "Fair-chance support", desc: "Ban-the-box and fair-chance rules vary by state and city, so Atlas structures checks and adverse-action steps to help you follow the rules where you hire.", icon: "scale" },
      { title: "Cash and customer trust", desc: "For cash-handling and customer-facing roles, screening gives you consistent, documented information to support hiring decisions across every location.", icon: "shield" },
    ],
    showcase: {
      eyebrow: "In the product",
      title: "Every hire,",
      highlight: "one clear queue.",
      description: "Retail and hospitality hiring rarely slows down, so Atlas keeps every candidate visible in one place. Track who has finished intake, whose database results are back, and which reports are fully verified, across stores, restaurants, and event staffing.",
      bullets: [
        "See status for every candidate and location in a single view",
        "Separate fast database results from the completed, verified report",
        "Move quickly on clear reports while flagged items finish verification",
      ],
    },
    faqs: [
      { q: "Can Atlas keep up with seasonal hiring spikes?", a: "Yes. Atlas supports volume ordering so you can launch many checks at once during holiday rushes, new openings, and event staffing. Mobile intake helps candidates start quickly, and pricing is structured to stay efficient as your volume grows." },
      { q: "Which checks are typical for retail and hospitality roles?", a: "Most teams start with identity confirmation and a national criminal database search as the core. Depending on the role, you may add checks such as employment history or motor vehicle records. Atlas reports the information, and your team decides which checks fit each position." },
      { q: "How fast will we get results?", a: "Database searches often return quickly, which helps recruiters move on time-sensitive shifts. Items that need verification continue through review before they appear on the final report, so fast database results and the completed verified report are separate stages." },
      { q: "How do ban-the-box and fair-chance laws affect our hiring?", a: "Ban-the-box and fair-chance rules vary by state and city, and they can affect when you may ask about criminal history and how you handle records. Atlas helps you structure checks and adverse-action steps to follow the rules where you hire, but final hiring decisions are always yours." },
      { q: "What consent do we need before screening an applicant?", a: "Under the FCRA, you need the applicant's written authorization and a clear disclosure before a background check, and a permissible purpose for requesting it. Atlas builds consent into the applicant intake flow. If a report may lead to an adverse decision, the adverse-action process applies." },
    ],
  },

  "education": {
    slug: "education",
    name: "Education",
    metaTitle: "Background Checks for Education | Atlas Screening",
    metaDescription: "FCRA-regulated background screening for K-12 districts, universities, childcare, and edtech. Sex offender registry, credential and license verification, and ongoing monitoring for staff and volunteers around students.",
    recommender: "education",
    hero: {
      eyebrow: "For education",
      title: "Screening built for a duty of care around students.",
      description: "Schools, districts, and childcare programs place staff and volunteers near minors every day. Atlas pairs fast database results with verified reports covering criminal history, registries, and credentials, so your team can make informed placement decisions.",
      steps: ["Collect consent", "Run the checks", "Review the report", "Monitor active staff"],
      image: "/assets/images/careers-work.jpg",
    },
    featuresTitle: "Screening that respects the trust placed in your staff.",
    featuresIntro: "Educators, aides, coaches, and volunteers work closely with students, so the checks that matter here go beyond a single criminal search. These are the pieces of Atlas that education programs rely on most.",
    features: [
      { title: "Sex offender registry search", desc: "Atlas searches available state and national sex offender registries so your program can weigh this information before placing an individual near students.", icon: "shield" },
      { title: "Federal and county criminal", desc: "Criminal history is searched at both federal and county levels, since serious matters can surface in courts that a single database does not reach.", icon: "search" },
      { title: "Credential and education checks", desc: "Atlas verifies degrees, teaching credentials, and coursework claimed by instructors, so your district can confirm the qualifications behind a candidate.", icon: "book" },
      { title: "Professional license verification", desc: "For roles that require a teaching or professional license, Atlas confirms status and standing with the issuing authority where records are available.", icon: "badge" },
      { title: "Ongoing staff monitoring", desc: "Active staff can be enrolled in ongoing monitoring, which surfaces new criminal records over time rather than relying on a single point-in-time check.", icon: "refresh" },
      { title: "Volunteer screening at scale", desc: "Coaches, chaperones, and classroom volunteers can be screened through workflows sized for the lighter footprint and higher volume these roles bring.", icon: "users" },
    ],
    showcase: {
      eyebrow: "In the product",
      title: "Every staff member and volunteer,",
      highlight: "screened with care.",
      description: "Education programs juggle full-time educators, seasonal coaches, and occasional volunteers, each with different requirements. Atlas keeps consent, results, and monitoring status organized in one place, so your team always knows where a check stands and what still needs review before a placement.",
      bullets: [
        "Consent capture and permissible purpose documented for every applicant",
        "Registry, criminal, and credential results gathered into one clear report",
        "Ongoing monitoring flags new records for staff already working with students",
      ],
    },
    faqs: [
      { q: "What checks are typical for education roles?", a: "Common searches include sex offender registry screening, federal and county criminal history, and verification of education, credentials, and professional licenses for instructors. The right combination depends on the role and on state requirements, which vary. Atlas can help you build a package suited to each position, though your program decides which checks to run." },
      { q: "How does ongoing monitoring work for active staff?", a: "Staff already working with students can be enrolled in ongoing monitoring, which periodically checks for new criminal records rather than relying only on a check run at hire. When a new record surfaces, Atlas reports it to you. Your program then reviews the information and decides how to proceed, following adverse action steps where they apply." },
      { q: "Are database results the same as a completed report?", a: "No. Fast database searches offer an early view and can flag records worth a closer look, but they are not a substitute for a verified report. Atlas confirms relevant hits against primary sources such as court records before they become part of the final report, so decisions rest on verified information." },
      { q: "Do we need consent before screening staff or volunteers?", a: "Yes. Under the FCRA, you must obtain written consent and have a permissible purpose before Atlas runs a background check, and this applies to volunteers as well as paid staff. Atlas provides intake that captures consent and documents it. If a report may lead to an unfavorable decision, adverse action steps also apply." },
      { q: "Does Atlas decide who we can hire or allow to volunteer?", a: "No. Atlas is a consumer reporting agency that gathers and verifies information and delivers a report. Your district, school, or program reviews that report and makes the hiring or placement decision. Because state requirements vary, we encourage you to confirm your obligations with counsel when setting your standards." },
    ],
  },

  "nonprofit-volunteer": {
    slug: "nonprofit-volunteer",
    name: "Nonprofit & volunteer",
    metaTitle: "Background Checks for Nonprofits & Volunteers | Atlas Screening",
    metaDescription: "Affordable background screening for nonprofits and volunteer programs. Sex offender registry, national criminal core, self-guided intake, and optional ongoing monitoring for budget-conscious teams.",
    recommender: "nonprofit",
    hero: {
      eyebrow: "For nonprofits and volunteer programs",
      title: "Duty of care your budget can actually carry.",
      description: "Volunteers and staff often work closely with children, elders, and other vulnerable people. Atlas gives mission-driven teams affordable per-check screening, self-guided intake, and coverage that fits both a single hire and a full volunteer roster.",
      steps: ["Invite the applicant", "Applicant completes intake", "Review the report", "Decide with care"],
      image: "/assets/images/about-work.jpg",
    },
    featuresTitle: "Screening that respects the mission and the budget.",
    featuresIntro: "Nonprofits carry real responsibility for the people they serve, usually with limited staff and limited funds. These are the parts of Atlas that matter most when you are protecting a community on a tight budget.",
    features: [
      { title: "Affordable per-check pricing", desc: "Pay per screening rather than committing to heavy contracts, so small teams and seasonal programs can screen everyone who needs it without straining the budget.", icon: "heart" },
      { title: "Sex offender registry search", desc: "Search multi-state sex offender registry sources alongside your criminal checks, a core safeguard when volunteers and staff serve children, elders, and other vulnerable groups.", icon: "shield" },
      { title: "National criminal core", desc: "A broad national criminal database search gives fast preliminary results, which Atlas then works to verify at the source before it appears on the finished report.", icon: "search" },
      { title: "Volunteer-friendly intake", desc: "Applicants enter their own information and consent through a guided online flow, which reduces data entry for your coordinators and keeps the process simple for first-time volunteers.", icon: "hands" },
      { title: "Screen large rosters", desc: "Invite many volunteers at once and track each check from one place, so onboarding a full cohort ahead of an event or program season stays organized.", icon: "users" },
      { title: "Optional ongoing monitoring", desc: "For long-serving volunteers and staff, you can add continuous monitoring that surfaces new records between annual reviews, subject to consent and permissible purpose.", icon: "refresh" },
    ],
    showcase: {
      eyebrow: "In the product",
      title: "Every volunteer,",
      highlight: "one clear roster.",
      description: "Atlas keeps your whole intake in a single view, from the first invite through consent, results, and any adverse-action steps. Coordinators see what is pending and what is ready, while applicants move through a self-guided flow at their own pace.",
      bullets: [
        "Send individual or bulk invites and watch status update as applicants finish intake",
        "Separate fast database results from the verified report so you know what still needs confirmation",
        "Built-in consent and adverse-action steps help keep volunteer screening aligned with the FCRA",
      ],
    },
    faqs: [
      { q: "Does the FCRA apply when we screen volunteers, not employees?", a: "Yes. When a consumer reporting agency like Atlas furnishes a background report, the FCRA applies whether the person is a paid employee or an unpaid volunteer. That means you need the applicant's written consent, a permissible purpose, and you must follow adverse-action steps if a report contributes to turning someone away." },
      { q: "How affordable is screening for a small nonprofit?", a: "Atlas uses per-check pricing, so you pay for the screenings you run rather than a large fixed commitment. This lets budget-conscious organizations screen the staff and volunteers they need to without overextending. Reach out for current pricing on the packages that fit your program." },
      { q: "Which checks matter most when volunteers work with vulnerable people?", a: "Many organizations start with a sex offender registry search and a national criminal core, then add county or identity checks based on the role and their duty of care. Atlas provides the consumer reports, and your organization decides which combination fits each position and sets its own screening standards." },
      { q: "Are the fast database results the same as the final report?", a: "No. National database searches return quick preliminary hits, but those are not the finished product. Atlas works to confirm relevant records at the source, and the verified report is what your organization should rely on when making a decision." },
      { q: "Does Atlas decide who can volunteer?", a: "No. Atlas assembles and furnishes the background report, but your organization makes every decision about who to bring on. If a report may lead you to decline someone, the adverse-action process gives that person a chance to review the information and respond before the decision is final." },
    ],
  },
};
