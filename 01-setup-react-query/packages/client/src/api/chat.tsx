async function getMessages() {
  return fetch("http://localhost:3000/chat/messages").then((res) => res.json());
}

async function postMessage(data: { userId: number; message: string }) {
  return fetch("http://localhost:3000/chat/messages", {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export default {
  getMessages,
  postMessage,
};
