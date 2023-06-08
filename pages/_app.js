import '../styles/globals.css'
import Layout from '../components/Layout';
import Beaufort from 'next/font/local';
import Spiegel from 'next/font/local';
import Context from '../store/context';
import SettingsCtx from '../store/userSettings';

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
  <SettingsCtx>
   <Context>
    <Layout >
      <Component {...pageProps} />
    </Layout>
   </Context>   
  </SettingsCtx>
    </main>
      
  );
}
