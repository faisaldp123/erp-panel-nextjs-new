import Layout from '@/components/Layout'
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import NextNProgress from 'nextjs-progressbar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Cookies from 'js-cookie';
import UnauthenticatedLayout from '@/components/UnauthenticatedLayout';
import { Notification } from '@/components/shared/notification';


 function App({ Component, pageProps }) {

  const token = Cookies.get("access_token");

 

 
  return (
    <Provider store={store}>
<NextNProgress />
<LocalizationProvider dateAdapter={AdapterDayjs}>
{/* {
    token ? */}
      <Layout>
    <Component {...pageProps} />
  </Layout> 
  {/* :  
  <UnauthenticatedLayout>
      <Component {...pageProps} />
    </UnauthenticatedLayout>
  } */}
      <Notification/>
    </LocalizationProvider>

  </Provider>
  )
}

export default App;