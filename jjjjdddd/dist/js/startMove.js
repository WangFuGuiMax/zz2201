//必须封装函数
//{width:300,height:500}
function startMove(domobj, json, fn) {
   clearInterval(domobj.timer);
  domobj.timer = setInterval(() => {
    let flag = true; //假设所有的属性都达到了目标值
    for (let attr in json) {
      let iCur;
      if (attr == "opacity") {
        iCur = getStyle(domobj, "opacity") * 100
      } else {
        iCur = parseInt(getStyle(domobj, attr));
      }

      let iTar = json[attr];
      let iSpeed = (iTar - iCur) / 10;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if (attr == "opacity") {
        domobj.style.opacity = (iCur + iSpeed) / 100;
      } else {
        domobj.style[attr] = iCur + iSpeed + "px";
      }

      if (iCur != iTar) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(domobj.timer);
      if (fn) {
        fn();
      }
    }
  }, 20);
}

function getStyle(domobj, attr) {
  if (window.getComputedStyle) {
    return getComputedStyle(domobj, null)[attr];
  }
  return domobj.currentStyle[attr];
}