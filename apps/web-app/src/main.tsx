import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { buildProvidersTree } from '@helebba/design-system/common';
import { Menus } from '@helebba/design-system/web';
import { AppRouter } from './router';
import { GoogleOAuthProvider } from "@react-oauth/google";
import '@helebba/design-system/web/styles/index.css';

const { VITE_GOOGLE_CLIENT_ID } = import.meta.env;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, 
      retry: 1, 
      staleTime: 300000,
    },
  },
});

const ProvidersTree = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
  [GoogleOAuthProvider, { clientId: VITE_GOOGLE_CLIENT_ID }],
]);

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js', { type: 'module' });
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ProvidersTree>
    <>
          <Menus>
            <AppRouter />
      </Menus>
      </>
    </ProvidersTree>
  // </React.StrictMode>,
);