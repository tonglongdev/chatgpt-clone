import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <div>
      <Head>
        <title>Next JS ChatGPT Starter</title>
      </Head>
      <h1>Welcome to the Next JS &amp; ChatGPT Starter</h1>
      <div className="mt-4 flex justify-center gap-3">
        {!user && (
          <>
            <Link href="/api/auth/login" className="btn">
              Login
            </Link>
            <Link href="/api/auth/signup" className="btn">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
