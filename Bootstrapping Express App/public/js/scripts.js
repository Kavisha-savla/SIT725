    document.addEventListener('DOMContentLoaded', function() {
        // Initialize modals
        var modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
        
        // Initialize form submission
        $('#submitFruit').click(function() {
            const newFruit = {
                name: $('#fruitName').val(),
                price: parseFloat($('#fruitPrice').val()).toFixed(2),
                description: $('#fruitDescription').val(),
                image: $('#fruitImage').val(),
                link: $('#fruitLink').val()
            };

            const fruitCard = `
                <div class="col s12 m4 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${newFruit.image}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${newFruit.name}</span>
                            <p class="price-tag">$${newFruit.price}/kg</p>
                            <p>${newFruit.description}</p>
                            <a href="${newFruit.link}" target="_blank" class="fruit-link">Learn More</a>
                        </div>
                    </div>
                </div>`;

            $('#fruitCards').append(fruitCard);
            $('#fruitForm').trigger('reset');
            
            // Correct way to close modal
            $('#addModal').modal('close');
        });
    });
