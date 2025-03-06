import { postAnswer } from "@/services/answer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(200).json({ success: false, msg: "error" });
  }
  try {
    const resData = await postAnswer(req.body);
    if (resData.success) {
      res.redirect("/success");
    } else {
      res.redirect("/fail");
    }
  } catch (err) {
    res.redirect("/fail");
    console.log(err);
  }
}
