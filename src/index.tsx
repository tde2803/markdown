import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Routing } from 'app';

const rootElement = document.querySelector('#root') as HTMLDivElement;

const applicationRoot = createRoot(rootElement);

applicationRoot.render(
    <StrictMode>
        <Routing />
    </StrictMode>,
);
