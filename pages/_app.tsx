import "@/styles/global.css";
type AppProps = {
  Component: any;
  pageProps?: any;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
