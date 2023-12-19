const Header = (): JSX.Element => {
  return (
    <header className="relative w-full overflow-hidden bg-[#25292f] uppercase dark:border-b-2 dark:border-b-icterine dark:pb-8">
      <h1 className="relative -left-2 -top-4 m-0 -mb-14 whitespace-nowrap p-0 text-[15.9vw] leading-[0.85]">
        Brazilian Nut <span className="outline">News</span>
      </h1>
      <div className="absolute bottom-8 right-0 bg-cinder px-3 py-1 font-wide uppercase text-icterine">
        where the best NEWS rises to the top
      </div>
    </header>
  )
}

export default Header
