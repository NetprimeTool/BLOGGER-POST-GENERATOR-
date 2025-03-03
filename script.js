document.getElementById("generate").addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let imdb = document.getElementById("imdb").value;
    let releaseDate = document.getElementById("releaseDate").value;
    let language = document.getElementById("language").value;
    let quality = document.getElementById("quality").value;
    let size = document.getElementById("size").value;
    let format = document.getElementById("format").value;
    let cast = document.getElementById("cast").value;
    let duration = document.getElementById("duration").value;
    let screenshots = [
        document.getElementById("screenshot1").value,
        document.getElementById("screenshot2").value,
        document.getElementById("screenshot3").value,
        document.getElementById("screenshot4").value,
        document.getElementById("screenshot5").value,
        document.getElementById("screenshot6").value
    ];
    let downloadLinks = [
        document.getElementById("download1").value,
        document.getElementById("download2").value,
        document.getElementById("download3").value,
        document.getElementById("download4").value
    ];

    let postHTML = `
<h2 style="color:yellow;">${title}</h2>
<p>✅ ${description}</p>
<b>IMDb:</b> ${imdb} | <b>Release Date:</b> ${releaseDate}<br>
<b>Language:</b> ${language} | <b>Quality:</b> ${quality}<br>
<b>Size:</b> ${size} | <b>Format:</b> ${format}<br>
<b>Cast:</b> ${cast} | <b>Duration:</b> ${duration}<br><br>

<h3>Screenshots</h3>
${screenshots.map(img => `<img src="${img}" width="300">`).join('<br>')}

<h3>Download Links</h3>
${downloadLinks.map(link => `<a href="${link}" style="display:block; background:#ff9800; color:white; padding:10px; margin:5px 0; text-align:center;">Download</a>`).join('')}
    `;

    document.getElementById("output").value = postHTML;
});

document.getElementById("copy").addEventListener("click", function() {
    let outputText = document.getElementById("output");
    outputText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
});
