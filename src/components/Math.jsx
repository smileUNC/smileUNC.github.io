import { useMemo } from "react";
import katex from "katex";

// Inline LaTeX rendered with KaTeX.
//   <InlineMath math="\\ell_1" />   or   <InlineMath>{"\\ell_1"}</InlineMath>
// (KaTeX's stylesheet is imported once in src/main.jsx.)
export function InlineMath({ math, children }) {
  const source = math ?? (typeof children === "string" ? children : "");
  const html = useMemo(() => {
    try {
      return katex.renderToString(source, { throwOnError: false, output: "htmlAndMathml" });
    } catch {
      return source;
    }
  }, [source]);
  // KaTeX escapes its input, and every formula comes from this repository's own source/data files.
  return <span className="math" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default InlineMath;
