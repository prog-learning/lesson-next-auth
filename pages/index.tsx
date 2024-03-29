import { useSession, signIn, signOut } from 'next-auth/react';
import { withAuth } from '../src/hoc/withAuth';

export const Home = () => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div>
      <h1>Lesson Next Auth</h1>
      <h2>Admin Page</h2>
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
};

export default withAuth(Home);
