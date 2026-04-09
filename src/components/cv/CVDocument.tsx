"use client";

import { useMemo } from "react";
import { type Industry, cvData, getOrderedCV } from "../../lib/cv-data";

export default function CVDocument({
  industry,
  forPrint = false,
}: {
  industry: Industry;
  forPrint?: boolean;
}) {
  const cv = useMemo(() => getOrderedCV(cvData, industry), [industry]);

  const containerClass = forPrint
    ? "w-[210mm] min-h-[297mm] max-h-[297mm] bg-white text-black p-[12mm] text-[10px] leading-[1.4] overflow-hidden font-[Helvetica,Arial,sans-serif]"
    : "w-full max-w-[210mm] mx-auto bg-[var(--surface-color)] border border-[var(--border-color)] p-6 sm:p-10 text-[11px] sm:text-[12px] leading-[1.5]";

  return (
    <div className={containerClass}>
      {/* Header */}
      <div className="mb-4">
        <h1 className={`${forPrint ? "text-[20px]" : "text-xl sm:text-2xl"} font-bold tracking-tight`}>
          {cv.name}
        </h1>
        <p className={`${forPrint ? "text-[11px] text-gray-600" : "text-sm text-[var(--text-secondary)]"} mt-0.5`}>
          {cv.title}
        </p>
        <div className={`flex flex-wrap gap-x-4 gap-y-0.5 mt-2 break-all ${forPrint ? "text-[9px] text-gray-500" : "text-[10px] text-[var(--text-secondary)]"}`}>
          <span>{cv.contact.email}</span>
          <span>{cv.contact.phone}</span>
          <span>{cv.contact.website}</span>
          <span>{cv.contact.linkedin}</span>
        </div>
      </div>

      <hr className={forPrint ? "border-gray-300 mb-3" : "border-[var(--border-color)] mb-3"} />

      {/* Summary */}
      <section className="mb-3">
        <h2 className={`${forPrint ? "text-[11px]" : "text-xs"} font-bold uppercase tracking-[0.15em] mb-1`}>
          Summary
        </h2>
        <p className={forPrint ? "text-gray-700" : "text-[var(--text-secondary)]"}>
          {cv.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-3">
        <h2 className={`${forPrint ? "text-[11px]" : "text-xs"} font-bold uppercase tracking-[0.15em] mb-2`}>
          Experience
        </h2>
        <div className="flex flex-col gap-2.5">
          {cv.experience.map((exp) => (
            <div key={exp.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <span className="font-bold">{exp.role}</span>
                <span className={forPrint ? "text-[9px] text-gray-500" : "text-[10px] text-[var(--text-secondary)]"}>
                  {exp.period}
                </span>
              </div>
              <div className={`${forPrint ? "text-gray-600" : "text-[var(--text-secondary)]"} mb-0.5`}>
                {exp.company} · {exp.location}
              </div>
              <ul className={`list-disc pl-4 ${forPrint ? "text-gray-700" : "text-[var(--text-secondary)]"}`}>
                {exp.bullets.map((bullet) => (
                  <li key={bullet.text}>{bullet.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-3">
        <h2 className={`${forPrint ? "text-[11px]" : "text-xs"} font-bold uppercase tracking-[0.15em] mb-1`}>
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5">
          {cv.skills.map((skill) => (
            <div key={skill.category}>
              <span className="font-bold">{skill.category}: </span>
              <span className={forPrint ? "text-gray-700" : "text-[var(--text-secondary)]"}>
                {skill.items.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="mb-3">
        <h2 className={`${forPrint ? "text-[11px]" : "text-xs"} font-bold uppercase tracking-[0.15em] mb-1`}>
          Education & Certifications
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-0.5">
          {cv.education.map((edu) => (
            <span key={edu.institution} className="min-w-0 break-words">
              <span className="font-bold">{edu.degree}</span> — {edu.institution} ({edu.year})
            </span>
          ))}
          {cv.certifications.map((cert) => (
            <span key={cert.name} className="min-w-0 break-words">
              <span className="font-bold">{cert.name}</span> — {cert.issuer}
            </span>
          ))}
        </div>
      </section>

      {/* Community */}
      <section>
        <h2 className={`${forPrint ? "text-[11px]" : "text-xs"} font-bold uppercase tracking-[0.15em] mb-1`}>
          Community
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-0.5">
          {cv.community.map((c) => (
            <span key={c.name}>
              {c.role} @ {c.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
