import '../styles/globals.css'
import Beaufort from 'next/font/local';
import Spiegel from 'next/font/local';

const beaufort = Beaufort({
  src: '../public/fonts/BeaufortforLOL-Bold.otf',
  variable: '--font-beaufort',
});

const spiegel = Spiegel({
  src: '../public/fonts/Spiegel-Regular.otf',
  variable: '--font-spiegel'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${beaufort.variable} ${spiegel.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
