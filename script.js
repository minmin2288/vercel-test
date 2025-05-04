function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // 유저 메시지 추가
  const userDiv = document.createElement("div");
  userDiv.textContent = "🧑: " + userMessage;
  chatBox.appendChild(userDiv);

  // GPT 응답 (임시 응답)
  const gptDiv = document.createElement("div");
  gptDiv.textContent = "🤖: " + getGPTResponse(userMessage);
  chatBox.appendChild(gptDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getGPTResponse(message) {
  // 여기엔 나중에 실제 GPT API 연동 가능
  return "명령어 \"" + message + "\"에 대한 응답입니다.";
}
