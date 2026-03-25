import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Password UX Case Study | Yamparala Rahul",
  description:
    "A detailed UX case study on redesigning the password creation experience for Entytle's Insyghts platform.",
};

/* ------------------------------------------------------------------ */
/*  Reusable helpers                                                   */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-2">
      {children}
    </span>
  );
}

function CaseImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="relative w-full overflow-hidden rounded-lg border border-[var(--border-color)]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 100vw, 56rem"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-[var(--text-secondary)] text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Divider() {
  return (
    <hr className="my-16 border-t border-dashed border-[var(--border-color)]" />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PasswordUXPage() {
  return (
    <div className="page-container">
      <div className="animate-enter">
        {/* ====== HERO ====== */}
        <header className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12">
          <SectionLabel>Case Study</SectionLabel>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
            Product Experience of Password Creation
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-6">
            Case study, referencing Entytle
          </p>
          <div className="brutal-card p-6">
            <p className="text-[var(--text-primary)] leading-relaxed">
              The goal was to give users effortless access to{" "}
              <strong>Insyghts</strong> &mdash; Entytle&rsquo;s flagship
              analytics platform. Password creation is often the first
              real interaction a new user has with the product. If that
              moment feels confusing or frustrating, it taints everything
              that follows. The objective: make it feel invisible.
            </p>
          </div>
        </header>

        {/* ====== SUMMARY BOX ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="brutal-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">
                UX Objectives
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Minimize friction. Challenge the norm, but don&rsquo;t
                reinvent the wheel.
              </p>
            </div>

            <div className="brutal-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">
                Potential Conflicts
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Should feel simple yet clear. Be clear and concise, but
                friendly.
              </p>
            </div>

            <div className="brutal-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">
                Special UX Requirements
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Live validation while typing vs on-exit validation &mdash;
                which approach reduces cognitive load?
              </p>
            </div>

            <div className="brutal-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">
                Persona
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Users don&rsquo;t like to read. Vulnerable to digital
                tasks. They need crystal-clear instructions at every step.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ====== CHAPTER 1 ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0">
          <SectionLabel>Chapter 1</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Knowing Why &amp; What
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            This effort was part of a broader{" "}
            <strong className="text-[var(--text-primary)]">
              Onboarding Redesign
            </strong>{" "}
            initiative at Entytle. Beyond visual polish, the team was
            improving accessibility to meet <strong className="text-[var(--text-primary)]">WCAG standards</strong> and
            reducing support overhead across the board.
          </p>

          <div className="brutal-card p-6 my-8">
            <h4 className="font-bold mb-3">The numbers told a story:</h4>
            <ul className="space-y-2 text-[var(--text-secondary)] text-sm leading-relaxed">
              <li>
                <strong className="text-[var(--text-primary)]">7</strong>{" "}
                monthly &ldquo;forgot password&rdquo; support requests
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">
                  660 minutes/year
                </strong>{" "}
                wasted on password-related support &mdash; time that
                could be spent on product work
              </li>
            </ul>
          </div>

          <CaseImage
            src="/portfolio/password-ux/pwdux_03_Mixpanel.png"
            alt="Mixpanel analytics showing forgot-password funnel data"
            caption="Mixpanel data revealing the frequency of forgot-password events"
          />

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            To understand what &ldquo;good&rdquo; looked like, I audited{" "}
            <strong className="text-[var(--text-primary)]">
              20+ B2B enterprise forms
            </strong>{" "}
            across SaaS products &mdash; studying validation patterns,
            copy, layout, and error handling. This competitive analysis
            became the foundation for every design decision that followed.
          </p>

          <CaseImage
            src="/portfolio/password-ux/pwdux_04_c55daa_7b131e3b98a2469392fc974846bc3883~mv2.png"
            alt="Competitive audit of 20+ B2B enterprise sign-up forms"
            caption="Audit of 20+ B2B enterprise forms for validation patterns and best practices"
          />
        </section>

        <Divider />

        {/* ====== CHAPTER 2 ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0">
          <SectionLabel>Chapter 2</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Finding Problems
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            After the audit, three core usability issues surfaced
            repeatedly:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="brutal-card p-6">
              <span className="text-3xl font-bold text-[var(--accent)]">
                1
              </span>
              <h4 className="font-bold mt-2 mb-1">Requirements</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                &ldquo;On-exit validation&rdquo; throws errors only after
                the user leaves the field &mdash; too late and too
                punishing.
              </p>
            </div>

            <div className="brutal-card p-6">
              <span className="text-3xl font-bold text-[var(--accent)]">
                2
              </span>
              <h4 className="font-bold mt-2 mb-1">Show / Hide</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                No password validation when visible is risky &mdash; users
                can&rsquo;t verify what they&rsquo;ve typed without
                toggling.
              </p>
            </div>

            <div className="brutal-card p-6">
              <span className="text-3xl font-bold text-[var(--accent)]">
                3
              </span>
              <h4 className="font-bold mt-2 mb-1">Strength</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                How strong is the password? Users get no feedback on
                overall strength until submission.
              </p>
            </div>
          </div>

          <CaseImage
            src="/portfolio/password-ux/pwdux_05_Password_Present.png"
            alt="Current password form highlighting the three usability problems"
            caption="The existing password field with on-exit validation, no show/hide clarity, and no strength indicator"
          />
        </section>

        <Divider />

        {/* ====== SOLUTION 1: REQUIREMENTS ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0">
          <SectionLabel>Solution 1</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Requirements &mdash; Show Them Upfront
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Instead of punishing users with errors after they leave the
            field, the redesign surfaces every requirement before the user
            types a single character. Requirements are visible, explicit,
            and update in real time as the user types.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-4">
            UX Copy Analysis
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            The label above the requirements list matters more than most
            people think. After testing several variations, the team
            settled on:{" "}
            <strong className="text-[var(--text-primary)]">
              &ldquo;Strong password should contain&rdquo;
            </strong>
            . It&rsquo;s instructive without being demanding, and it
            frames security as a shared goal rather than a gatekeeping
            exercise.
          </p>

          <CaseImage
            src="/portfolio/password-ux/pwdux_13_Spelling_Out.png"
            alt="UX copy variations for password requirement labels"
            caption="Evaluating copy variations - landing on 'Strong password should contain'"
          />

          <CaseImage
            src="/portfolio/password-ux/pwdux_14_Password_Horizontal.png"
            alt="Horizontal layout of password requirements"
            caption="Requirements displayed in a clear, scannable horizontal layout"
          />
        </section>

        <Divider />

        {/* ====== SOLUTION 2: VISUAL REQUIREMENTS ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0">
          <SectionLabel>Solution 2</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Visual Requirements &mdash; Explicit vs Implicit
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Two approaches were explored. The{" "}
            <strong className="text-[var(--text-primary)]">Explicit</strong>{" "}
            approach spells out every rule as a discrete line item. The{" "}
            <strong className="text-[var(--text-primary)]">Implicit</strong>{" "}
            approach uses inline hints and progressive disclosure. For an
            audience that doesn&rsquo;t like to read, explicit won.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <CaseImage
              src="/portfolio/password-ux/pwdux_15_Explicit.png"
              alt="Explicit approach - requirements listed as discrete items"
              caption="Explicit: each requirement is a visible line item"
            />
            <CaseImage
              src="/portfolio/password-ux/pwdux_16_Implicit.png"
              alt="Implicit approach - inline progressive hints"
              caption="Implicit: progressive disclosure of hints"
            />
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4">
            Icon Selection for Met / Unmet States
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Choosing the right icon pair for &ldquo;not yet met&rdquo;
            and &ldquo;met&rdquo; states required careful testing. The
            icons had to be universally understood, colorblind-safe, and
            small enough to work at 14px.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <CaseImage
              src="/portfolio/password-ux/pwdux_22_Choosen.png"
              alt="Selected icon pair for met and unmet requirement states"
              caption="Chosen icons for met requirements"
            />
            <CaseImage
              src="/portfolio/password-ux/pwdux_23_Error.png"
              alt="Icon pair showing error state for unmet requirements"
              caption="Error state icons for unmet requirements"
            />
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4">
            Error States Design
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            When the user submits with unmet requirements, the design
            shifts from neutral guidance to clear, non-punishing error
            messaging. Color, icon, and copy all change together to
            create a cohesive error state.
          </p>

          <CaseImage
            src="/portfolio/password-ux/pwdux_25_ErrorState.png"
            alt="Complete error state design for password requirements"
            caption="Error state - neutral guidance shifts to clear, non-punishing feedback"
          />
        </section>

        <Divider />

        {/* ====== SOLUTION 3: SHOW/HIDE ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0">
          <SectionLabel>Solution 3</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Show / Hide &mdash; The Eye Icon Dilemma
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            The &ldquo;eye&rdquo; icon is the de-facto standard for
            toggling password visibility. But it carries a fundamental
            ambiguity: does the eye mean &ldquo;the password is currently
            visible&rdquo; or &ldquo;click to make it visible&rdquo;?
            Even experienced users pause.
          </p>

          <CaseImage
            src="/portfolio/password-ux/pwdux_28_Adobe.png"
            alt="Adobe's implementation of the eye icon toggle pattern"
            caption="Adobe's eye icon - the ambiguity problem in practice"
          />

          <h3 className="text-xl font-bold mt-10 mb-4">
            The Checkbox Approach
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Instead of the ambiguous eye icon, the redesign uses a
            simple{" "}
            <strong className="text-[var(--text-primary)]">
              &ldquo;Show password&rdquo; checkbox
            </strong>
            . This choice wins on three fronts:
          </p>

          <ul className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed mb-8 ml-4">
            <li>
              <strong className="text-[var(--text-primary)]">
                Clarity:
              </strong>{" "}
              the label removes all ambiguity about the toggle state.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">
                Accessibility:
              </strong>{" "}
              checkboxes are natively supported by screen readers and
              keyboard navigation.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">
                Security:
              </strong>{" "}
              unchecked by default &mdash; passwords start hidden, as
              users expect.
            </li>
          </ul>

          <CaseImage
            src="/portfolio/password-ux/pwdux_32_Checkbox.png"
            alt="Checkbox approach for show/hide password toggle"
            caption="The checkbox approach - clear, accessible, and unambiguous"
          />

          <h3 className="text-xl font-bold mt-10 mb-4">
            Mobile vs Desktop
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            On mobile, screen real estate changes the equation. The
            checkbox label is shortened and the layout is adapted to
            ensure the tap target remains large enough.
          </p>

          <CaseImage
            src="/portfolio/password-ux/pwdux_33_Mobile.png"
            alt="Mobile vs Desktop comparison of the show/hide password toggle"
            caption="Responsive adaptation - Mobile vs Desktop"
          />
        </section>

        <Divider />

        {/* ====== STRENGTH INDICATOR ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0">
          <SectionLabel>Strength Indicator</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            How Strong Is Strong Enough?
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            A progress bar was chosen as the strength indicator. It gives
            users a quick, visual sense of progress without requiring
            them to interpret abstract labels. The bar transitions
            through three clear states:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            <CaseImage
              src="/portfolio/password-ux/pwdux_42_Weak.png"
              alt="Weak password strength indicator"
              caption="Weak"
            />
            <CaseImage
              src="/portfolio/password-ux/pwdux_43_Medium.png"
              alt="Medium password strength indicator"
              caption="Medium"
            />
            <CaseImage
              src="/portfolio/password-ux/pwdux_44_Strong.png"
              alt="Strong password strength indicator"
              caption="Strong"
            />
          </div>
        </section>

        <Divider />

        {/* ====== LEARNINGS & IMPACT ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0">
          <SectionLabel>Learnings &amp; Impact</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Product Shipped
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            The redesigned password creation flow shipped as part of
            Entytle&rsquo;s onboarding overhaul. By treating a
            &ldquo;small&rdquo; component with the same rigor as a
            full-page redesign, the team demonstrated that micro-UX
            improvements compound into measurable product outcomes.
          </p>

          <div className="brutal-card p-6 my-8">
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
              <li>
                Live validation replaced on-exit validation, reducing
                error encounters.
              </li>
              <li>
                The checkbox show/hide pattern eliminated the
                eye-icon ambiguity entirely.
              </li>
              <li>
                The strength indicator gave users confidence before
                submission.
              </li>
              <li>
                Upfront requirements reduced the monthly
                &ldquo;forgot password&rdquo; support load.
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        {/* ====== REFERENCES ====== */}
        <section className="max-w-4xl lg:max-w-5xl mx-auto px-4 lg:px-0 pb-16">
          <SectionLabel>References</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Key References
          </h2>

          <ul className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
            <li>
              <strong className="text-[var(--text-primary)]">
                Nielsen Norman Group (NN/g)
              </strong>{" "}
              &mdash; &ldquo;Errors in Form Design&rdquo; and
              &ldquo;Password Visibility Toggle&rdquo; studies on
              validation timing and toggle affordances.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">CXL</strong>{" "}
              &mdash; Research on inline validation performance and
              real-time feedback vs batch error messaging.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">
                Baymard Institute
              </strong>{" "}
              &mdash; E-commerce checkout usability studies covering
              password field UX in account creation flows.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">
                Academic Papers
              </strong>{" "}
              &mdash; Research on password meter effectiveness, including
              studies on how visual strength indicators influence password
              choices and user confidence.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">
                WCAG 2.1 Guidelines
              </strong>{" "}
              &mdash; Success criteria for form accessibility, error
              identification (3.3.1), labels and instructions (3.3.2),
              and error suggestion (3.3.3).
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
