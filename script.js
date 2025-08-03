// 検索機能
function filterContent(){
  let input=document.getElementById("searchBar").value.toLowerCase();
  document.querySelectorAll("section").forEach(sec=>{
    sec.style.display=sec.innerText.toLowerCase().includes(input)?"":"none";
  });
}
// ダークモード
function toggleDark(){
  document.body.classList.toggle("light");
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
}
if(localStorage.getItem("theme")==="light"){document.body.classList.add("light");}
// 音声通知
function playSound(){new Audio("notify.mp3").play();}
// サーバーステータス（ダミー）
document.addEventListener("DOMContentLoaded",()=>{let s=document.getElementById("serverStatus");if(s)s.innerText="オンライン: 5/32 (例)";});
// 多言語データ
const langData={jp:{nav_home:"🏠 ホーム",welcome_title:"ようこそ！",welcome_text:"[サーバー名]はFiveM QBcoreを使用した日本向けRPサーバーです。"},en:{nav_home:"🏠 Home",welcome_title:"Welcome!",welcome_text:"[Server Name] is a FiveM QBcore-based RP server for immersive gameplay."}};
// 言語切替
function setLang(lang){localStorage.setItem("lang",lang);
document.querySelectorAll("[data-key]").forEach(el=>{if(langData[lang][el.dataset.key])el.innerText=langData[lang][el.dataset.key];});}
// 初期設定
window.onload=()=>setLang(localStorage.getItem("lang")||"jp");
