function Header() {
    return (
      <header className='header'>
        <img className="header-logo" src={'/assets/logo.png'} alt="dashboard logo" />
        <div className='container-header'>
            <img src={'/assets/profile.png'} alt="user profile png" />
            <a className='link-header' href="#">Logout</a>
        </div>
      </header>
    )
  }
  
  export default Header
  