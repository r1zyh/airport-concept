import type { ReactNode } from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const THEME = createTheme()

/** Корневой маршрут приложения */
export const Route = createRootRoute({
  component: RootComponent,
})

/** Корневой компонент приложения, оборачивает роуты в тему Material-UI */
function RootComponent(): ReactNode {
  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  )
}
