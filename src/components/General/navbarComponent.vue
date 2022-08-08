<template>
<!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
<div>
    <div class="d-flex justify-content-between p-3">
        <div class="d-flex">
            <i   type="button"  data-toggle="modal" data-target="#exampleModalLong" class="bx bxs-user-circle text-dark h3"></i>
            <i  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" class="bx bxs-cart-alt text-dark h3"></i>
        </div>
        <h1>IRAN FLOWER</h1>
    </div>
    
<div class="container mb-4">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-md-6">
                <div class="form d-flex border">
                  <input type="text" class="form-control form-input text-start " placeholder="...Search anything">
                  <i class="bx bx-search h1 mt-2 pl-3" style="cursor:pointer"></i>
                </div>
              </div>
            </div>
            
          </div>
    <div class="container ">
       <vue-horizontal responsive>
            <section class="m-auto">
                <div class="list-group list-group-horizontal text-center wc" id="list-tab" role="tablist">
                    <router-link to="/" class="list-group-item list-group-item-light list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">صفحه اصلی</router-link>
                    <router-link to="/" style="text-decoration:none"  class="list-group-item list-group-item-light list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">گلها </router-link>
                    <router-link to="/" style="text-decoration:none"  class="list-group-item list-group-item-light list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">گیاهان </router-link>
                     <router-link to="/" style="text-decoration:none"  class="list-group-item list-group-item-light list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">وسایل جانبی </router-link>
                   <router-link to="/shops"  style="text-decoration:none" class="list-group-item list-group-item-light list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">مغازه ها</router-link>
                   <router-link to="/articles" style="text-decoration:none"  class="list-group-item list-group-item-light list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">مقاله ها </router-link>
                   <router-link to="/about" style="text-decoration:none"  class="list-group-item list-group-item-light list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">درباره ی ما </router-link>
                </div>
            </section>
        </vue-horizontal>
    </div>
    <!--shopping caer body-->
    <div class="p-3">
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <shoppingCart/>
        </div>
    </div>
    <!--login form-->
<!--login Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <i class="btn" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"><i class='bx bx-x h3'></i></span>
        </i>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import shoppingCart from '../General/shoppingcartComponent.vue'

export default {
    components: {
        VueHorizontal,shoppingCart
    },
    data() {
        return {
      /*     items : [
               {id : 1 ,title : 'صفحه ی اصلی'},
               {id : 2 ,title : 'گلها'},
               {id : 3 ,title : 'گیاهان'},
               {id : 4 ,title : 'مغازه ها'},
               {id : 5 ,title : 'وسایل جانبی'},
               {id : 6 ,title : 'مقاله ها'},
               {id : 7 ,title : 'درباره ی ما'},
           ]*/
        }
    }
}
</script>

<style scoped>
wc , a {
    width: 120px;
    border: none;
    border-radius: 20px;
    color: black;
}
.form{
    position: relative;
}

.border{
    border-radius:  20px;
}
.form-input{
   border:none;
    height: 55px;
    text-indent: 33px;
    border-radius: 10px;
}

.form-input:focus{
    box-shadow: none;
    
}

</style>
