const html = document.querySelector('html')
const switchBtn = document.getElementById('switchbtn')


function change(){
    document.querySelector('#info-section-a').classList.toggle('personal-info-dark')
    document.querySelector('#info-section-b').classList.toggle('about-dark')

    document.querySelector('#switchBackground').classList.toggle('switchDarkBackground')
    html.classList.toggle('dark-mode');
}