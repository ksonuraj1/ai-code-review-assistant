export interface Metrics {
  correctness: number;
  performance: number;
  readability: number;
  maintainability: number;
  security: number;
  bestPractices: number;
  scalability: number;
}

export interface ReviewMetricsProps {
  metrics: Metrics;
}
