const handleContainerClick = (event) => {
    alert("Container clicked!");

}

const handleBoxClick = (event) => {
    event.stopPropagation();
}


const elements = document.getElementsByClassName("source");

console.log(elements);

[...elements].forEach((element) => {
    element.addEventListener("click", handleBoxClick);
})