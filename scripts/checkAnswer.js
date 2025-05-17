async function checkAnswer() {
  const correctHash = "cbf5a5bbd3a188fdf39a9d59453b4c8ab3a97bbd7d8475fdf24d6402436d122e";
  const userInput = document.getElementById("answer").value.trim().toLowerCase();

  const encoder = new TextEncoder();
  const data = encoder.encode(userInput);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  if (hashHex === correctHash) {
    window.location.href = "success.html";
  } else {
    alert("Yanlış cevap. Tekrar deneyin.");
  }
}

