const container = document.querySelector('.order_container')
if (container) {
container.addEventListener('click',async (e)=>{
if(e.target.classList.contains('delete')){
    const agree = confirm("Удалить?")
    if(agree === true){
    const {id}= e.target.dataset
   const res = await fetch(`/api/main/${id}`, {
       method: 'DELETE',
   })
   const data = await res.json()
   if(data.message === 'ok'){
    e.target.closest('.card').remove()
   }
   if()
}
}
})
}