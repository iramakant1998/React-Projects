import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
// import Parent from './Parent';
import Delayed from './Delayed';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <Delayed/>
  </StrictMode>
);
