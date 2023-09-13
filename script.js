document.addEventListener("DOMContentLoaded", function () {
    const chocolateList = document.querySelector(".chocolate-list");
    const selectedList = document.getElementById("selected-list");
    const totalPriceElement = document.getElementById("total-price");
    const maxItems = 8;

    let selectedChocolates = [];
    var totalPrice = 0;

    chocolateList.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-button")) {
            const chocolateName = event.target.previousElementSibling.textContent;
            const chocolatePrice = parseFloat(event.target.parentElement.getAttribute("data-price"));

            if (!isNaN(chocolatePrice) && selectedChocolates.length < maxItems) {
                selectedChocolates.push({ name: chocolateName, price: chocolatePrice });
                totalPrice = totalPrice + chocolatePrice;
                selectedList.innerHTML = "";
                selectedChocolates.forEach((chocolate) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${chocolate.name} - ${chocolate.price.toFixed(2)}`;
                    selectedList.appendChild(listItem);
                });
                totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;
                document.querySelector(".selected-chocolates h2").textContent = `Selected Chocolates (${selectedChocolates.length}/${maxItems})`;
            } else {
                alert("Not Allow More than 8");
            }
        }
    });
});
