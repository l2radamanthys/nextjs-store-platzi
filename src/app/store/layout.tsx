export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Navergacion de las Categorias</nav>
      {children}
    </main>
  );
}
