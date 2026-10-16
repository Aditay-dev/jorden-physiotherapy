const $=s=>document.querySelector(s);
const menu=$('#menuToggle'), nav=$('#navLinks');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const dateInput=$('#date');if(dateInput){const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());dateInput.min=d.toISOString().slice(0,10)}
document.querySelectorAll('[data-treatment]').forEach(a=>a.addEventListener('click',()=>{const t=$('#treatment');if(t)t.value=a.dataset.treatment}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.setProperty('--reveal-delay',`${(i%4)*85}ms`);observer.observe(el)});
document.querySelectorAll('[data-doctor]').forEach(a=>a.addEventListener('click',()=>{const d=document.querySelector('#doctor');if(d)d.value=a.dataset.doctor}));
$('#year').textContent=new Date().getFullYear();
$('#bookingForm')?.addEventListener('submit',e=>{
 e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
 const fd=new FormData(form);const request={id:'JP-'+Date.now().toString().slice(-7),name:fd.get('patientName').trim(),doctor:fd.get('doctor'),phone:fd.get('phone').trim(),email:fd.get('email').trim(),treatment:fd.get('treatment'),date:fd.get('date'),time:fd.get('time'),notes:fd.get('notes').trim(),advance:fd.get('advance')==='on',age:Number(fd.get('age')),advanceAmount:fd.get('advance')==='on'?999:0,paymentStatus:'Not paid',status:'Pending',createdAt:new Date().toISOString()};
 try{const all=JSON.parse(localStorage.getItem('jordenRequests')||'[]');all.unshift(request);localStorage.setItem('jordenRequests',JSON.stringify(all));}
 catch(err){$('#formMessage').textContent='Your browser could not save this request. Please check storage settings and try again.';return}
 if(request.advance){
  $('#formMessage').innerHTML='Request saved in this browser. Advance payment is currently a demo only — no money has been charged. <a href="admin.html">View local dashboard ↗</a>';
 }else{$('#formMessage').innerHTML='Your request has been saved in this browser demo. It is not yet sent to the clinic and is not a confirmed booking. <a href="admin.html">View local dashboard ↗</a>'}
 form.reset();dateInput.min=new Date().toISOString().slice(0,10);
});

// Subtle scroll progress and staggered reveal choreography
if(!document.querySelector('.scroll-progress')){const bar=document.createElement('div');bar.className='scroll-progress';bar.setAttribute('aria-hidden','true');document.body.prepend(bar);
const updateProgress=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;bar.style.transform=`scaleX(${max>0?window.scrollY/max:0})`};window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();}
