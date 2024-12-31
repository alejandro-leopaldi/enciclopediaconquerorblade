document.addEventListener("click", function() {
    let botonEnviar = document.getElementById("botonenviar");

    botonEnviar.addEventListener("click", function() {
        
        let nombre = document.getElementById("nombre").value;
        let mensaje = document.getElementById("mensaje").value;

     
        if (nombre && mensaje) {
            // Guarda los valores en localStorage
            localStorage.setItem("nombre", nombre);
            localStorage.setItem("mensaje", mensaje);

            // Muestra un alert de éxito
            alert("La información solicitada se envió correctamente y se guardó en localStorage.");
        } else {
            // Muestra un alert si faltan datos
            alert("Por favor, completa todos los campos.");
        }
    });
});


    function actualizarReloj() {
        fetch("https://timeapi.io/api/time/current/zone?timeZone=America/Buenos_Aires")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                let dateTime = new Date(datos.dateTime);
                let horas = String(dateTime.getHours()).padStart(2, '0');
                let minutos = String(dateTime.getMinutes()).padStart(2, '0');
                let segundos = String(dateTime.getSeconds()).padStart(2, '0');
                document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
            })
            .catch((error) => {
                console.error("Error al obtener la hora: ", error);
            });
    }

    // actualiza relok
    setInterval(actualizarReloj, 1000);

    // Llama a la función para actualizar el reloj inmediatamente al cargar la página
    actualizarReloj();

          


