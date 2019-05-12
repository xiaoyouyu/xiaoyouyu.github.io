//1、处理重新加载当访问首页时，直接跳转到之前的页面
//2、为解决iphone添加到主屏幕后，切换又重新访问首页bug
/**
实现
1、修改url地址，无法进入页面
2、切回去确实回退到之前页面，这时候再切出去，再进来就不能为当前页面了。
    2的方案，设置一个历史数组，每次进入都清空数组，访问一个push一个。当进来时，先判断，数组为空，就还是调回之前页面。如果不为空，说明刚刚访问过内容了。会默认跳回的。
    就算大于十分钟，我也给它调回之前内容吧
    1的方案，仅访问首页走这个逻辑，所以，永远记录用户上次访问的位置吗？是的
 * 
 */
export class GoHistory {
    currentPath ;//当前路径
    dataStore ;//所有访问记录，每次实例化重置
    detached_head; //当前指针，格式为：时间戳[d_h]当前访问路径[d_h]是否跳转开关
    detached_stamp; //当前指针，时间戳 
    detached_path;  //当前指针，路径
    flag = "1";//是否跳转开关，1启动，0关闭
    time ;//时间间隔，如果设置，表示只有这个时间点以内再次访问需要跳转到之前路径，否则，每次访问首页都要跳转。例如：10，单位分钟
    routerHasPath;//函数，当location.href无法触发路由对锚点路径的跳转，需要自己提供这样的方法
    pathName = "/";//访问哪个路径启动该逻辑，默认是仅访问首页启动

    //单例模式
    static getInstance(...args) {
        if (!GoHistory.instance) {
            GoHistory.instance = new GoHistory(...args);
        }
        return GoHistory.instance;
    }
    
    /**
     * time 时间间隔
     * currentPath 当前路径
     * 控制器
     *  */
    constructor(...args) {
        [this.time, this.pathName="/", this.routerHasPath ] = args;
        if(!this.getItem()){
            return;
        }
        this.currentPath = location.href;
        this.dataStore = this.getDataStore();
        
        //就算是没有任何操作，我也继续跳转到上次访问页面
        if(this.dataStore){
            this.startOpen();
            this.clearDataStore();
        }else{
            this.setDataStore(this.currentPath);
        }

        //如果当前是关闭状态
        if(this.flag=='0'){
            this.closeOpen();
            return;
        }
        this.startOpen();
    }

    /**
     * 记录当前访问路径
     */
    static record(path) {
        let $this = this.getInstance();
        $this.detached_path = location.origin + path;
        $this.flag = "1";
        $this.setItem();
        $this.setDataStore($this.detached_path);
    }

    //flag=1，启动时的跳转逻辑
    startOpen(){
        if(location.pathname===this.pathName){
            if(this.time){ //如果设置了时间间隔
                if(this.getTimeDiff()<=Number(this.time)){
                    this.goBack();
                }
            }else{
                this.goBack();
            }
        }else{
            this.flag = "1";
            this.detached_path = this.currentPath;
            this.setItem();
        }
    }

    //flag=0，关闭时的跳转逻辑
    closeOpen(){
        if(this.hasHashPath(this.currentPath)){//处理锚点路径，在当前页面再次访问
            addEventListener('load', () => {
                //并不是真正的跳转，是触发了路由对锚点路径的处理，如果路由不支持，此方法不无效。需要提供路由对锚点路径的处理
                if(this.routerHasPath){
                    this.flag = "0";//关闭
                    this.routerHasPath();
                    return;
                }
                this.goBack(this.currentPath);
            })
        }
    }

    //跳转路径
    goBack(path){
        if(!path){
            this.flag = "0";//关闭
            this.setItem();
        }
        location.href = decodeURI(path || this.detached_path);
    }

    //计算指针时间与当前时间插值，返回分钟
    getTimeDiff(){
        return Math.floor(((+new Date)-Number(this.detached_stamp))/60000);
    }

    //看看是否是锚点路径
    hasHashPath(path){
        return path.indexOf("/#")>-1;
    }

    //返回是否有指针，有的情况下获取指针，并分解赋值
    getItem(){
        let detached_head = localStorage.getItem("detached_head");
        if(!detached_head){
            return false;
        }
        [
            this.detached_stamp,//时间戳
            this.detached_path,//当前指针路径
            this.flag//是否跳转
        ] = detached_head.split("[d_h]");
        return true;
    }

    //存储指针
    setItem(){
        //(location.origin+path)
        localStorage.setItem("detached_head",(+new Date)+"[d_h]"+this.detached_path+"[d_h]"+this.flag);
    }

    //获取所有跳转记录
    getDataStore(){
        return JSON.parse(localStorage.getItem("gh_[d_h]_datastore"));
    }

    //记录所有跳转记录
    setDataStore(path){
        this.dataStore = this.dataStore || [];//以后还可以扩展成访问记录展示
        this.dataStore.push(path);
        localStorage.setItem("gh_[d_h]_datastore", JSON.stringify(this.dataStore));
    }

    //清空 dataStore
    clearDataStore(){
        localStorage.removeItem("gh_[d_h]_datastore");
    }
}