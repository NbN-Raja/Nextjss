import NavigationPage from "../component/navigation/page";
import Sidenav from "../component/sidenav/sidenav"

export default function Layout({ children }) {
  return (
    <>
      <NavigationPage />

      <div className="container p-2 flex justify-center items-center">
      <div className=" fixed left-40 top-10   w-[259px] p-2 flex-col py-4">
         <Sidenav />
        </div>
        <main>{children}</main>

      </div>
    </>
  )
}