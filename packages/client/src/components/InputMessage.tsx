import { ReactComponent as SentIcon } from "assets/icons/sent.svg";

function InputMessage() {
  return (
    <div className="flex justify-center items-center">
      <div className="form-control w-full flex flex-row">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enviar mensagem..."
            className="input input-bordered w-full"
          />
          <button className="btn btn-square">
            <SentIcon width="24" className="fill-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputMessage;
