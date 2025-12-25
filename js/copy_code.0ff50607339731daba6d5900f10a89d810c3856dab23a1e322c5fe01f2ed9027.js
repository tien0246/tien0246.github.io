document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".highlight").forEach(function (highlightDiv) {
    var codeBlock = highlightDiv.querySelector("code");
    if (codeBlock) {
      var copyButton = document.createElement("button");
      copyButton.className = "copy-code-button";
      copyButton.textContent = "Copy";
      highlightDiv.style.position = "relative";
      copyButton.style.position = "absolute";
      copyButton.style.top = "5px";
      copyButton.style.right = "5px";
      copyButton.style.padding = "5px";
      copyButton.style.border = "none";
      copyButton.style.background = "#444";
      copyButton.style.color = "white";
      copyButton.style.cursor = "pointer";
      copyButton.style.borderRadius = "5px";
      highlightDiv.appendChild(copyButton);

      copyButton.addEventListener("click", function () {
        var codeToCopy = codeBlock.textContent;
        navigator.clipboard.writeText(codeToCopy).then(
          function () {
            copyButton.textContent = "Copied!";
            setTimeout(function () {
              copyButton.textContent = "Copy";
            }, 2000);
          },
          function (err) {
            console.error("Could not copy text: ", err);
          }
        );
      });
    }
  });
});
