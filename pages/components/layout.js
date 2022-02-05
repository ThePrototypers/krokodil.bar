export default function Layout({ children }) {
  return (
    <div className="max-w-full desktop:max-w-screen-desktop mx-auto font-rubik">
      {children}
    </div>
  )
}
