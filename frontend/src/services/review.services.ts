import api from "./api";

interface ReviewRequest {
  language: string;
  code: string;
  filename?: string;
}

export const reviewCode = async ({
  language,
  code,
  filename = "test.jsx",
}: ReviewRequest) => {
  const response = await api.post("/review", {
    language,
    code,
    filename,
  });

  return await response.data;
};
