import PictureObiWan from "assets/avatars/obi-wan.png";
import type IMessage from "types/messages";

function SentMessage({ message }: { message: IMessage }) {
  const { id, userName, createdAt } = message;

  // format time HH:mm
  const time = new Date(createdAt).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={PictureObiWan} />
        </div>
      </div>
      <div className="chat-header mb-1">
        {userName}
        <time className="text-xs opacity-50 ml-2">{time}</time>
      </div>
      <div className="chat-bubble">I hate you!</div>
      <div className="chat-footer opacity-50">Enviado</div>
    </div>
  );
}

export default SentMessage;
