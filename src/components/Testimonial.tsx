import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  linkedinUrl?: string;
}

export default function Testimonial({ quote, name, role, avatar, linkedinUrl }: TestimonialProps) {
  const Wrapper = linkedinUrl ? "a" : "div";
  const wrapperProps = linkedinUrl
    ? { href: linkedinUrl, target: "_blank" as const, rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="brutal-card bg-white flex flex-col gap-4 hover:border-[var(--text-primary)] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_var(--text-primary)] transition-all duration-300"
    >
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        {avatar && (
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-[var(--text-secondary)]">{role}</p>
        </div>
      </div>
    </Wrapper>
  );
}
