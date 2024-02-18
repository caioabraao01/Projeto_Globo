document.addEventListener('DOMContentLoaded', function () {
   
    var modais = document.querySelectorAll('.modal');
    modais.forEach(function (modal) {
        modal.style.display = 'none';
    });

    
    document.getElementById("openModalButton").onclick = function() {
        openModal("myModal");
    };

    document.getElementById("closeModalButton").onclick = function() {
        closeModal("myModal");
    };
});

var currentModal = null;

function openModal(modalId) {
    if (currentModal) {
        closeModal(currentModal.id);
    }

    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    currentModal = modal;
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    currentModal = null;
}

window.onclick = function (event) {
    if (currentModal && event.target === currentModal) {
        closeModal(currentModal.id);
    }
};
