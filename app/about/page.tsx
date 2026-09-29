const sources = [
  {
    name: "KanjiVG",
    use: "Kanji stroke-order data",
    license: "CC BY-SA 3.0",
    url: "https://github.com/KanjiVG/kanjivg",
  },
  {
    name: "JMdict / Kanjidic2 (EDRDG)",
    use: "Japanese-English dictionary and kanji reference data",
    license: "CC BY-SA 4.0",
    url: "https://www.edrdg.org/jmdict/j_jmdict.html",
  },
  {
    name: "Tatoeba",
    use: "Example sentences",
    license: "CC BY 2.0 FR",
    url: "https://tatoeba.org",
  },
  {
    name: "hanzi-writer",
    use: "Stroke-order animation and drawing practice",
    license: "MIT",
    url: "https://github.com/chanind/hanzi-writer",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold">About &amp; Credits</h1>
      <p className="mt-2 text-slate-600">
        This is a personal learning project. Japanese content is built on the
        following open data sources and libraries:
      </p>
      <ul className="mt-6 space-y-4">
        {sources.map((source) => (
          <li key={source.name} className="rounded border border-slate-200 p-4">
            <p className="font-semibold">{source.name}</p>
            <p className="text-sm text-slate-600">{source.use}</p>
            <p className="text-sm text-slate-500">License: {source.license}</p>
            <a
              href={source.url}
              className="text-sm text-blue-600 hover:underline"
            >
              {source.url}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
