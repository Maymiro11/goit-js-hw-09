import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),a=e.elements.email,t=e.elements.message,l="feedback-form-state";try{a.value=JSON.parse(localStorage.getItem(l)).email??"",t.value=JSON.parse(localStorage.getItem(l)).message??""}catch{}e.addEventListener("input",()=>localStorage.setItem(l,JSON.stringify({email:a.value,message:t.value})));e.addEventListener("submit",o=>{o.preventDefault(),a.value!==""&&t.value!==""&&(console.log({email:a.value,message:t.value}),localStorage.removeItem(l),e.reset())});
//# sourceMappingURL=commonHelpers2.js.map
