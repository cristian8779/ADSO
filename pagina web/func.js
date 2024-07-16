document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const origen = document.getElementById('origen').value;
        const destino = document.getElementById('destino').value;
        const fecha = document.getElementById('fecha').value;

        if (origen && fecha) {
            const ticket = {
                origen: origen,
                destino: destino,
                fecha: fecha
            };

            saveTicket(ticket);
            displayTickets();
            alert(`Tiquete guardado: ${origen} a ${destino} para el ${fecha}.`);
        } else {
            alert('Por favor completa todos los campos.');
        }
    });

    document.getElementById('clear-history').addEventListener('click', () => {
        clearTickets();
        displayTickets();
        alert('Historial de tiquetes borrado.');
    });

    displayTickets();
});

function saveTicket(ticket) {
    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push(ticket);
    localStorage.setItem('tickets', JSON.stringify(tickets));
}

function displayTickets() {
    const ticketList = document.getElementById('ticket-display');
    ticketList.innerHTML = '';
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];

    tickets.forEach((ticket) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${ticket.origen} a ${ticket.destino} para el ${ticket.fecha}`;
        ticketList.appendChild(listItem);
    });
}

function clearTickets() {
    localStorage.removeItem('tickets');
}
