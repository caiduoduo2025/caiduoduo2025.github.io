import DefaultTheme from 'vitepress/theme'
import {nextTick, onMounted, watch} from 'vue'
import {useRoute} from 'vitepress'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()

    const updateHeroLink = () => {
      if (typeof window === 'undefined') return

      // 稍微延迟一下以确保 DOM 已渲染
      setTimeout(() => {
        const links = document.querySelectorAll('.VPButton')
        links.forEach(link => {
          const href = link.getAttribute('href')
          if (href && href.includes('/docs/windows-get-started')) {
             const userAgent = navigator.userAgent.toLowerCase()
             if (userAgent.includes('mac')) {
               link.href = '/docs/mac-get-started'
               link.textContent = '快速入门'
             } else {
               link.href = '/docs/windows-get-started'
               link.textContent = '快速入门'
             }
          }
        })
      }, 50)
    }

    onMounted(() => {
      updateHeroLink()
    })

    watch(
      () => route.path,
      () => nextTick(updateHeroLink)
    )
  }
}

