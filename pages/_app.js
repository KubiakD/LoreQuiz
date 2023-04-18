import '../styles/globals.css'
import Layout from '../components/Layout';
import Beaufort from 'next/font/local';
import Spiegel from 'next/font/local';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';

const beaufort = Beaufort({
  src: '../public/fonts/BeaufortforLOL-Bold.otf',
  variable: '--font-beaufort',
});

const spiegel = Spiegel({
  src: '../public/fonts/Spiegel-Regular.otf',
  variable: '--font-spiegel'
});

export default function App({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <main className={`${beaufort.variable} ${spiegel.variable}`}>
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </main>
  );
};
