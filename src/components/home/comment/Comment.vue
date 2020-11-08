<template>

				<div class="input_area ">
					<textarea placeholder="你想说什么.."></textarea>
					<div class="send_comment">
						<input type="button"  name="submit" value="发表评论" v-on:click="submit"/>
						</div>


		</div>
    </template>
<script>
 export default {
    name: "comment",
    data() {
        return {
            islogin:false,
            };


    },
    
 }
</script>
<style lang="less" scoped>
.input_area{
    padding: 3px 0 0 30px;
}
	.input_area textarea{
		width: 90%;
		height: 60px;
		border:1px solid black;
		resize: none;
		outline: none;
	}
	.send_comment{
		padding-left: 90%;
	}
	.send_comment input{
		width: 70px;
	    font-size: 14px;
		background-color: #007AFF;
		text-align: right;
		color: #fff;

		border-radius: 3px;
		cursor: pointer;
		;
	}
    .send_comment :hover{
        background-color: brown;
    }
	.send_comment :active{
		background-color: #007AFF;
	}
</style>