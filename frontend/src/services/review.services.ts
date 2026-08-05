import api from "./api";

interface ReviewRequest {
  language: string;
  code: string;
}

export const reviewCode = async ({ language, code }: ReviewRequest) => {
  const response = await api.post("/review", {
    language,
    code,
  });

  return await response.data;
};
