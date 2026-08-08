export interface Finding {
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
}

export interface Findings {
  correctness: Finding[];
  bugs: Finding[];
  performance: Finding[];
  readability: Finding[];
  maintainability: Finding[];
  security: Finding[];
  bestPractices: Finding[];
  scalability: Finding[];
}

export interface ReviewFindingsProps {
  findings: Findings;
}
