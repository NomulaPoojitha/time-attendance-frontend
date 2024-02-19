const Menu = () => (
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-3 ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
         <img  height={48} src="https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.png"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav" >
            <li class="nav-item mx-3 fs-5">
              <a class="nav-link" href="/login">
                
                Login
              </a>
            </li>
            {/* <li class="nav-item  mx-3 fs-5">
              <a class="nav-link" href="/signup">
                Sign Up
              </a>
            </li> */}
            <li class="nav-item  mx-3 fs-5">
              <a class="nav-link" href="/employee-reports">
                Employee Reports
              </a>
            </li>
            <li class="nav-item  mx-3 fs-5">
              <a class="nav-link" href="/hr-reports">
                HR Reports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Menu;
