import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import DotPattern from './components/ui/dot-pattern.tsx'
import { cn } from './lib/utils.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
            )}
        /> */}
        <App />
    </React.StrictMode>,
)
