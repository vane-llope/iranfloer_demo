<template>
  <div>
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <span style="font-size:30px;cursor:pointer" @click="statusAdjust">&#9776; </span>
  </div>
</nav>
<div id="mySidenav" class="sidenav bg-light pt-4">
  <div class="container mr-3 ">
  <h5 class="mt-3" ><i class='bx bxl-deezer'></i>دشبورد</h5>
  <a href="#"><i class='bx bx-file'></i>مقالات</a>
  <a href="#"><i class='bx bxs-color'></i>محتوای صفحه</a>
  <a href="#"><i class='bx bxs-leaf'></i>محصولات</a>
  <a href="#"><i class='bx bxs-florist'></i>محصولات کاربر</a>
  <a href="#"><i class='bx bxs-shield-alt-2'></i>امنیت</a>
</div>
</div>
<div id="main" >
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus veritatis nulla cum nesciunt repellat enim non fuga. Tempora sed doloribus, dolor delectus molestiae qui debitis accusantium? Asperiores, omnis quos!</p>
  
</div>
  </div>
</template>

<script>
export default {
data() {
  return {
    status : true
  }
},
methods: {
  statusAdjust(){
       if(this.status == true){
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("main").style.marginRight = "20%";
  }
  else {
    document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  }
    this.status = !this.status
  }
},

  
}
</script>

<style>

.sidenav {
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 55px;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
}

.sidenav a {
  text-decoration: none;
  color: #0f0f0f;
  display: block;
}

.sidenav a:hover {
  text-shadow: 2px 2px 8px #9f9191;
}

.sidenav .closebtn {
  cursor: pointer;
 /* position: absolute;
  top: 0;
  left: 25px;*/
  font-size: 36px;
}

#main {
  margin-right: 20%;
  transition: margin-right .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>