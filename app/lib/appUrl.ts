// Deep-link helpers into the Atlas Screening software (the `/order/new` flow).
//
// The marketing site and the app live on separate origins. `NEXT_PUBLIC_APP_URL`
// points at the app; it is read at build time and inlined into the client bundle,
// so it must be prefixed `NEXT_PUBLIC_`. A production fallback keeps links working
// even if the env var is not set in a given environment.

export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://app.atlasscreening.com"
).replace(/\/+$/, "");

/** Params understood by the app's `/order/new` deep-link (see order/new preselect). */
export type StartParams = {
  /** Service slug — the app maps this to a preselected package + add-ons. */
  service?: string;
  /** Optional permissible-purpose hint (e.g. "tenant", "employment"). */
  reason?: string;
};

/**
 * Build a "Start screening" link into the app's order flow. When logged out the
 * app's auth guard bounces to sign-in/up and returns here afterwards.
 */
export function startScreeningHref(params: StartParams = {}): string {
  const qs = new URLSearchParams();
  if (params.service) qs.set("service", params.service);
  if (params.reason) qs.set("reason", params.reason);
  const query = qs.toString();
  return `${APP_URL}/order/new${query ? `?${query}` : ""}`;
}
