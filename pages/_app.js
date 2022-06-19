import '../styles/design_tokens.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

// Copied code from this page
// ! https://nextjs.org/docs/basic-features/layouts