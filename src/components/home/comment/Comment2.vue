<template>
<div class="comment2">
<relayforcomment></relayforcomment>
<relayforcomment></relayforcomment><relayforcomment></relayforcomment><relayforcomment></relayforcomment>
<comment></comment>
</div>

</template>
<script>
import relayforcomment from"./ReplyForComment"
import comment from"./Comment"
export default {
    data(){
        return{

        }
    },
    components:{relayforcomment,
    comment}
}
</script>
<style lang="less" scoped>

</style>