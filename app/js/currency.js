var formCarrancy = document.forms['form-currency'];
var select = formCarrancy.querySelector('select');
var optionAll = formCarrancy.querySelectorAll('option');
var productItemPrice = document.querySelectorAll('.product-item__price');
var productItemPriceCarrancy = document.querySelectorAll('.product-item__price-carrancy');


select.addEventListener('click', function () {
    optionAll.forEach(function (item) {
        if (item.selected === true) {
            
        };
    });
}); 

productItemPriceCarrancy.forEach(function (item) {
    item.textContent = item.textContent;
});