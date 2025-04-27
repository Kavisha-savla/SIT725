
// Initialize socket.io
const socket = io();

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Materialize components
    M.AutoInit();

    const submitBtn = document.getElementById('submitFruit');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            const fruitName = prompt('Enter Fruit Name:');
            const fruitPrice = prompt('Enter Price (e.g., $3.99/kg):');
            const fruitDesc = prompt('Enter Description:');

            if (fruitName && fruitPrice && fruitDesc ) {
                // Emit the new fruit data
                socket.emit('newFruit', {
                    name: fruitName,
                    price: fruitPrice,
                    description: fruitDesc,

                });
            }
        });
    }

    // Listen for 'addFruitCard' from server
    socket.on('addFruitCard', (data) => {
        const fruitCards = document.getElementById('fruitCards');

        const newCard = `
        <div class="col s12 m4 l4">
            <div class="card">
                <div class="card-image">
                </div>
                <div class="card-content">
                    <span class="card-title">${data.name}</span>
                    <p class="price-tag">${data.price}</p>
                    <p>${data.description}</p>
                </div>
            </div>
        </div>`;

        fruitCards.innerHTML += newCard;
    });
});
