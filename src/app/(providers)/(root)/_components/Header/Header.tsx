import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b flex items-center gap-x-4">
      <Link href="/">TTIILL</Link>

      <nav>
        <ul className="flex gap-x-2">
          <li>
            <Link href="/til/trending">트렌딩</Link>
          </li>
          <li>
            <Link href="/til/latest">최신</Link>
          </li>
          <li>
            <Link href="/til/write">TIL 쓰러가기</Link>
          </li>
          <li>
            <Link href="/profile">프로필</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
