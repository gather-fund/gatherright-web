import Link from 'next/link';

// The GatherRight lockup from the board (2026-10-26): the GR mark, then "gatherRight" with "TECHNOLOGIES LIMITED"
// centred beneath it. The link carries the company's name, so the parts are hidden from assistive technology.
export function Brand({ lazy = false }: { lazy?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="GatherRight Technologies Limited home">
      <span className="gr-mark" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand artwork */}
        <img src="/assets/gatherright-mark.svg" alt="" width={52} height={34} loading={lazy ? 'lazy' : undefined} decoding="async" />
        <span className="gr-lock">
          <span className="gr-word">gatherRight</span>
          <span className="gr-tag">TECHNOLOGIES LIMITED</span>
        </span>
      </span>
    </Link>
  );
}
