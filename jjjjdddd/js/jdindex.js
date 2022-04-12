//调用商品列表接口 渲染页面  5条
let str = "";
$.ajax({
  type: "get",
  url: "http://jx.xuzhixiang.top/ap/api/productlist.php?uid=107244",

  dataType: "json",
  success: function (response) {
    let arr = response.data
    arr.reverse();//改变原来的数组

    if (response) {
      let uid = localStorage.getItem("userId")
      if (uid == null) {

        $.each(response.data, function (index, item) {
          str = `
          <li>
          <a href = "../html/login.html?id=${item.pid}">
          <img src="${item.pimg}" alt="">
          <a href="" class="mingcheng">${item.pname}</a>
          <span>${item.pdesc}</span>
          <p>￥${item.pprice}</p>
          <i><em></em></i>
          <b></b>
          </a>
          </li>
          `

          if (index > 4) {
            return false;
          }
          $(".box41").prepend(str);
        })
      } else {
        $.each(response.data, function (index, item) {

          str = `
          <li>
          <a href = "../html/xiangqing.html?id=${item.pid}">
          <img src="${item.pimg}" alt="">
          <a href="../html/xiangqing.html?id=${item.pid}" class="mingcheng">${item.pname}</a>
          </a>
          <span>${item.pdesc}</span>
          <p>￥${item.pprice}</p>
          <i><em></em></i>
          <b></b>
          </li>
          `
          if (index > 4) {
            return false;
          }
          $(".box41").prepend(str);
        })
      }

    }
  }
});



//调用商品列表接口 渲染页面  12条
let ostr = "";
$.ajax({
  type: "get",
  url: "http://jx.xuzhixiang.top/ap/api/productlist.php?uid=107244",

  dataType: "json",
  success: function (response) {
    if (response) {
      let uid = localStorage.getItem("userId")
      if (uid == null) {
        $.each(response.data, function (index, item) {
          ostr = `
           <div class="swiper-slide box51">
            <img src="${item.pimg}" alt="">
            <span>${item.pname}</span>
           <p>￥${item.pprice}</p>
           <div class="box511"><em></em><i>加入购物车</i></div>
         </div>
         `
          if (index == 12) {
            return false;
          }
          $(".guolaibani").prepend(ostr);
        })
      } else {
        $.each(response.data, function (index, item) {
          ostr = `
           <div class="swiper-slide box51">
            <img src="${item.pimg}" alt="">
            <span>${item.pname}</span>
           <p>￥${item.pprice}</p>
           <div class="box511"><em></em><i>加入购物车</i></div>
         </div>
         `
         
          if (index == 12) {
            return false;
          }
          $(".guolaibani").prepend(ostr);
        })
      }

    }
  }
});