import Link from 'next/link';
export default function notFound () {
    return (
      <>
        <h1>Page not found</h1>
        <p>Go back to the <Link href='/'>home page</Link></p>
      </>
    );
};