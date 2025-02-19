(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="d52139fb3686303fbfed39f69f0a77cb",u="https://api.openweathermap.org/data/2.5/weather?units=imperial&q=",a=document.querySelector(".search input"),d=document.querySelector(".search button");document.querySelector(".weather-icon");async function s(i){const o=await fetch(u+i+`&appid=${l}`);if(o.status==404)document.querySelector(".error").style.display="block",document.querySelector(".weather").style.display="none";else{var r=await o.json();document.querySelector(".city").innerHTML=r.name,document.querySelector(".temp").innerHTML=Math.round(r.main.temp)+"°F",document.querySelector(".humidity").innerHTML=r.main.humidity+"%",document.querySelector(".wind").innerHTML=r.wind.speed+" mph";const n=document.querySelector(".weather-icon");console.log("Weather Icon Element:",n),r.weather[0].main==="Clouds"?n.src="./public/images/clouds.png":r.weather[0].main==="Rain"?n.src="./public/images/rain.png":r.weather[0].main==="Drizzle"?n.src="./public/images/drizzle.png":r.weather[0].main==="Mist"?n.src="./public/images/mist.png":r.weather[0].main==="Clear"&&(n.src="./public/images/clear.png"),console.log("Weather Icon Path Set:",n.src),document.querySelector(".weather").style.display="block",document.querySelector(".error").style.display="none"}}s("Grand Rapids");d.addEventListener("click",()=>{s(a.value)});
