<template>
  <!-- <div class="home"> -->
    <div class="page-wrap">
      <div class="page-main">

      <!-- TOOLBAR -->
      <div class="menubar-wrapper ">
        <div class="menubar-leftbutton"><div class="label">-</div></div>
        <div class="menubar-centerarea">
          <!-- <img class="contain" src="/images/logo-150ans-blanc-sm.png" height=100% width="100%"> -->
          </div>

        <div class="menubar-rightbutton" @click="openPage = true"><div class="label" >=</div></div>
      </div>



  <!-- Content ******** template dimitri -->

  <div class="content-wrapper">
    <div class="header shade">
      <input type="text" :placeholder="'Recherche dans : '+title" @keyup.enter="onEnter" />
    </div>

      <!-- Content goes here. -->

        <div class="render-area shade">
          <div class="grid-container grid-container--fit">
            <div class="grid-element content" v-for="(book) in books"  :key="book.localNumber">
              <div class="image-content">
                <img class="" :src="book.image" />
              </div>
              <div class="fav">
                <i class="fas fa-heart pink" />
              </div>
              <div class="text">                
                <div class="hide">{{book.title}}</div>
                <div class="sku hide">{{book.localNumber}}</div>
                <div class="author">{{book.creator}}</div>
              </div>
            </div>
          </div>
        </div>
</div>

  <!-- Content ******** template dimitri -->

    
    <!-- <nav class="toolbar">
      <div class="toolbar-row">
        <div class="toolbar-section-start"> -->
          <!-- CODE VUEJS -->
          <!-- <div class="fas fa-bars " @click="openPage = true"></div>
        </div>

        <div class="toolbar-image ">
          <img src="/images/logo-150ans-blanc-sm.png" />
        </div>        

        <div class="toolbar-section-end">
        </div>
      </div>

    </nav> -->

    <PageSlide title="Plus d'information" :open="openPage" @onClose="openPage = false" >
      <div class="page-header">
          <router-link :to="'/home/'+category.slug" v-for="(category) in categories"  :key="category.slug" >
            <div class="ui-button height3 width8 menu" :class="{'active':(currentSlug == category.slug)}"> 
              <p class="vcenter">{{category.name}}</p> 
              <div class="ui-icon vcenter align-right">
                <img src="/icons/dot.svg" alt="">
              </div>
            </div>
          </router-link>

        <a href="https://www.twitter.com">
          <div class="ui-button height3 width8 menu"> 
            <p class="vcenter">Favoris</p> 
            <div class="ui-icon vcenter align-right">
              <img src="/icons/dot.svg" alt="">
            </div>
          </div>
        </a>

      </div>
    </PageSlide>


    <div class="main hide">
      <div class="section-top">
      </div>
      <div class="section-actions hide-portrait info">
        <div class="credits">Pour créez votre illumination, vous devez tourner votre téléphone</div>
      </div>
      
    </div>
    <!-- <privilege-status-indicator /> -->    
  </div>

</div>
</template>



<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Drawer from '../components/Drawer.vue';
import PageSlide from '../components/PageSlide.vue';
import VerticalDrawer from '../components/VerticalDrawer.vue';


import { $bmu, $config } from '../services';

@Component({
  components: { Drawer, PageSlide , VerticalDrawer},
})
export default class Home extends Vue {

  openPage = false;

  drawer:any|Drawer;

  showVideoDrawer = false;

  //
  // html pages -
  content:any = {}
  books: any[]|undefined = [];
  title = "bande dessinée";

  categories:any[] = [];
  currentSlug = 'bd';


  async mounted() {
    this.drawer = this.$refs.drawer as Drawer;
    console.log('-----DEBUG',$config.config)
    this.content = $config.config.content || '';

    this.categories = $config.config.category;

    try{
      const uid = $config.getDeviceID();
      this.books = await $bmu.queryNews('bande dessinée');


    }catch(err) {
      console.log("reports error:", err);
    }

  }


  onClose() {
  }

  async onCategory(slug) {
    try{
      this.openPage = false;
      this.books = await $bmu.queryNews(slug);
      this.title = this.categories.find(cat => cat.slug === slug).name;

    }catch(err) {
      console.log("reports error:", err);
    }

  }

  async onEnter($event) {
    // $event.key, $event.keyCode,$event.target.value);
    const query = $event.target.value;
    console.log('-----',query,query.length)
    if([null,''].indexOf(query) > -1 || query.length < 4) {
      return;
    }
    this.books = await $bmu.search(this.currentSlug,query);
  }

  @Watch('$route', { immediate: true, deep: true })
  async onUrlChange(value: any) {
    this.currentSlug = (value.params.slug)?value.params.slug:'bd';
    await this.onCategory(this.currentSlug);
  }  

}
</script>
<style scoped lang="scss">

  .header {
    overflow: hidden;
    height: var(--nav-header-height);
    min-height: var(--nav-header-height);
    position: relative;
    width: 100%;
    flex: 100%;
    display: flex;
    margin: 0;
    h1{
      
    }
    input{
      width: 80%;
      height: 50px;
      border: 1px solid #aaa;
      border-radius: 28px;
      padding: 2px 17px;
      font-size: 20px;
      line-height: 24px;
      margin: auto;
      outline: 0;
      background-color: rgb(255 255 255 / 62%);
    }
  }

  .title {
  background-color: rgb(0 0 0 / 61%);    
  }

  .content{
    .image-content{
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      height: 100%;
      width: 100%;
      background: gray;      
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
    .fav {
      position: absolute;
      top: 5px;
      right: 5px;
      color: gray;
    }

    .text{
      position: absolute;
      bottom: -25px;
      left: 5px;
      z-index: 1;    
      width: 100%;      
      padding: 0px;
      display: flex;
      flex-direction: column;
      align-content: space-around;
      font-size: 80%;
      text-align: left;
      .sku {
        font-size: 80%;
        color:#aaa;
      }
      .author{
        margin-bottom: 0;
        margin-top: auto;
        font-weight: 600;
        font-size: 80%;
      }
    }
  }

  a .active {
    color: black;
    background: rgb(238 238 238 / 23%);

  }

  .video-thumbnail{
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .img-small {
    width: 64px;
    height: 64px;
  }

  .content-wrapper{
    overflow-y: auto;
    @media (orientation: landscape) {
      flex-wrap: wrap;      
    }
  }

  .vertical-drawer{
    width: 100%;
    height: 100%;
    overflow: auto;
  }


</style>
