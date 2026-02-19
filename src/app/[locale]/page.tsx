import { T } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import MetadataInspector from "@/components/MetadataInspector";

export default async function Home() {
  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Server Metadata SEO")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/server-metadata-seo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <section className="mb-12">
          <T>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Translated metadata for multilingual SEO
            </h2>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
              This demo shows how to use getGT inside Next.js generateMetadata
              to produce translated page titles, descriptions, and Open Graph
              tags. Each locale gets its own metadata, improving search engine
              visibility across languages.
            </p>
          </T>
        </section>

        <section className="mb-12">
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              How it works
            </h3>
          </T>
          <div className="space-y-4">
            <T>
              <div className="border border-neutral-800 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-neutral-100 mb-2">
                  1. Server-side translation in generateMetadata
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The generateMetadata function receives the locale from route
                  parameters. It calls getGT to obtain a translation function,
                  then uses it to translate the page title and description before
                  returning the metadata object.
                </p>
              </div>
            </T>
            <T>
              <div className="border border-neutral-800 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-neutral-100 mb-2">
                  2. Open Graph and Twitter cards
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The translated strings are passed into the openGraph and
                  twitter fields of the metadata object. When a page is shared
                  on social media, the preview shows text in the correct
                  language.
                </p>
              </div>
            </T>
            <T>
              <div className="border border-neutral-800 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-neutral-100 mb-2">
                  3. Alternate language links
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The metadata includes alternate links for each supported
                  locale. Search engines use these hreflang tags to serve the
                  right language version in search results, avoiding duplicate
                  content penalties.
                </p>
              </div>
            </T>
          </div>
        </section>

        <section className="mb-12">
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              Live metadata for this page
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              Switch languages using the selector above to see the metadata
              change. Inspect the page source or use the preview below.
            </p>
          </T>
          <MetadataInspector />
        </section>

        <section className="mb-12">
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              Code example
            </h3>
          </T>
          <div className="border border-neutral-800 rounded-lg overflow-hidden">
            <div className="bg-neutral-900 px-4 py-2 border-b border-neutral-800">
              <span className="text-xs text-neutral-500 font-mono">
                layout.tsx
              </span>
            </div>
            <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
              <code>{`import { getGT } from "gt-next/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const gt = await getGT({ locale });

  const title = gt("My Page Title");
  const description = gt(
    "A description of my page for SEO."
  );

  return {
    title,
    description,
    openGraph: { title, description, locale },
  };
}`}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
