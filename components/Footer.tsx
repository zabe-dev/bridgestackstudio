import { SiteContent } from "@/lib/content";

export default function Footer({ site }: { site: SiteContent }) {
  return (
    <footer>
      <div className="wrap footer-row">
        <span className="mono">{site.footerCopyright}</span>
        <span className="mono">{site.footerCredit}</span>
      </div>
    </footer>
  );
}
