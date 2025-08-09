module.exports = async (tp) => {
  const folder = "Session_Notes"; // Path to target folder
  const templatePath = "Templates/Session_Template.md"; // Full path to your template file

  const folderAbstract = app.vault.getAbstractFileByPath(folder);
  if (!folderAbstract || typeof folderAbstract.children === "undefined") {
    throw new Error("Session_Notes folder not found or is not a folder");
  }

  const files = folderAbstract.children;
  const sessionNumbers = files
    .map(f => f.name.match(/^Session_(\d+)/))
    .filter(Boolean)
    .map(m => parseInt(m[1]));

  const nextNum = sessionNumbers.length ? Math.max(...sessionNumbers) + 1 : 1;
  const title = `Session_${nextNum.toString().padStart(2, "0")}`;
  const newFilePath = `${folder}/${title}.md`;

  const templateFile = app.vault.getAbstractFileByPath(templatePath);
  if (!templateFile) {
    throw new Error("Template file not found");
  }

  let content = await app.vault.read(templateFile);

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  content = content
    .replaceAll("{{title}}", title)
    .replaceAll("{{date}}", dateStr)
    .replaceAll("{{session_number}}", nextNum.toString());

  await app.vault.create(newFilePath, content);
  new Notice(`Created ${title}`);
  return "";
};
