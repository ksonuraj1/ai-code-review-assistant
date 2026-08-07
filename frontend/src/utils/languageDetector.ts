const extensionMap: Record<string, string> = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  py: "python",
  java: "java",
  cpp: "cpp",
  cc: "cpp",
  cxx: "cpp",
  c: "c",
  cs: "csharp",
  go: "go",
  rs: "rust",
  php: "php",
  rb: "ruby",
  swift: "swift",
  kotlin: "kotlin",
  kt: "kotlin",
  json: "json",
  html: "html",
  css: "css",
  scss: "scss",
  sql: "sql",
  xml: "xml",
  yaml: "yaml",
  yml: "yaml",
  md: "markdown",
};

export function detectLanguage(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase();

  if (!extension) {
    return "plaintext";
  }

  return extensionMap[extension] ?? "plaintext";
}
