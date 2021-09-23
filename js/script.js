// $(function(){
//   var i=0;
//   function slide(){
//   i++;
//   if (i > $('.slide li:last').index()){
//   i=0;
//   }
//   $('.slide li').eq(i).stop().fadeIn('slow');
//   $('.slide li').eq(i-1).stop().fadeOut();
//   }
//   setInterval(slide,3000);

//   $(".store")
// });

$(function(){
  const write = document.getElementById("write");
  let wList = ["환경 문제 조사", "경각심을 일으키는 보고서 발표", "직접적인 행동인 캠페인"];
  let i=0;
  while(i<wList.length){
  write.innerHTML += "<div>"+wList[i]+"</div><br>"
  i++
  }
});