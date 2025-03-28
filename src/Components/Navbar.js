import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-dark" style={{  backgroundColor: 'rgba(255, 255, 255, 0.7)', position:"fixed" , zIndex:"999", width:"100%"}}> 
  <div class="container-fluid">
  <a class="navbar-brand mx-2" href="#" ><img src="./images/logo2.png" style={{height:"40px", width:"40px"}}/></a>

    <a class="navbar-brand mx-2" href="#" style={{color:"blue", fontFamily: 'PT sans', color: '#65A0FB', fontSize: '30px', fontWeight: 'bold'}}>Social Media App</a>

    


    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

   


        <li class="nav-item">
          <a class="nav-link active mx-2" aria-current="page" href="#" style={{fontSize: '18px', fontWeight: 'bold', color: 'grey'}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#"style={{fontSize: '18px', fontWeight: 'bold', color: 'grey'}}>About Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link mx-2" href="#"style={{fontSize: '18px', fontWeight: 'bold', color: 'grey'}}>Contact Us</a>
        </li>
       

        <li class="nav-item">
          <a class="nav-link mx-2" href="#"style={{fontSize: '18px', fontWeight: 'bold', color: 'grey'}}>Locate Us</a>
        </li>

       
    
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{borderRadius:"20px"}}/>
        <button class="btn btn-outline-primary" type="submit" style={{borderRadius:"20px"}}>Search</button>
      </form>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar