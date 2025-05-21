import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1b1d1a] p-4 text-[#d9d7d3] font-bold text-xl justify-between items-center flex ">
        <Link href={"/"} className="flex">
          <p>Yelysei Kudelia</p>
          <div className="w-[2px] h-[22px] bg-[#d9d7d3] relative top-1 left-3"/>
          <p className="relative left-6">Portfolio Gallery</p>
        </Link>  
      <nav className="flex space-x-4">
        <a href="/pages/project_gallery" className="hover:text-white">Projects</a>
        <a href="/pages/contact" className="hover:text-white">Contact</a>
        <a href="/pages/donate" className="hover:text-white">Donate</a>
      </nav>
    </header>
  );
}
