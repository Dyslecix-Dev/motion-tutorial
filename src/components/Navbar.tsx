export default function Navbar() {
  return (
    <nav className="h-[5vh] w-full px-5 flex items-center space-x-4 bg-white text-xl">
      <a href="/">Home</a>
      <a href="/drag">Drag</a>
      <a href="/gesture">Gesture</a>
      <a href="/keyframes">Keyframes</a>
      <a href="/layout">Layout</a>
      <a href="/rotate">Rotate</a>
      <a href="/scroll-linked-animation">Scroll Linked Animation</a>
    </nav>
  );
}
