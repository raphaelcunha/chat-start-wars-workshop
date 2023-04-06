import { useMutation } from "@tanstack/react-query";
import { ReactComponent as SentIcon } from "assets/icons/sent.svg";
import { useRef } from "react";
import chatApi from "api/chat";

function InputMessage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutateAsync } = useMutation({
    mutationFn: chatApi.postMessage,
    onMutate: (newMessage) => {
      console.log("onMutate", newMessage);
    },
    onError: (error, newMessage, rollback) => {
      console.log("onError", error, newMessage, rollback);
    },
    onSuccess: (data, newMessage) => {
      console.log("onSuccess", data, newMessage);
    },
    onSettled: (data, error, newMessage) => {
      console.log("onSettled", data, error, newMessage);
    },
  });

  async function sendMessage() {
    if (!inputRef.current?.value) return;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="form-control w-full flex flex-row">
        <div className="input-group">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enviar mensagem..."
            className="input input-bordered w-full"
          />
          <button className="btn btn-square" onClick={sendMessage}>
            <SentIcon width="24" className="fill-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputMessage;
