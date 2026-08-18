const item = {
    minusButton: this._minusButton,
    itemName: this._itemName,
    itemAmmount: this._itemAmount,
    plusButton: this._plusButton
}

const increaseItemAmount = () => {
    onclick = () => {
        item.itemAmount += 1;
        item.itemAmmount.innerHTML = item.itemAmount;
    }
}

const decreaseItemAmount = () => {
    onclick = () => {
        if (item.itemAmount > 0) {
            item.itemAmount -= 1;
            item.itemAmmount.innerHTML = item.itemAmount;
        }
    }
}

const createItem = (itemName) => {
    item.itemName.innerHTML = itemName;
    item.itemAmount = 0;
    item.itemAmmount.innerHTML = item.itemAmount;
}