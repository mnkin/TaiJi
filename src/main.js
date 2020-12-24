let html = document.querySelector("#html"); //通过css选择器找到demo
let style = document.querySelector("#style");
let string = `/* 你好，我是小杨
 * 接下来我要展示一下我的前端功底
 * 首先我要准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
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
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
  width:100px;
  height:100px;
  left:0;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  left:0;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;
//string = string.replace(/\n/g, "<br>"); //正则表达式：把所有的回车变成<br>
let n = 0;
let string2 = "";

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车，就转换
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      //如果不是回车，就照搬
      string2 += string[n];
    }
    // string2 += (string[n] === "\n" ? "<br>" : string[n]);
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //设置纵向滚动条
    html.scrollTo(0, 99999); //设置手机纵向滚动条
    if (n < string.length - 1) {
      //如果n不是最后一个，就继续
      n = n + 1;
      step();
    } else {
    }
  }, 50);
};

step();
