const container = document.querySelector('.order_container')

container.addEventListener('click',async (e)=>{
if(e.target.classList.contains('delete')){
    const {id}= e.target.dataset
   const res = await fetch(`/api/main/${id}`, {
       method: 'DELETE',
   })
   const data = await res.json()
   if(data.message === 'ok'){
    e.target.closest('.card').remove()
   }
}
})