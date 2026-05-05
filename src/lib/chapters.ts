export type Chapter = {
  number: number;
  slug: string;
  place: string;
  yearRange?: string;
  subtitle?: string;
  paragraphs?: string[];
};

export const chapters: Chapter[] = [
  {
    number: 1,
    slug: "jamnagar",
    place: "Jamnagar",
  },
  {
    number: 2,
    slug: "kasuli",
    place: "Kasuli",
  },
  {
    number: 3,
    slug: "amla",
    place: "Amla",
  },
  {
    number: 4,
    slug: "vejendla",
    place: "Vejendla",
  },
  {
    number: 5,
    slug: "hyderabad",
    place: "Hyderabad",
  },
  {
    number: 6,
    slug: "bangalore",
    place: "Bangalore",
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAllChapterSlugs(): string[] {
  return chapters.map((c) => c.slug);
}
