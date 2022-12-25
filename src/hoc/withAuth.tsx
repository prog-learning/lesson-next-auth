import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

/* HOC */
export const withAuth = (Component: FC) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (!session) {
        router.push('/login');
      }
    }, [session, router]);

    if (!session) {
      return <></>;
    }

    return <Component {...props} />;
  };
};
