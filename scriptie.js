document.addEventListener("DOMContentLoaded", () => {
    const pendientesList = document.getElementById("pendientes");
    const completadosList = document.getElementById("completados");

    pendientesList.addEventListener("click", (e) => {
        if (e.target.closest(".complete-btn")) {
            const task = e.target.closest(".task");
            pendientesList.removeChild(task);
            completadosList.appendChild(task);

            const completeBtn = task.querySelector(".complete-btn");
            if (completeBtn) {
                completeBtn.remove();
            }
        }
    });
});
