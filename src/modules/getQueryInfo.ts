export function getQueryInfo(req: {
  headers: any; url: string;
}) {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const params = Object.fromEntries(normalizedURL.searchParams.entries());

  return params;
}
