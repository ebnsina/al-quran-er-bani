import { useRouteError } from 'react-router-dom';

type RouteError = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  console.error(error);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-medium mb-2'>Oops!</h1>
      <p className='text-slate-600 mb-4'>
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
