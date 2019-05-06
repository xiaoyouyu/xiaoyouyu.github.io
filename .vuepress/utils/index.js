const utils = {
    /**
     *
     * @param {*} config 导航栏配置，获取所有link链接值，除了/
     */
    getLinks: function (config, excludes, genSidebar, func) {
        let sideconf = {};
        let getSelf = (cons) => {
            cons.forEach((v) => {
                let {
                    items,
                    text,
                    link
                } = v;
                if (items) { //递归
                    getSelf(items)
                    return;
                }
                if (link === "/") {
                    return;
                }
                // console.log({text, link});
                func(sideconf, excludes, genSidebar, text, link);
            })
            cons = null;
        }
        getSelf(config);
        config = null;
        console.log(sideconf) //最后了，返回整个配置对象
        return sideconf;
    },

    /**
     *
     * 尾递归优化函数
     * @param {*} f 递归函数
     * @returns
     */
    tco: function (f) {
        var value;
        var active = false;
        var accumulated = [];

        return function accumulator(...arg) {
            accumulated.push(arg);
            if (!active) {
                active = true;
                while (accumulated.length) {
                    value = f.apply(this, accumulated.shift());
                }
                active = false;
                return value;
            }
        };
    }
};

module.exports = utils;