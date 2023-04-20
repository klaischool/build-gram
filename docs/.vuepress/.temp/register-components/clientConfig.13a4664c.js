import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("iframeComp", defineAsyncComponent(() => import("/Users/Sergii_Chakir/Downloads/vuepress-kgxpzr/components/iframeComp.vue")))
  },
}
