import { Outlet, Link } from "react-router-dom"

function Sablon() {
   
   return(
      <>
         <header className="container mb-3 ">
            <nav className="nav" >
            <Link className="nav-link" to="/"> Ana Ekran</Link> 
            <Link className="nav-link" to="/blog"> Blog Ekranı </Link> 
            <Link className="nav-link" to="/iletisim"> İletişim Ekranı </Link> 
            </nav>
         </header>   
         <section> <Outlet /> </section>  
         <footer>Tüm hakları saklıdır.</footer>
       </>
   )
}
export default Sablon;