import Link from 'next/link';

// The GatherRight lockup from the board: the Gatherfund mark, the "GatherRight" wordmark in Nunito 800
// and "Technologies Limited". The link carries the company's name, so the parts are hidden from assistive technology.
export function Brand({ lazy = false }: { lazy?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="GatherRight Technologies Limited home">
      <span className="gr-mark" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand artwork */}
        <img src="/assets/gatherfund-icon.svg" alt="" width={36} height={34} loading={lazy ? 'lazy' : undefined} decoding="async" />
        <span className="gr-word">GatherRight</span>
      </span>
      <span className="llc" aria-hidden="true">Technologies Limited</span>
    </Link>
  );
}
