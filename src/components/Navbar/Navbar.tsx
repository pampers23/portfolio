import { Navbar } from "../ui/resizable-navbar";

const NavbarMenu = () => {
  return (
    <div>
        <Navbar>
            <div className="flex items-center justify-between w-full px-8 py-4">
                <span className="text-xl font-bold">Lance</span>
                <div className="flex gap-6">
                    <a href="/home" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
        </Navbar>
    </div>
  )
}

export default NavbarMenu
