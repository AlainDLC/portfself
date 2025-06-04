import { ArrowUp } from "lucide-react";
import { useRef } from "react";

export const ChatForm = ({
  setChatHistory,
  generateBotResponse,
  chatHistory,
}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          {
            role: "model",
            text: "Tänker....",
          },
        ]),
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provided above, please adress this query ${userMessage}`,
        },
      ]),
      100
    );
  };

  return (
    <div>
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Message..."
          className="message-input "
          required
          ref={inputRef}
          id="#"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-10 w-10 rounded-full"
        >
          <span>
            <ArrowUp className="h-5 w-5 " />
          </span>
        </button>
      </form>
    </div>
  );
};
