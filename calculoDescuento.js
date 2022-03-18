discountedPrice = (price,discount) => price * (100 - discount) / 100;

getDiscountPrice = () => {
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = parseInt(inputPrice.value);
    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = parseInt(inputDiscount.value);

    const newProductPrice = discountedPrice(valuePrice,valueDiscount);
    const responseInLabel = document.getElementById("replyP");
    responseInLabel.innerText = `El precio es de ${newProductPrice}`;
};
