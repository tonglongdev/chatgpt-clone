import { useUser } from "@auth0/nextjs-auth0/client";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const Message = ({ role, content, isLoading = false }) => {
  const { user } = useUser();
  console.log("USER: ", user);
  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-5 p-5 ${
        role === "assistant"
          ? "bg-gray-600"
          : role === "notice"
          ? "bg-red-600"
          : ""
      }`}
    >
      <div className="flex items-start gap-2">
        {role === "user" && !!user && (
          <Image
            src={user.picture}
            width={30}
            height={30}
            alt="User avatar"
            className="rounded-sm shadow-md shadow-black/50"
          />
        )}
        {role === "assistant" && (
          <>
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-sm bg-gray-800 shadow-md shadow-black/50">
              <FontAwesomeIcon icon={faRobot} className="text-emerald-200" />
            </div>
            {isLoading && (
              <div className="loading-dots ml-3 mt-3" />
            )}
          </>
        )}
      </div>
      <div className="prose prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};
