(function () {
  async function init() {
    const path = window.location.pathname;

    // Only show on lesson and assignment pages
    const isLesson = /\/modules\/module_\d+\/module\d+_\d+\.html$/.test(path);
    const isAssignment = /\/modules\/module_\d+\/assignments\/m\d+a\d+\.html$/.test(path);
    const isFinal = /\/modules\/final_project\/FinalProject\.html$/.test(path);
    if (!isLesson && !isAssignment && !isFinal) return;

    const tocSidebar = document.querySelector("#quarto-margin-sidebar");
    if (!tocSidebar) return;
    if (document.querySelector(".downloads-block")) return;

    const rawBase = "https://raw.githubusercontent.com/BiodiversityDataScienceCorp/DataInTheWild_Website/refs/heads/main";

    // baseName starts at "modules/" so COURSE_DATA lookups and raw URLs work
    // whether served from the root or the /DataInTheWild_Website subpath.
    const baseName = path.slice(path.indexOf("modules/")).replace(/\.html$/, "");
    const pageData = (typeof COURSE_DATA !== "undefined" && COURSE_DATA[baseName]) || { data: [] };

    // Build the container
    const block = document.createElement("div");
    block.className = "downloads-block";

    const heading = document.createElement("div");
    heading.className = "downloads-heading";
    heading.textContent = "Downloads";
    block.appendChild(heading);

    // Helper: make one consistent button
    function addButton(label, onClick) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "download-action";
      btn.textContent = label;
      btn.addEventListener("click", onClick);
      block.appendChild(btn);
    }

    // 1. Source QMD
    addButton("Download source (.qmd)", () =>
      downloadFile(rawBase + "/" + baseName + ".qmd", baseName.split("/").pop() + ".qmd")
    );

    // 2. Data files (only if present in COURSE_DATA)
    pageData.data.forEach(file => {
      addButton("Download data: " + file.name, () =>
        downloadFile(rawBase + file.url, file.name)
      );
    });

    // 3. Save as PDF (prints current page)
    addButton("Save as PDF", () => window.print());

    // placement
    const viewBlock = tocSidebar.querySelector(".view-block");
    if (viewBlock) {
      viewBlock.after(block);
    } else {
      tocSidebar.prepend(block);
    }

    async function downloadFile(url, filename) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("fetch failed");
        const blob = await res.blob();
        const objUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = objUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objUrl);
      } catch {
        window.open(url, "_blank");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();