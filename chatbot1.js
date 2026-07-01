function loadChatbot() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div id="chat-btn" onclick="toggleChat()">💬</div>

    <div id="chat-box">
      <div class="chat-header">
        <span>Deepak's AI Assistant</span>
        <span class="close-btn" onclick="toggleChat()">✖</span>
      </div>

      <div class="chat-body" id="chat-body">
        <div class="bot-msg">
          👋 Hi! Ask me anything about Deepak.
        </div>
      </div>

      <div class="chat-footer">
        <input
          type="text"
          id="chat-input"
          placeholder="Ask something about Deepak..."
        />
        <button id="send-btn">Send</button>
      </div>
    </div>
  `
  );

  document
    .getElementById("send-btn")
    .addEventListener("click", sendMessage);

  document
    .getElementById("chat-input")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
}

function toggleChat() {
  const box = document.getElementById("chat-box");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
}

async function sendMessage() {
  const input = document.getElementById("chat-input");
  const body = document.getElementById("chat-body");
  const sendBtn = document.getElementById("send-btn");

  const message = input.value.trim();

  if (!message) return;

  // User Message
  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.textContent = message;
  body.appendChild(userDiv);

  input.value = "";

  // Disable Send Button
  sendBtn.disabled = true;
  sendBtn.innerText = "....";

  // Typing Animation
  const loading = document.createElement("div");
  loading.className = "bot-msg";
  loading.id = "loading";

  loading.innerHTML = `
      <div class="typing">
          <span></span>
          <span></span>
          <span></span>
      </div>
  `;

  body.appendChild(loading);

  body.scrollTop = body.scrollHeight;

  try {
    const response = await fetch(
      "https://deepak-ai.deepakyogi00574.workers.dev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      }
    );

    const data = await response.json();

    loading.remove();

    const botDiv = document.createElement("div");
    botDiv.className = "bot-msg";
    botDiv.textContent = data.reply || "No response.";

    body.appendChild(botDiv);
  } catch (err) {
    loading.remove();

    const botDiv = document.createElement("div");
    botDiv.className = "bot-msg";
    botDiv.textContent = "❌ Unable to connect.";

    body.appendChild(botDiv);

    console.error(err);
  } finally {
    sendBtn.disabled = false;
    sendBtn.innerText = "Send";
    body.scrollTop = body.scrollHeight;
    input.focus();
  }
}

loadChatbot();
