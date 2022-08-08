<template>
<div class="container mt-5 text-center">
  <div class="card-header">
    Name
  </div>
  <div class="card-body">
      <div class="d-flex justify-content-between">
         <router-link to="/product/info/12" class="text-dark" style="text-decoration:none; cursor:pointer">نگهداری <i class='bx bxs-leaf'></i></router-link>
           <div style="cursor : pointer">
     <i @click="liked" v-if="!like" class='bx bx-heart h5'>10</i>
     <i @click="liked" v-else class='bx bxs-heart h5'>11</i>
     </div>
      </div>
    
    <!---------------------------------->
  <div id="carouselExample2" class="carousel slide z-depth-1-half" data-ride="carousel" data-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExample2" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExample2" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!---------------------------------->
    <div class="d-flex justify-content-between">
    <p class="card-text">Price$</p> 
    <p class="card-text">Size</p> 
   
   </div>
    <a href="#" class="btn ">comment</a>
    <a href="#" class="btn ">Edit</a>
    <a href="#" class="btn b">Delete</a>

  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</template>


<script>
export default {
    data() {
        return {
            like: false,
            overaly : false
        }
    },
    methods: {
        liked() {
            this.like = !this.like
             this.overaly = !this.overaly
        },
        overal() {
            this.overaly = !this.overaly
        }
    }
}
</script>


<style>
.c {
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-radius: 28px;
    box-shadow: 0px 40px 50px -20px rgba(50, 55, 63, 0.46);
    padding: 20px;
}

.c,
img {
    display: block;
    width: 100%;
    height: auto;

}

.c .buy ,.c .comment {
    background-color: #17202c;
    width: 50px;
    height: 50px;
    border-radius: 1000px;
    position: absolute;
    bottom: 17px;
    left: 35%;
    transform: translate(-50%);
    cursor: pointer;
}

.c .comment {
    left: 65%;
}

.c .buy i , .c .comment i {
    font-size: 24px;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.overlay {
    color: white;
    position: absolute;
    bottom: 0;
    right: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 0;
    height: 100%;
    transition: .5s ease;
}

.c .overlayClick {
    width: 100%;
    right: 0;
}
</style>