const text = document.getElementById('text');
const textCount = document.querySelector('.text__count');
const maxlength = text.getAttribute('maxlength');

textCount.innerHTML = '0/' + maxlength;

text.addEventListener('input', function (e) {
    const target = e.target;
    const currentLength = target.value.length;
    textCount.innerHTML = currentLength + '/' + maxlength;
})


