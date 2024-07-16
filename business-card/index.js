// import react from 'react'
// import ReactDOM from 'react-dom'
// import img from '/personal info/pic.jpeg'

function Page(){
  return (
     <div className="personal-blog">
        <div className="image"> 
            <img src="pic.jpeg"></img>
        </div>
        <div className="user-details">
            <h2>Aravind Balaji</h2>
            <h5>WEB DEVELOPER</h5>
            <p>TCS Pvt lmt</p>
        </div>
        <div className="email">
           <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhvMcBSKnfFDVHbsBCwkKQQrRJCQFrcLHMDvCwLwvmldtJCvjlDmcLcHwpCDBsWqfhJB" target="blank"><button>Mail    <i class="fa-solid fa-envelope"></i></button></a> 
        </div>
        <div className="about">
         <h4>About</h4>
         <p>Aspiring web developer seeking to leverage strong programming skills and creative problem-solving abilities to build dynamic, user-centric websites and applications.</p>
        </div>
        <div className="interest">
         <h4>Interest</h4>
         <p>Aspiring web developer seeking to leverage strong programming skills and creative problem-solving abilities to build dynamic, user-centric websites and applications.</p>
        </div>
        <footer>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        </footer>
        
     </div>
  )
}

ReactDOM.render(<Page/>, document.getElementById('root'));