export function NavBar() {
  return (
    <header className="w-screen flex fixed items-center justify-center h-16 bg-gray-12/25">
      <div className="container flex justify-between">
        <h1>Logo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>HOME</li>
            <li>SOBRE</li>
            <li>MINT</li>
            <li>SERVIÇOS</li>
            <li>ORÇAMENTO</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
