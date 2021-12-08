



<template>
  <div class="blog">

    <PageSlide title="Plus d'information" :open="openPage" @onClose="openPage = false" >
      <div class="page-header">
          <router-link :to="'/home/'+category.slug" v-for="(category) in categories"  :key="category.slug" >
            <div class="ui-button height3 width8 menu" > 
              <p class="vcenter">{{category.name}}</p> 
              <div class="ui-icon vcenter align-right">
                <img src="/icons/dot.svg" alt="">
              </div>
            </div>
          </router-link>

        <router-link to="/blog" >
          <div class="ui-button height3 width8 menu" > 
            <p class="vcenter">Blog</p> 
            <div class="ui-icon vcenter align-right">
              <img src="/icons/dot.svg" alt="">
            </div>
          </div>
        </router-link>

        <router-link to="/home/favorites" >
          <div class="ui-button height3 width8 menu"> 
            <p class="vcenter">Favoris</p> 
            <div class="ui-icon vcenter align-right">
              <img src="/icons/dot.svg" alt="">
            </div>
          </div>
        </router-link>

      </div>
    </PageSlide>

    <div class="main">
      <h1>TODO.. A..FAIRE</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>

  .blog{
    background: var(--md-theme-default-primary);
    color: var(--md-theme-default-primary-text);

    position: absolute;
    width: 100vw;
    height: 100%;
    background-size: cover;

    .version {
      opacity: .5;
      margin: 5px;
      padding: 2px;
      font-size: 13px;
      color: white;      
    }

    .main{
      padding: 30px;
      margin: 0;
      height: calc( 100% - 60px );
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: stretch;
    }
  }


</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { $bmu, $config } from '../services';

import Drawer from '../components/Drawer.vue';
import PageSlide from '../components/PageSlide.vue';
import VerticalDrawer from '../components/VerticalDrawer.vue';

@Component({
  components: { Drawer, PageSlide , VerticalDrawer},
})
export default class Blog extends Vue {

  openPage = false;
  drawer:any|Drawer;
  showVideoDrawer = false;

  categories:any[] = [];
  blog:any[] = [];

  async mounted(){
    this.drawer = this.$refs.drawer as Drawer;

    this.categories = $config.config.category;

    this.blog = await $bmu.getBlog();
  }

  get config(){
    return $config.config;
  }

  i18n(key: string) {
    return $config.i18n(key);
  }


}
</script>
