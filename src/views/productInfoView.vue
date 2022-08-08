<template>
<div>
  <navbar/>

  <div class="container">
     
    <div class="text-end">
      <transition @before-enter="beforeEnter" @enter="enter" appear>
        <div class="row mb-5">
          <div class="col-sm-6"><img class="car-1 w-100" src="https://www.floraqueen.com/blog/wp-content/uploads/2017/10/Untitled-design-1-8.jpg" alt=""> </div>
          <div class="col-sm-6"> 
             <h1 class="text-center mb-3" v-if="showTitile">Product Name</h1>
           <p>
           <span class="fw-bold h3">معرفی</span><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic
          consectetur optio, reiciendis, blanditiis labore culpa, enim incidunt
          quisquam suscipit quasi. Eos tenetur vel nisi magnam officia!
          Repudiandae vero assumenda distinctio alias ut quidem minima nam,
          porro autem in impedit natus possimus dignissimos incidunt quae fugiat
          dolorum facere, modi
        </p></div>
        </div>
      </transition>
      <div class="container">
        <transition @before-enter="leftEnterB" @enter="leftEnterE" appear>
        <p>
          <span class="fw-bold h3">آبیاری</span><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic
          consectetur optio, reiciendis, blanditiis labore culpa, enim incidunt
          quisquam suscipit quasi. Eos tenetur vel nisi magnam officia!
          Repudiandae vero assumenda distinctio alias ut quidem minima nam,
          porro autem in impedit natus possimus dignissimos incidunt quae fugiat
          dolorum facere, modi
        </p>
         </transition>
          <transition @before-enter="rightEnterB" @enter="leftEnterE" appear>
        <p>
           <span class="fw-bold h3">نور</span><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic
          consectetur optio, reiciendis, blanditiis labore culpa, enim incidunt
          quisquam suscipit quasi. Eos tenetur vel nisi magnam officia!
          Repudiandae vero assumenda distinctio alias ut quidem minima nam,
          porro autem in impedit natus possimus dignissimos incidunt quae fugiat
          dolorum facere, modi
        </p>
          </transition>
          <transition @before-enter="leftEnterB" @enter="leftEnterE" appear>
        <p>
          <span class="fw-bold h3">دما</span><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic
          consectetur optio, reiciendis, blanditiis labore culpa, enim incidunt
          quisquam suscipit quasi. Eos tenetur vel nisi magnam officia!
          Repudiandae vero assumenda distinctio alias ut quidem minima nam,
          porro autem in impedit natus possimus dignissimos incidunt quae fugiat
          dolorum facere, modi
        </p>
         </transition>
          <transition @before-enter="rightEnterB" @enter="leftEnterE" appear>
        <p>
           <span class="fw-bold h3">خاک</span><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic
          consectetur optio, reiciendis, blanditiis labore culpa, enim incidunt
          quisquam suscipit quasi. Eos tenetur vel nisi magnam officia!
          Repudiandae vero assumenda distinctio alias ut quidem minima nam,
          porro autem in impedit natus possimus dignissimos incidunt quae fugiat
          dolorum facere, modi
        </p>
          </transition>
          <transition @before-enter="leftEnterB" @enter="leftEnterE" appear>
        <p>
          <span class="fw-bold h3">کوددهی</span><br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic
          consectetur optio, reiciendis, blanditiis labore culpa, enim incidunt
          quisquam suscipit quasi. Eos tenetur vel nisi magnam officia!
          Repudiandae vero assumenda distinctio alias ut quidem minima nam,
          porro autem in impedit natus possimus dignissimos incidunt quae fugiat
          dolorum facere, modi
        </p>
         </transition>
        
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import gsap from "gsap";
import { ref } from "@vue/reactivity";
import navbar from '../components/General/navbarComponent.vue'
export default {
  components:{navbar},
  setup() {
    const leftEnterB = (el) => {
       el.style.transform = "translateX(-60px)";
       el.style.opacity = 0;
    }
    const leftEnterE  = (el ,done) => {
      gsap.to(el,{
        x:0,
        opacity:1,
        duration:1,
        onComplete :done
      })
    }
    const rightEnterB = (el) => {
       el.style.transform = "translateX(60px)";
       el.style.opacity = 0;
    }
    const showTitile = ref(true);
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };
    /* const afterEnter = (el) => {
    el.style.color = 'gray'
      setTimeout(() => (showTitile.value = false)), 2000;

    };
 
    const beforeleave = () => {};
    const leave = () => {};
    const afterleave = () => {};*/
    return {
      beforeEnter,
      enter,
      showTitile,
      leftEnterB,
      leftEnterE,
      rightEnterB,
    };
  },
};
</script>


<style>
/*.
.fade-leave-to {
  opacity: 0;
}
fade-enter-to , .fade-leave-from{opacity: 1; transform: translate(0);}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}*/
</style>
