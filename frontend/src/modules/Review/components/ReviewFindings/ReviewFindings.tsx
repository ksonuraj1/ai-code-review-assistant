import Card from "@/src/components/CoreComponent/Card";
import FindingSection from "./FindingSection";
import { ReviewFindingsProps } from "./ReviewFindings.types";

export default function ReviewFindings({ findings }: ReviewFindingsProps) {
  const sections = [
    {
      title: "Correctness",
      findings: findings.correctness,
    },
    {
      title: "Bugs",
      findings: findings.bugs,
    },
    {
      title: "Performance",
      findings: findings.performance,
    },
    {
      title: "Readability",
      findings: findings.readability,
    },
    {
      title: "Maintainability",
      findings: findings.maintainability,
    },
    {
      title: "Security",
      findings: findings.security,
    },
    {
      title: "Best Practices",
      findings: findings.bestPractices,
    },
    {
      title: "Scalability",
      findings: findings.scalability,
    },
  ];

  const visibleSections = sections.filter(
    (section) => section.findings.length > 0,
  );

  if (visibleSections.length === 0) {
    return null;
  }

  return (
    <Card className="mt-6 p-6">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-white">Review Findings</h2>

          <p className="mt-1 text-sm text-slate-400">
            Issues identified by the AI during code analysis.
          </p>
        </div>

        <div className="space-y-8">
          {visibleSections.map((section) => (
            <FindingSection
              key={section.title}
              title={section.title}
              findings={section.findings}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
