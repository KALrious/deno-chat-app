import {
  html,
  render,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";
let ws;
function Chat() {
  const [messages, setMessages] = useState([]);
  const onReceiveMessage = ({ data }) => setMessages((m) => ([...m, data]));
  const onSendMessage = (e) => {
    const msg = e.target[0].value;
    e.preventDefault();
    ws.send(msg);
    e.target[0].value = "";
  };
  useEffect(() => {
    if (ws) ws.close();
    ws = new WebSocket(`ws://${window.location.host}/ws`);
    ws.addEventListener("message", onReceiveMessage);
    return () => {
      ws.removeEventListener("message", onReceiveMessage);
    };
  }, []);

  return html`
                ${
    messages.map((message) =>
      html`
                <div class='message'>${message}</div>
            `
    )
  }
                <form class='form' onSubmit=${onSendMessage}>
                    <input class='input' type="text" />
                    <button class='button' >Send</button>
                </form>
            `;
}
