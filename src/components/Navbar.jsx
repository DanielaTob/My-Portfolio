
export default function Navbar() {
  return (
    <div>
        <nav className="relative flex flex-wrap items-center justify-start py-2 bg-bglight mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-start">
              
              <div className=" flex flex-wrap items-center">
                <ul className="flex lg:flex-row md:flex-row sm:flex-row list-none ml-auto font-medium cursor-grab">
                  <li className="nav-item">
                    <a to="/" className="px-3 py-2 flex  items-center text-colortitle">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a to="/Shop" className="px-3 py-2 flex items-center text-colortitle ">
                      Work
                    </a>
                  </li>

                  <li className="nav-item indicator">
                    <a to="/Cart" className="px-3 py-2 flex items-center text-colortitle ">
                      Skills
                    </a>
                  </li>

                  <li className="nav-item indicator">
                    <a to="/Cart" className="px-3 py-2 flex items-center text-colortitle ">
                      About 
                    </a>
                  </li>

                
                  <li className="nav-item indicator">
                    <a to="/Cart" className="px-3 py-2 flex items-center text-colortitle ">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
        </div>
      </nav>
    </div>
  )
}
