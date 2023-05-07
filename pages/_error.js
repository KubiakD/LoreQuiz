import Link from 'next/link';

export default function Error({statusCode }) {
    return (
      <>
        <h1>Every mistake is a lesson</h1>
        <p>
          An error {statusCode} occurred. While we fix it, you can read some
        </p>
        <Link href='https://universe.leagueoflegends.com'>
          League of Legends lore.
        </Link>
      </>
    );
    
};
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};