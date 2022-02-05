import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>Sobre</h3>
          <h3>Contato</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Siga
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Entrar</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          Comece
        </h3>
      </div>
    </header>
  )
}

export default Header
