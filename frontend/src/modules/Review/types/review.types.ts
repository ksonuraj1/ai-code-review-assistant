export interface ReviewFinding {
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
}

export interface ReviewSummary {
  overallScore: number;
  overallComment: string;
  riskLevel: "Low" | "Medium" | "High";
}

export interface ReviewMetrics {
  correctness: number;
  performance: number;
  readability: number;
  maintainability: number;
  security: number;
  bestPractices: number;
  scalability: number;
}

export interface ReviewFindings {
  correctness: ReviewFinding[];
  bugs: ReviewFinding[];
  performance: ReviewFinding[];
  readability: ReviewFinding[];
  maintainability: ReviewFinding[];
  security: ReviewFinding[];
  bestPractices: ReviewFinding[];
  scalability: ReviewFinding[];
}

export interface ReviewAIResponse {
  summary: ReviewSummary;
  metrics: ReviewMetrics;
  findings: ReviewFindings;
  goodPractices: string[];
  improvements: string[];
  updatedCode: string;
  detailedReport: string;
  nextSteps: string[];
}

export interface ReviewMetadata {
  reviewId: string;
  language: string;
  reviewedAt: string;
  reviewVersion: string;
  estimatedReadingTime: string;
  model: string;
}

export interface ReviewResponse {
  metadata: ReviewMetadata;
  review: ReviewAIResponse;
}

export interface ReviewRequest {
  language: string;
  code: string;
  filename?: string;
}
