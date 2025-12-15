import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-gradient-to-r from-[#89d969] to-[#0d8b3a] flex items-center px-4 shadow-md z-50">
      <Link
        href="https://menyay-sait.info"
        target="_blank"
        className="w-10 h-10 bg-[#0d8b3a] text-white text-lg font-bold flex items-center justify-center rounded-lg mr-3 shrink-0 hover:bg-[#0a7a32] transition-colors"
      >
        NN
      </Link>
      <div className="text-white text-xl font-bold">Menyay</div>
    </header>
  )
}
