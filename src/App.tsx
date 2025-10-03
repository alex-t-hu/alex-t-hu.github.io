import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-full flex flex-col bg-white">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
