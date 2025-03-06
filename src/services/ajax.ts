const Host = "http://127.0.0.1:3001";

export async function GET(url: string) {
  const res = await fetch(`${Host}${url}`);
  return res.json();
}

export async function POST(
  url: string,
  body: { [key: string]: unknown | unknown[] }
) {
  const res = await fetch(`${Host}${url}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json();
}
