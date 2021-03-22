function getComponent() {

    const element = document.createElement('div');
    element.innerHTML = ['Hello', 'webpack'].join('');

    return element;

}

getComponent().then((component) => {
    console.log(component)
    document.body.appendChild(component);
});
