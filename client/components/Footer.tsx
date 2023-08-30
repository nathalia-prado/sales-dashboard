function Footer() {
    return (
      <footer className="footer">
        <ul className="footer-ul">
          <li className="footer-li">
            <a href="#">
              <img src={'/assets/facebook.png'} alt="facebook logo" />
            </a>
          </li>
          <li className="footer-li">
            <a href="#">
              <img src={'/assets/google.png'} alt="google logo" />
            </a>
          </li>
          <li className="footer-li">
            <a href="#">
              <img src={'/assets/instagram.png'} alt="instagram logo" />
            </a>
          </li>
          <li className="footer-li">
            <a href="#">
              <img src={'/assets/whatsapp.png'} alt="whatsapp logo" />
            </a>
          </li>
        </ul>
        <p>&copy; Copyright - 2023 Nathalia Prado</p>
      </footer>
    )
  }
  
  export default Footer
  