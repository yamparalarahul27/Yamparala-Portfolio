"use client";

import { useState, useCallback } from "react";
import { Download } from "lucide-react";
import type { Industry } from "../../lib/cv-data";
import CVDocument from "./CVDocument";
import IndustrySelector from "./IndustrySelector";

export default function CVPage() {
  const [industry, setIndustry] = useState<Industry>("b2b");
  const [generating, setGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    setGenerating(true);
    try {
      const { generatePDF } = await import("../../lib/cv-pdf");
      await generatePDF(industry);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setGenerating(false);
    }
  }, [industry]);

  return (
    <div className="flex flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Resume</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Select an industry to tailor the resume
          </p>
        </div>
        <div className="flex items-center gap-3">
          <IndustrySelector selected={industry} onChange={setIndustry} />
          <button
            onClick={handleDownload}
            disabled={generating}
            className="brutal-btn inline-flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            {generating ? "Generating..." : "Download PDF"}
          </button>
        </div>
      </div>

      {/* CV Preview */}
      <CVDocument industry={industry} />
    </div>
  );
}
