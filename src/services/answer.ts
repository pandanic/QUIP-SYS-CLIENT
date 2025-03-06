import { POST } from "./ajax";

export async function postAnswer(answerInfo: {
  [key: string]: unknown | unknown[];
}) {
  const url = "/api/answer";
  const data = await POST(url, answerInfo);
  return data;
}
