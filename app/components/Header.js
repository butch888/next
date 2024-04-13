import Link from "next/link"
const Header = () => {
  return (
    <header>
      <strong>
      <span style={{fontSize: '8px'}}>
        Development and Visibility
        </span><br/>
        IT Campany D'n'V
      </strong>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contacts</Link>

      </nav>
    </header>
  )
}

export default Header
