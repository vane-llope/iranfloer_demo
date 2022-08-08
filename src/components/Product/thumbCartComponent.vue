<template>
<div style="cursor : pointer; " @click="overal">
    <div class="c mb-3" >
        <div class="nav-bar d-flex justify-content-between" >
            <i class='bx bxs-info-circle h3' @click="info"></i>
            
            <i @click="liked" v-if="!like" class='bx bx-heart h3'>10</i>
            <i @click="liked" v-else class='bx bxs-heart h3'>11</i>
            
        </div>

        <img class="car-1 w-100" src="https://img.freepik.com/free-photo/yellow-flower-white-background_1203-2149.jpg?w=2000" alt="">
        <div class="mb-5 ">
            <ul style="list-style-type: none;" class=" text-start">
                <li class="text-center fw-bold h3">name</li>
                <li class="text-center fw-bold ">price$</li>
            </ul>
        </div>
        <div type="button" @click="overaly = !overaly" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" class="buy">
            <i class="bx bxs-cart-alt"></i>
        </div>
        <div type="button" @click="overaly = !overaly" class="comment">
            <i class='bx bxs-chat'></i>
        </div>
        
        <div id="overlay" class="overlay" :class="{overlayClick : overaly }">
            <div class="text-center mt-5">
                <p class="fw-bold ">اطلاعات بیشتر</p>
                <ul style="list-style-type: none;" class="text-end" >
                     <li class=" fw-bold">
                         <router-link to="/user/13" class="text-light" style="text-decoration:none">فروشنده </router-link><i class='bx bxs-store-alt'></i>
                    </li>
                    <li class=" fw-bold ">رنگ ها<i class='bx bxs-color' ></i></li>
                    <li class=" fw-bold ">سایز <i class='bx bx-shape-circle'></i></li>
                    <!--<li class="fw-bold ">نمایش نظرات<i class='bx bx-message-detail'></i></li>-->
                    <li class=" fw-bold">
                         <router-link to="/product/info/12" class="text-light" style="text-decoration:none">نگهداری </router-link><i class='bx bxs-leaf'></i>
                    </li>
                </ul>

            </div>
        </div>
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
