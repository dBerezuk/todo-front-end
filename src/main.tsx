import ReactDOM from 'react-dom/client';

import MainProvider from './providers/MainProvider.tsx';

import '@/assets/styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(<MainProvider />);
