import { useEffect } from "react";

// Sets the browser tab title for a page:  useDocumentTitle("Team")  ->  "Team · OmniWave Lab"
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · OmniWave Lab` : "OmniWave Lab · UNC Chapel Hill";
  }, [title]);
}
