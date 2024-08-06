import { PLATFORM_NAME } from "@/config/platform-config"
import Link from "next/link"

interface LogoProps {
  
}

const Logo = ({}:LogoProps) => {
  return <Link className="text-xl font-extrabold uppercase text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text" href="/">{PLATFORM_NAME}</Link>
}

export default Logo