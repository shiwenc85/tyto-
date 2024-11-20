document.querySelectorAll('.new1-btns button').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.one').src=btn.getAttribute('data-src')

        const new1title=btn.getAttribute('data-bs-title')
        document.querySelector('.new1title').textContent=new1title

        const new1content=btn.getAttribute('data-bs-content')
        document.querySelector('.new1content').innerHTML=new1content
    })
})
document.querySelectorAll('.new')