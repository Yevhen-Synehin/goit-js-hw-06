const refs = {
    input: document.querySelector('#font-size-control'),
    output: document.querySelector('#text')
}

refs.input.addEventListener('input', (event) => {
    const fontSize = event.currentTarget.value;
    console.log(fontSize);
    refs.output.style.fontSize = `${fontSize}pt`;
})