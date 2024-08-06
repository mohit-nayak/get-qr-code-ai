import Container from "@/components/global/container"
import Logo from "./logo"

interface NavbarProps {
  
}

const Navbar = ({}:NavbarProps) => {
  return <header className="border-b border-b-zinc-300 h-[62px] w-full sticky top-0 bg-white dark:bg-black">
    <Container className="flex  items-center size-full">
        <Logo /> 
    </Container>
  </header>
}

export default Navbar