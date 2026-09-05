
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const cat=btn.dataset.cat; document.querySelectorAll('.card').forEach(card=>card.style.display=(cat==='all'||card.dataset.cat===cat)?'block':'none');
}));
