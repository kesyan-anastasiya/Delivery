const form = document.querySelector('.select-district')
if (form) {
    form.addEventListener('change', async (e) => {
        const districtId = e.target.value
        const res = await fetch('/api/main', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ districtId }),
        })
        const data = await res.json()
        if (data.message === '+') {
            document.querySelector('.order_container').innerHTML = data.html
        }
    })
}
