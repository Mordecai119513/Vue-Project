<template>
  <NavBar></NavBar>
  <BannerCard />
  <AboutCard />
  <PainPointsCard />
  <HotSaleCard />
  <!-- <MoreProductsCard /> -->
  <SubscriptCard />
  <FooterCard />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BannerCard from '@/components/fronted/BannerCard.vue'
import AboutCard from '@/components/fronted/AboutCard.vue'
import PainPointsCard from '@/components/fronted/PainPointsCard.vue'
import HotSaleCard from '@/components/fronted/HotSaleCard.vue'
// import MoreProductsCard from '@/components/fronted/MoreProductsCard.vue'
import SubscriptCard from '@/components/fronted/SubscriptCard.vue'
import FooterCard from '@/components/fronted/FooterCard.vue'

export default {
  data () {
    return {}
  },
  components: {
    NavBar,
    BannerCard,
    AboutCard,
    PainPointsCard,
    HotSaleCard,
    // MoreProductsCard,
    SubscriptCard,
    FooterCard
  }
}
</script>
