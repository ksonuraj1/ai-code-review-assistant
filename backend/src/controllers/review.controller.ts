import { Request, Response } from "express";

import { reviewCodeService } from "../services/review.service";

export const reviewCode = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { language, code, filename } = req.body;

    const review = await reviewCodeService({
      language,
      code,
      filename,
    });

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    console.error("Review Error:", error);

    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
