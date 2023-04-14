import Link from 'next/link';
import classes from './Layout.module.css';
export default function Layout({ children }) {
  return <div className={classes.layout}>
    <Link href='/'>Lore Quiz</Link>
  {children}
  </div>;
}