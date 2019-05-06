/**
 * 该文件用于获取一个目录下的所有文件名
 */
const path = require("path")
const { tco } = require("./index.js")
const { readdirSync , statSync} = require('fs');


/**
 *
 * 递归读取目录
 * @param {*} [filenames={}]
 * @param {*} arg
 * @returns
 */
const getFilenames = tco(function(filenames={}, excludes, genSidebar,...arg) {
    let children = [];
    let [title, link, prev, next] = arg;
    
    readdirSync(fullpath=path.join(path.resolve(".") + link)).forEach(file => {
        if (excludes[0] && excludes.indexOf(file) > -1) {
            return;
        }
        //判断如果是目录，
        var fileinfo = statSync(fullpath + file)
        if(fileinfo.isDirectory()){
            file = [link + file +"/", file];
        }
        //判断如果是文件，就是刚刚目录的子级
        if(fileinfo.isFile()){
            if (file === 'README.md') {
                file = "";
            } else {
                file = file.replace('.md', '');
                file = [file, file];
            }
        }
        children.push(file)
    });
    // console.log(children);
    
    //最上级封装
    let side = genSidebar(title, (children.length==0)?null:children.sort())
    filenames[link] = [side];
    if(prev){
        filenames[link].unshift(prev);
    }
    if(next){
        filenames[link].push(next);
    }
    
    let count = 0;//记住角标
    let sublink = "";
    for (let item  of children) {
        if(item && item[0].indexOf("/")>-1){
            sublink = item[0];
            break;
        }
        count++;
    }
    if(sublink){
        //如果没有，用当前父级代替
        prev = pageTurning(children[count-1], "prev", link, title);
        next = pageTurning(children[count+1], "next", link, title);
        return getFilenames(filenames, excludes, genSidebar, null, sublink, prev, next);
    }
    return filenames;
});

//上一步，下一步封装处理逻辑
const pageTurning = function(child, direction, link, title){
    if(!child){
        // title = "← "+ title;
        direction=="prev" && (child =  [link, title]);
    }else{
        let [path, title] = child;
        // title = direction=="prev"?("← "+title):(title+" →");
        if((path+"").indexOf("/")<=-1){//说明它不是目录
            path = link + path;
        }
        child = {path, title};
    }
    return child;
}

module.exports = getFilenames;