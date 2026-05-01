import type { Metadata } from "next";
import Image from "next/image";
import DogFollowerClient from "../../components/DogFollower/DogFollowerClient";
import LandingFooter from "../../components/LandingFooter";
import ProjectList from "../../components/ProjectList";
import { indexProjects, rahulProfile } from "../../lib/rahul-index";

export const metadata: Metadata = {
  title: rahulProfile.name,
  description: rahulProfile.headline,
};

export default function MiniPage() {
  return (
    <>
    <DogFollowerClient />
    <main className="max-w-xl mx-auto !px-4 !py-16 sm:!py-24 text-[var(--text-primary)] [&_section]:!p-0 [&_section>div]:!p-0 [&_footer]:!p-0">
      {/* Bio */}
      <section className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2 pb-1">
          <Image
            src="/headshot.png"
            alt="Yamparala Rahul"
            width={40}
            height={40}
            className="object-cover w-10 h-10 rounded-lg"
          />
          <span className="text-sm font-semibold">{rahulProfile.name}</span>
        </div>
        <p className="text-base leading-relaxed">
          {rahulProfile.bio[0]}
        </p>
        <p className="text-base leading-relaxed">
          {rahulProfile.bio[1]}
        </p>
        <p className="text-base leading-relaxed">
          {rahulProfile.bio[2]}
        </p>
        <p className="text-sm text-[var(--text-secondary)] pb-4">
          <span>{rahulProfile.handle}</span>
          {" / "}
          <a href={`mailto:${rahulProfile.email}`} className="hover:text-[var(--text-primary)] transition-colors">{rahulProfile.email}</a>
        </p>
      </section>

      {/* Projects */}
      <ProjectList projects={indexProjects} />
    </main>
    <LandingFooter />
    </>
  );
}
