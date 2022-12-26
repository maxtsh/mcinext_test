export function createAppWrapper() {
  const appDiv = document.createElement("div");
  appDiv.setAttribute("id", "root");
  document.body.appendChild(appDiv);
  return appDiv;
}
