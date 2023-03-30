async function getMessages() {
  return fetch("http://localhost:3000/chat/messages").then((res) => res.json());
}

export default {
  getMessages,
};
