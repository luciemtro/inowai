import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <aside
      role="navigation"
      aria-label="Navigation principale"
      className="fixed inset-y-0 left-0 w-[320px] h-screen bg-black text-white z-40"
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="p-5">
          <Link href="/" aria-label="Accueil INOWAI">
            <Image
              src="/images/nav/nav_logo.svg"
              alt="INOWAI"
              width={69}
              height={14}
              priority
              className="w-[69px] h-[14.25px]"
            />
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-5 space-y-2">
          <a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#">
            Tendances
          </a>
          <a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#">
            Mon compte
          </a>
        </nav>

        {/* CTA bas */}
        <div className="p-5">
          <button className="w-[200px] h-[53px] rounded-4xl bg-secondary text-secondary-foreground px-4 py-2 hover:bg-secondary-hover">
            Nouveau chat
          </button>
        </div>
      </div>
    </aside>
  );
}
