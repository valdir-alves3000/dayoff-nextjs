import Image from "next/image"
import Link from "next/link"
import { ActiveLink } from "./ActiveLink"

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Day Off"
              width={100}
              height={40}
              priority
              className="h-16 w-auto"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          
          <nav className="flex space-x-6">
            <ActiveLink 
              href="/home" 
            >
              Home
            </ActiveLink>
            <ActiveLink 
              href="/" 
            >
              Sobre
            </ActiveLink>
          </nav>
        </div>
      </div>
    </header>
  )
}