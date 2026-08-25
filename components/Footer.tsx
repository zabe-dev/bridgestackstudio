import { SiteContent } from "@/lib/content";

export default function Footer({ site }: { site: SiteContent }) {
  return (
    <footer>
      <div className="wrap footer-row">
        <a href="#top" className="footer-brand">Bridge Stack Studio <span>↑</span></a>
        <span className="mono">{site.footerCopyright}</span>
        <span className="mono">{site.footerCredit}</span>
      </div>
    </footer>
  );
}
