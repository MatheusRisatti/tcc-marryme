import { createBrowserRouter } from 'react-router-dom'

import { Menu } from '@/pages/app/menu'
import { TemplatePage } from '@/pages/app/template'

export const router = createBrowserRouter([
  {
    path: '/:slug',
    element: <TemplatePage />,
  },
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  },
])
