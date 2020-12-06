<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <div @click="clickMe" class="fz20 u-red border-bottom">{{ count }}</div>
      <van-button type="primary">主要按钮</van-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import api from "../api";
export default {
  name: "Tab1",
  setup() {
    let store = useStore();
    let clickMe = () => {
      // store.commit('increment')
      api.post("/loginForPolicePlatform1", {
          username:"admin",
          password:'admin123'
        })
        .then((res) => {
          // console.log(res);
        });
    };

    return {
      clickMe,
      count: computed(() => store.state.count),
      store,
    };
  },
};
</script>
<style lang="less">
@import "../theme/common.less";
</style>