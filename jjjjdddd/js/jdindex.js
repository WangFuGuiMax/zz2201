console.log("ok1");
$(function () {
  console.log($(".box4 li"));
  $(".box4 li").click(function () {
    if (localStorage.getItem("userId")) {
      alert("登录过了");
      location.href="../html/xiangqing.html"
    }else{
      alert("请先登录")
      location.href="../html/login.html"
    }
  })
})