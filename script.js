document.getElementById("downloadBtn").addEventListener("click", () => {
    // Insert your Google Drive or Dropbox zip link here
    const zipLink = "YOUR_ZIP_LINK_HERE";

    if (!zipLink || zipLink.includes("YOUR_ZIP_LINK_HERE")) {
        alert("Download link not set. Add your ZIP file drive link in script.js!");
        return;
    }

    window.location.href = zipLink;
});
