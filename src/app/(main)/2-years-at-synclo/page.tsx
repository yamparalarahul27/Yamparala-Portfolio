import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Testimonial from "../../../components/Testimonial";

const suiteProducts = [
  {
    name: "CheckIn",
    description: "Web Based QR App for Quick Registration, Multilingual support",
  },
  {
    name: "PatientSync",
    description: "iOS & Android for patients (reports, appointments)",
  },
  {
    name: "MDsync",
    description: "iOS & Android for doctors (consultation oversight)",
  },
  {
    name: "QMS",
    description: "iPad App for Doctors (OPD Consultation)",
  },
  {
    name: "LabSync",
    description: "Windows App for Lab technicians (lab reports, billing)",
  },
  {
    name: "NPmS",
    description: "Desktop & Web Nurse Workspace system",
  },
];

const suiteImages = [
  { src: "/portfolio/synclo/patient.png", alt: "PatientSync App" },
  { src: "/portfolio/synclo/doctor-ipad.png", alt: "MDsync App" },
  { src: "/portfolio/synclo/ipad.png", alt: "QMS iPad App" },
  { src: "/portfolio/synclo/lab.png", alt: "LabSync App" },
];

const teamPhotos = [
  { src: "/portfolio/synclo/team.png", alt: "Synclo Team" },
  { src: "/portfolio/synclo/with-ceo.jpeg", alt: "With the CEO" },
  { src: "/portfolio/synclo/christmas.jpeg", alt: "Christmas Celebration" },
];

export default function SyncloPage() {
  return (
    <>
      <main className="page-container mt-20 sm:mt-24 lg:mt-[132px] text-[var(--text-primary)]">
        <div className="flex-1 flex flex-col gap-8 sm:gap-12 lg:gap-[56px] pt-8">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
          >
            &larr; Back
          </Link>

          {/* ── Hero ── */}
          <section className="flex flex-col gap-6 animate-enter">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight">
                Building connected OPD Care at Singapore Based
              </h1>
              <p className="text-sm font-mono text-[var(--accent)] tracking-wide">
                UI Design | 2 Years | 4 End to End Products | 3
                Multi-speciality Hospitals Onboarded
              </p>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl text-balance leading-relaxed">
                I worked at Synclo for 2 Years, being a solo designer in the
                team, i handled end to end design of amazing Healthcare
                products. Many interactions and pitfalls later, we shipped and
                half successes. but the learnings helped me shape my creativity
                for next opportunity
              </p>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src="/portfolio/synclo/hero.png"
                alt="Synclo Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>

          {/* ── Section 1: QMS for Doctors ── */}
          <section className="flex flex-col gap-8 animate-enter">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              QMS for Doctors
            </h2>

            <div className="brutal-card flex flex-col gap-6">
              <p className="text-[var(--text-secondary)] leading-relaxed">
                QMS is a Queue Management System designed for OPD doctors to
                manage patients. Key features of QMS are AI Predictive
                Diagnostics, Integrated E-prescription module and Modern clean
                design.
              </p>

              <div className="brutal-card bg-[var(--accent)]/10 border-[var(--accent)]">
                <p className="text-sm font-semibold mb-1">Impact</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Would have reduced Consultation time by 10% making 30mins
                  consultation average to 20 mins consultation. That is Saving
                  5hrs of Daily Time.
                </p>
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src="/portfolio/synclo/qms-detail.png"
                alt="QMS Detail View"
                fill
                className="object-cover"
              />
            </div>

            <Testimonial
              quote="He's been fantastic. Rahul's designs are always creative and user-friendly. He makes complex things simple and always delivers high-quality work. Rahul is great at documenting designs and communicating between teams."
              name="Vinay Kumar"
              role="Ex Sr. SE @ Detrix"
              avatar="/portfolio/vinay.png"
            />
          </section>

          {/* ── Section 2: Mobile App for Doctors ── */}
          <section className="flex flex-col gap-8 animate-enter">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Mobile App for Doctors
            </h2>

            <div className="brutal-card">
              <p className="text-[var(--text-secondary)] leading-relaxed">
                At first demo of QMS, we secured 2-3 Multi-specality hospitals
                to Test run QMS, and during first test, We planned to deploy
                Mobile Apps for Doctors and Patents to have oversight of whole
                functioning. One Major hospital we onboarded was Ankura
                Hospitals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)]">
                <Image
                  src="/portfolio/synclo/doctor.png"
                  alt="Doctor App Screen 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)]">
                <Image
                  src="/portfolio/synclo/doctor2.png"
                  alt="Doctor App Screen 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Testimonial
              quote=""
              name="Akhil Ravilla"
              role="Ex SE2 @ Detrix"
              avatar="/portfolio/akhil.png"
            />
          </section>

          {/* ── Section 3: Suite for Complete Care ── */}
          <section className="flex flex-col gap-8 animate-enter">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Suite for Complete Care
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {suiteProducts.map((product) => (
                <div key={product.name} className="brutal-card flex flex-col gap-2">
                  <p className="text-base font-semibold">{product.name}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {suiteImages.map((img) => (
                <div
                  key={img.src}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: Friends not Team ── */}
          <section className="flex flex-col gap-8 animate-enter">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Friends not Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
