import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadMarkdown = (content: string, fileName: string) => {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName.endsWith(".md") ? fileName : `${fileName}.md`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

interface DownloadReviewPDFProps {
  filename: string;
  language: string;
  code: string;
  review: string;
}

export function downloadReviewPDF({
  filename,
  language,
  code,
  review,
}: DownloadReviewPDFProps) {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();

  let y = 20;

  const addSectionTitle = (title: string) => {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);

    pdf.text(title, 15, y);

    y += 8;
  };

  const addParagraph = (text: string) => {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);

    const lines = pdf.splitTextToSize(text, pageWidth - 30);

    pdf.text(lines, 15, y);

    y += lines.length * 6 + 6;

    if (y > 270) {
      pdf.addPage();
      y = 20;
    }
  };

  addSectionTitle("AI Code Review Report");

  addParagraph(`Language: ${language}`);

  addParagraph(`Generated: ${new Date().toLocaleString()}`);

  addSectionTitle("Source Code");

  addParagraph(code);

  addSectionTitle("AI Review");

  addParagraph(review);

  pdf.save(`${filename}.pdf`);
}
