// Thin note at the top of the offline single-file copy (npm run build:offline).
// Not part of the website itself.
const style = {
  padding: "6px 16px",
  background: "var(--bg-soft)",
  borderBottom: "1px solid var(--line)",
  color: "var(--muted)",
  fontSize: "0.8125rem",
  lineHeight: 1.4,
  textAlign: "center",
};

export default function OfflineBanner() {
  return (
    <div style={style} role="note">
      Offline copy of the OmniWave Lab website · built {import.meta.env.VITE_BUILD_DATE}
    </div>
  );
}
