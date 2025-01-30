function translateText() {
    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("languageSelect").value;
    let url = `https://translate.google.com/?sl=auto&tl=${lang}&text=${encodeURIComponent(text)}&op=translate`;

    // Open in new tab
    window.open(url, "_blank");
}