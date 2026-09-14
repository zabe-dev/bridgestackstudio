export default function ReferralBanner() {
  return (
    <aside className="referral-banner" aria-label="Client referral offer">
      <div className="wrap referral-banner-inner">
        <p>
          Know a business that needs a website?{" "}
          <span className="referral-offer">
            <a href="#contact">Contact us</a> to{" "}
            <strong>earn $50 for every paying client you refer.</strong>
          </span>
        </p>
      </div>
    </aside>
  );
}
