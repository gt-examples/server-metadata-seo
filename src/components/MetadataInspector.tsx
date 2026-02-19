"use client";

import { useEffect, useState } from "react";
import { T } from "gt-next";

export default function MetadataInspector() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogLocale, setOgLocale] = useState("");

  useEffect(() => {
    setTitle(document.title);
    const desc = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");
    const ogt = document
      .querySelector('meta[property="og:title"]')
      ?.getAttribute("content");
    const ogd = document
      .querySelector('meta[property="og:description"]')
      ?.getAttribute("content");
    const ogl = document
      .querySelector('meta[property="og:locale"]')
      ?.getAttribute("content");
    setDescription(desc || "");
    setOgTitle(ogt || "");
    setOgDescription(ogd || "");
    setOgLocale(ogl || "");
  }, []);

  const fields = [
    { label: "document.title", value: title },
    { label: "meta[description]", value: description },
    { label: "og:title", value: ogTitle },
    { label: "og:description", value: ogDescription },
    { label: "og:locale", value: ogLocale },
  ];

  return (
    <div className="border border-neutral-800 rounded-lg divide-y divide-neutral-800">
      <div className="px-4 py-3 bg-neutral-900 rounded-t-lg">
        <T>
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
            Current page metadata
          </span>
        </T>
      </div>
      {fields.map((field) => (
        <div
          key={field.label}
          className="px-4 py-3 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4"
        >
          <span className="text-xs font-mono text-neutral-500 sm:w-40 shrink-0">
            {field.label}
          </span>
          <span className="text-sm text-neutral-200 break-all">
            {field.value || "\u2014"}
          </span>
        </div>
      ))}
    </div>
  );
}
