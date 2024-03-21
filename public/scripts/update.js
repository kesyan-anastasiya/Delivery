// const updateForm = document.getElementById('order_container');

// if (updateForm) {
//   updateForm.addEventListener('click', async (e) => {
//     const { id } = e.target.closest('.card').dataset.id;
//     const res = await fetch(`/orders/${id}`, {
//       method: 'GET',
//     });
//     const data = await res.json();
//     if (data.message === 'success') {
//       window.location.assign('/heroes');
//     } else {
//       alert(data.message);
//     }
//   });
// }