<template>
  <!-- <div class="home"> -->
      <div class="page-wrap">
        <div class="page-main">

    <!-- TOOLBAR -->
        <div class="menubar-wrapper">
          <div class="menubar-leftbutton"><div class="label">-</div></div>
          <div class="menubar-centerarea">
            <img class="contain" src="/images/logo-150ans-blanc-sm.png" height=100% width="100%">
            </div>

          <div class="menubar-rightbutton" @click="openPage = true"><div class="label" >=</div></div>
        </div>


  <!-- Content ******** template dimitri -->

<div class="content-wrapper">

      <!-- Content goes here. -->
      <div class="title">Nouveautés BD</div>

        <div class="render-area shade">
          <ul>
            <li v-for="(book) in books"  :key="book.localNumber">
              {{book.title}} - 
              {{book.localNumber}}
              <img class="img-small" :src="book.image" />
            </li>
          </ul>

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
      <div class="-page-header" v-html="content"></div>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
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
  // html pages
  content:any = {}
  books: any[]|undefined = [];

  async mounted() {
    this.drawer = this.$refs.drawer as Drawer;
    console.log('-----DEBUG',$config.config)
    this.content = $config.config.content || '';


    try{
      const uid = $config.getDeviceID();
      this.books = await $bmu.queryNews('bd');


    }catch(err) {
      console.log("reports error:", err);
    }

  }

  onClose() {
  }


}
</script>
<style scoped lang="scss">

  .video-thumbnail{
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .img-small {
    width: 64px;
    height: 64px;
  }

  .render-area{
    overflow-y: auto;
  }

  .vertical-drawer{
    width: 100%;
    height: 100%;
    overflow: auto;
  }


</style>
