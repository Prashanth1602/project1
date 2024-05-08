import React from "react";
import "./Home.css"

function Home(){
    return(
        <>
        <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" style={{height:"500px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" style={{height:"500px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" class="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br/>
<div class="parallax">
<div className="container" style={{display:"flex"}}>
    <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" style={{height:"200px"}} alt="..."/>
    <br/>

<div style={{paddingLeft:"10px"}}>
    <p style={{alignContent:"center",backgroundColor:"gray",color:"white", paddingLeft:"10px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae modi cum ipsam ad, illo possimus laborum ut
              reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
              Reiciendis assumenda iusto sapiente inventore animi?
            </p></div>
        </div>

        <div class="container">
        <div class="row mt-3">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
    <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" style={{height:"200px"}} class="card-img-top" alt="image1"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" style={{height:"200px"}} class="card-img-top" alt="image2"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <img src="https://buffer.com/library/content/images/2023/10/free-images.jpg" style={{height:"200px"}} class="card-img-top" alt="image2"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
        </div>
        </>
    );
}
export default Home;