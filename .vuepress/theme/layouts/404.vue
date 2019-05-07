<template>
    <div class="theme-container">
        <div class="content">
            <h1>404</h1>
            <blockquote>{{getMsg()}}</blockquote>
            <router-link to="/">返回首页</router-link>
        </div>
        <iframe
            scrolling="no"
            frameborder="0"
            name="search_children"
            id="search_children"
            style="display: block;width:100%;min-height: 570px;overflow: scroll; box-shadow: 0 1px 10px;margin-bottom: 6rem;"
        ></iframe>
    </div>
</template>

<script>
const msgs = [
    `真没了`,
    `这个页面你来写好了`,
    `敌军还有五秒到达战场请做好准备全军出击稳住我们能赢`,
    `没了`
];

export default {
    methods: {
        getMsg(){
            this.$nextTick(() => {
                //iframe window
                if(typeof window!=="undefined"){
                    var babygohome = window.frames["search_children"];
                    babygohome.domain='//qzonestyle.gtimg.cn/qzone_v6/lostchild/';
                    babygohome.document.write('<script type="text/javascript" src="'+babygohome.domain+'data.js"><\/script>');
                    babygohome.document.write('<script type="text/javascript" src="'+babygohome.domain+'page.js"><\/script>');
                    babygohome.document.write(`<script type="text/javascript" >
                        document.getElementsByClassName("side_infos")[0].style.display="none";
                    <\/script>`);
                }
            });
            return msgs[Math.floor(Math.random() * msgs.length)];
        }
    }
};
</script>