let test = document.getElementById("content-title");
  
// このハンドラーは異なるリスト項目の上を移動するごとに
// 実行されます
test.addEventListener("mouseover", function( event ) {   
  // mouseover の対象を強調
  event.target.style.color = "orange";

  // 少し待ってから色をリセット
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);