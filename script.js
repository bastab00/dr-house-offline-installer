document.getElementById("downloadBtn").addEventListener("click", () => {
    const zipLink = "https://github.com/bastab00/dr-house-offline-installer/releases/download/v1.0.0/readme.zip";

    if (!zipLink) {
        alert("Download link not set.");
        return;
    }

    window.location.href = zipLink;
});
