$(function(){
  // 리필 스테이션 슬라이드 
  var i=0;
  function slide(){
  i++;
  if (i > $('.slide li:last').index()){
  i=0;
  }
  $('.slide li').eq(i).stop().fadeIn('slow');
  $('.slide li').eq(i-1).stop().fadeOut();
  }
  setInterval(slide,3000);
  $(".store");
  });

  // 후원 관련 내용 입력
  $(function(){
  const write = document.getElementById("vi_left");
  let wList = ["환경 문제 조사-시민 의식 실태 확인", "경각심을 일으키는 보고서 발표-마스크로 인한 환경오염", "캠페인 활동-다회용기 쓰기", "환경 키트 배포-줍깅 키트"];
  let now = new Date();
  let month = now.getMonth();
  let rMonth = month+1;
  write.innerHTML = "<h3>"+rMonth+"월의 후원으로 하는 일</h3>"
  let i=0;
  while(i<wList.length){
  write.innerHTML += "<div>"+wList[i]+"</div><br>"
  i++
  }

  
});