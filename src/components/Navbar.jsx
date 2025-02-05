import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
          {/* all ids match up with the labels for toggling open and close */}
          <input type="checkbox" id="sidebar-active" />  
          <label htmlFor="sidebar-active" className="open-sidebar-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </label>

          <div className="link-containers">
            <label htmlFor="sidebar-active" className="close-sidebar-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </label>

            <Link className="link home-link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/contact">Contact Us</Link>
          </div>

         
        </nav>
    )
}