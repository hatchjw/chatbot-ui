import { signIn, useSession } from "next-auth/react";
import ChatPage from "./_components/ChatPage"; // <-- use the actual exported component

export default function Home() {
  const { status } = useSession();

  if (status === "loading") return <p>Loading…</p>;
  if (status === "unauthenticated")
    return (
      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    );

  return <ChatPage />;
}
