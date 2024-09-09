
function addItem() {
    const itemName = document.getElementById("itemName").value;
    const quantity = document.getElementById("quantity").value;
    
    if (itemName && quantity) {
        const listItem = document.createElement("li");
        listItem.textContent = `${itemName} - ${quantity}`;
        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            const newItemName = prompt("Edit item name:", itemName);
            const newQuantity = prompt("Edit quantity:", quantity);
            if (newItemName && newQuantity) {
                listItem.textContent = `${newItemName} - ${newQuantity}`;
                listItem.appendChild(editButton);
                listItem.appendChild(removeButton);
            }
        };

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);
        document.getElementById("shoppingList").appendChild(listItem);
    }
    
    document.getElementById("itemName").value = '';
    document.getElementById("quantity").value = '';
}
