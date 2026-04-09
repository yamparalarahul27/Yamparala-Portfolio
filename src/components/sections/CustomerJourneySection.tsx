import Image from "next/image";

export default function CustomerJourneySection() {
  return (
    <div id="customer-journey-mapping" className="flex flex-col gap-8 sm:gap-12 lg:gap-[56px]">
      {/* Hero */}
      <section className="flex flex-col gap-4 animate-enter">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight">
          Customer Journey Mapping
        </h2>
        <p className="text-sm font-mono text-[var(--accent)] tracking-wide">Referencing Synclo Brand</p>
      </section>

      {/* What */}
      <section className="flex flex-col gap-4 animate-enter">
        <h3 className="text-2xl font-bold tracking-tight">What</h3>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl lg:max-w-4xl leading-relaxed">
          A visualisation of the major interaction shaping a user&apos;s experience of a product or service.
        </p>
      </section>

      {/* Why */}
      <section className="flex flex-col gap-4 animate-enter">
        <h3 className="text-2xl font-bold tracking-tight">Why</h3>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl lg:max-w-4xl leading-relaxed">
          To provide design teams with a bird&apos;s-eye view of a service that helps them see the sequence of interactions that make up a user&apos;s experience including the complexity, successes, pain points, and emotions users experience along the way.
        </p>
      </section>

      {/* What is CJM */}
      <section className="flex flex-col gap-6 animate-enter">
        <h3 className="text-2xl font-bold tracking-tight">What is Customer Journey Mapping?</h3>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl lg:max-w-4xl leading-relaxed">
          It looks at mapping out the total customer experience across all touchpoints between the customer and the organization, from initial contact, through purchasing onto after sales support.
        </p>
        <div className="brutal-card p-6 max-w-3xl lg:max-w-4xl">
          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">It maps the experience that:</p>
          <ul className="list-disc list-inside flex flex-col gap-2 text-base text-[var(--text-secondary)]">
            <li>The company wants to provide to the customer.</li>
            <li>The customer would like to receive.</li>
          </ul>
        </div>
      </section>

      {/* Customer Touchpoints */}
      <section className="flex flex-col gap-6 animate-enter">
        <h3 className="text-2xl font-bold tracking-tight">Customer Touchpoints</h3>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl lg:max-w-4xl leading-relaxed">
          Customer touchpoints are your brand&apos;s points of customer contact, from start to finish. For example, customers may find our business online or in an ad, see ratings and reviews, visit our website, shop from our affiliates website, or contact our customer service.
        </p>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl lg:max-w-4xl leading-relaxed">
          We started identifying our customer touchpoints by making a list of all the places and times our customers might come into contact with our brand.
        </p>
      </section>

      {/* CJM Map Image */}
      <section className="animate-enter">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-color)]">
          <Image src="/portfolio/cjm/cjm-map.png" alt="Customer Journey Map" fill className="object-contain" sizes="(max-width: 768px) 100vw, 1200px" priority />
        </div>
      </section>
    </div>
  );
}
