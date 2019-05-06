<template>
    <div class="ValineComment" v-if="comment">
        <hr>
        <span :id="page.path" class="leancloud-visitors" :data-flag-title="page.title">
            <em class="post-meta-item-text">文章阅读量</em>
            <i class="leancloud-visitors-count">...</i>
        </span>
        <div id="vcomments"></div>
    </div>
</template>

<script>
import { appId, appKey } from "../../config/secretKeyConf.js";
export default {
    computed: {
        comment: function() {
            let { comment } = this.$frontmatter;
            if (typeof comment === "undefined") {
                return true;
            }
            return comment;
        },
        page: function() {
            let { path = "/", title = "首页" } = this.$page;
            return { path, title };
        }
    },
    mounted() {
        this.renderValine();
    },
    watch: {
        $route: {
            handler: function(to, from) {
                if (to.path !== from.path) {
                    this.$nextTick(() => {
                        this.renderValine();
                    });
                }
            }
        }
    },
    methods: {
        renderValine() {
            if (typeof window !== "undefined") {
                this.window = window;
                window.AV = require("leancloud-storage");
            }
            const Valine = require("valine");
            new Valine({
                el: "#vcomments",
                appId: appId,
                appKey: appKey,
                notify: false,
                verify: false,
                avatar: "monsterid",
                path: window.location.pathname,
                meta: ["nick", "mail", "link"],
                pageSize: 10,
                visitor: true,
                placeholder: "欢迎留言..."
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
.ValineComment {
    padding: 0 2rem;
}

.leancloud-visitors {
    display: inline-block;
    margin-bottom: 1rem;
    color: #2196f3;
}
</style>
