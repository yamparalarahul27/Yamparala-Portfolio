import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import { type Industry, cvData, getOrderedCV } from "./cv-data";

const styles = StyleSheet.create({
  page: {
    padding: "12mm",
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.4,
    color: "#111",
  },
  name: { fontSize: 18, fontFamily: "Helvetica-Bold", marginBottom: 2 },
  title: { fontSize: 10, color: "#555", marginBottom: 4 },
  contactRow: { flexDirection: "row", gap: 12, fontSize: 8, color: "#777", marginBottom: 8 },
  hr: { borderBottomWidth: 0.5, borderBottomColor: "#ccc", marginBottom: 6 },
  sectionTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 3 },
  section: { marginBottom: 6 },
  summary: { color: "#444" },
  expBlock: { marginBottom: 5 },
  expHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  expRole: { fontFamily: "Helvetica-Bold" },
  expPeriod: { fontSize: 8, color: "#777" },
  expCompany: { color: "#555", marginBottom: 2 },
  bullet: { flexDirection: "row", paddingLeft: 8, marginBottom: 1 },
  bulletDot: { width: 8, color: "#555" },
  bulletText: { flex: 1, color: "#444" },
  skillRow: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginBottom: 2 },
  skillCategory: { fontFamily: "Helvetica-Bold" },
  skillItems: { color: "#444" },
  inlineRow: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 2 },
  bold: { fontFamily: "Helvetica-Bold" },
  muted: { color: "#555" },
});

function CVPdfDocument({ industry }: { industry: Industry }) {
  const cv = getOrderedCV(cvData, industry);

  return createElement(Document, null,
    createElement(Page, { size: "A4", style: styles.page },
      // Header
      createElement(Text, { style: styles.name }, cv.name),
      createElement(Text, { style: styles.title }, cv.title),
      createElement(View, { style: styles.contactRow },
        createElement(Text, null, cv.contact.email),
        createElement(Text, null, cv.contact.phone),
        createElement(Text, null, cv.contact.website),
        createElement(Text, null, cv.contact.linkedin),
      ),
      createElement(View, { style: styles.hr }),

      // Summary
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, "Summary"),
        createElement(Text, { style: styles.summary }, cv.summary),
      ),

      // Experience
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, "Experience"),
        ...cv.experience.map((exp) =>
          createElement(View, { key: exp.company, style: styles.expBlock },
            createElement(View, { style: styles.expHeader },
              createElement(Text, { style: styles.expRole }, exp.role),
              createElement(Text, { style: styles.expPeriod }, exp.period),
            ),
            createElement(Text, { style: styles.expCompany }, `${exp.company} · ${exp.location}`),
            ...exp.bullets.map((b) =>
              createElement(View, { key: b.text, style: styles.bullet },
                createElement(Text, { style: styles.bulletDot }, "•"),
                createElement(Text, { style: styles.bulletText }, b.text),
              ),
            ),
          ),
        ),
      ),

      // Skills
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, "Skills"),
        ...cv.skills.map((skill) =>
          createElement(View, { key: skill.category, style: styles.skillRow },
            createElement(Text, { style: styles.skillCategory }, `${skill.category}: `),
            createElement(Text, { style: styles.skillItems }, skill.items.join(", ")),
          ),
        ),
      ),

      // Education & Certifications
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, "Education & Certifications"),
        createElement(View, { style: styles.inlineRow },
          ...cv.education.map((edu) =>
            createElement(Text, { key: edu.institution },
              createElement(Text, { style: styles.bold }, edu.degree),
              ` — ${edu.institution} (${edu.year})`,
            ),
          ),
          ...cv.certifications.map((cert) =>
            createElement(Text, { key: cert.name },
              createElement(Text, { style: styles.bold }, cert.name),
              ` — ${cert.issuer}`,
            ),
          ),
        ),
      ),

      // Community
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, "Community"),
        createElement(View, { style: styles.inlineRow },
          ...cv.community.map((c) =>
            createElement(Text, { key: c.name }, `${c.role} @ ${c.name}`),
          ),
        ),
      ),
    ),
  );
}

export async function generatePDF(industry: Industry) {
  const doc = createElement(CVPdfDocument, { industry });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blob = await pdf(doc as any).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Yamparala_Rahul_Resume_${industry.toUpperCase()}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}
