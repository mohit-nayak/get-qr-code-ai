import Container from "@/components/global/container"
import Logo from "./logo"
import AuthControls from "./auth-controls"

interface NavbarProps {
  
}

const Navbar = ({}:NavbarProps) => {



  return <header className="border-b border-b-zinc-300 h-[62px] w-full sticky top-0 bg-white dark:bg-black z-[40]">
    <Container className="flex  items-center size-full justify-between">
        <Logo /> 
        <AuthControls />
    </Container>
  </header>
}

export default Navbar