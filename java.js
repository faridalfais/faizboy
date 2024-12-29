function changeColor() {
  const paragraph = document.getElementById("myParagraph");
  const colors = ["white", "lightpink", "navy", "skyblue","hotpink"];
  paragraph.style.color = colors[Math.floor(Math.random() * colors.length)];
}

setInterval(changeColor, 0500); // Ubah warna setiap 1 detik