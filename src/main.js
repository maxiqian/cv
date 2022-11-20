let html = document.querySelector('#html');
let style = document.querySelector('#style');
// 这里中文打注释因为中文会影响到css
let string = `/* 你好，我叫小马
接下来我要演示一下我的前端功底
首先我要准备一个div */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成八卦图
 * 注意看好了
 * 首先把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
* 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 51%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    height:100px;
    width:100px;
    // border:1px solid red;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    height:100px;
    width:100px;
    // border:1px solid red;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = '';
// string=string.replace('\n','<br>');只能把第一个回车换成换行
// 因此要使用正则表达式
// string=string.replace(/\n/g,"<br>");
// 上面的代码使在页面显示的时候会有一个<出现再消失
let n=0;
// substring(开始索引，结束索引)
// demo.innerHTML = string.substring(0,n);
// 这里为什么不用setInterval()，因为这样可以更自由的控制什么时候停止
let step = ()=>{
    setTimeout(()=>{
        // 如果这个字符为回车，那么string2添加一个<br>；如果不是回车，照搬string
        // string[n] === '\n' ?  string2 += '<br>' : string2 += string[n];
        if(string[n] === '\n'){
            string2+='<br>';
        }else if(string[n] === " "){
            string2+='&nbsp';
        }else{
            string2 += string[n]
        }
        // demo.innerHTML = string.substring(0,n);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n<string.length-1){
            n+=1;
            step();
        }
    },50);
}
step();

// setTimeout(() => {
//     style.innerHTML = `
// body{
//     color:red;
// }`
// },3000)
