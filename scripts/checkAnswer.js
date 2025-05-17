async function checkAnswer() {
  const correctHash = "3c80bfa9bf63d86a5b0d61d764c8cae77f22474b974d5d032d5a4997e99d8ec2
";
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

