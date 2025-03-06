import { GET } from "./ajax";

export async function getQuestionById(id: string) {
  const url = `/api/question/${id}`;
  const res = await GET(url);
  return res;
}
