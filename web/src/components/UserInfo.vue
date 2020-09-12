<template>
 <div class='info' flex='cross:center'>
     <span v-if='data.create_by' flex='cross:center'>
         <Avatar :src="data.create_by.avatar" shape='circle' size='medium'></Avatar>
         <span class="name">{{ data.create_by.name }}</span>
     </span>
     <span class="time" v-if='data.create_at'>
         {{ formatDate(data.create_at) }}
     </span>
 </div>
</template>

<script>
import { Avatar } from 'element-ui'
export default {
 components: {
     Avatar
 },
 props: {
     data: {
         type: Object
     }
 }
}
</script>
<style scoped>
</style>