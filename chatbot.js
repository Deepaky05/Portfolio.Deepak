// function toggleChat() {
//   let chatBox = document.getElementById("chat-box");

//   if (chatBox.style.display === "none" || chatBox.style.display === "") {
//     chatBox.style.display = "block";
//   } else {
//     chatBox.style.display = "none";
//   }
// }

function loadChatbot() {
  document.body.insertAdjacentHTML('beforeend', `
    <div id="chat-btn" onclick="toggleChat()">💬</div>

    <div id="chat-box" style="display:none;">
      <div class="chat-header">
        Deepak's AI Assistant
        <span onclick="toggleChat()">✖</span>
      </div>

      <div class="chat-body">
        👋 Hey! Deepak is working on it (Under Development)...
      </div>

      <div class="chat-footer">
        <input type="text" placeholder="Type message..." />
      </div>
    </div>
  `);
}

function toggleChat() {
  let box = document.getElementById("chat-box");
  box.style.display = (box.style.display === "block") ? "none" : "block";
}

// auto load
loadChatbot();





