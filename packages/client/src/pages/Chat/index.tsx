import { useQuery } from "@tanstack/react-query";
import InputMessage from "components/InputMessage";
import ReceiveMessage from "components/ReceiveMessage";
import SentMessage from "components/SentMessage";
import type IMessage from "types/messages";
import chatApi from "api/chat";

const useLogged = {
  id: 2,
  name: "Anakin Skywalker",
};

function Chat() {
  const { data: messages, isLoading: isLoadingMessages } = useQuery<IMessage[]>(
    {
      queryKey: ["messages"],
      queryFn: chatApi.getMessages,
    }
  );

  if (isLoadingMessages) return <div>Loading...</div>;

  return (
    <div className="container mx-auto h-screen flex justify-center pt-10">
      <div className="grid grid-rows-6 w-full sm:w-full  lg:w-1/2">
        <div className="row-span-5">
          {messages?.map((message: any) => (
            <div key={message.id}>
              {message.userId === useLogged.id ? (
                <SentMessage message={message} />
              ) : (
                <ReceiveMessage message={message} />
              )}
            </div>
          ))}
        </div>
        <InputMessage />
      </div>
    </div>
  );
}

export default Chat;
