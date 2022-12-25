import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    /* ログインしているときは/loginは表示できないように */
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div>
      <h1>Lesson Next Auth</h1>
      <h2>Login Page</h2>
      {session && session.user ? (
        <>
          <p>Logged in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button
            onClick={() =>
              signIn('google', { callbackUrl: 'http://localhost:3000/' })
            }
          >
            Google Login
          </button>
        </>
      )}
    </div>
  );
}
