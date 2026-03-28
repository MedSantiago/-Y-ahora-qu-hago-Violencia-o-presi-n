document.addEventListener("DOMContentLoaded", () => {
  let progress = 0;
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  function updateProgress(value) {
    progress = Math.min(value, 100);
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${progress}% completado`;
  }

  function showMessage(element, type, message) {
    element.className = "";
    element.classList.add(type);
    element.textContent = message;
  }

  updateProgress(10);

  const decisionButtons = document.querySelectorAll(".decision-btn");
  decisionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        updateProgress(20);
      }
    });
  });

  const emergencyButton = document.getElementById("emergencyButton");
  const emergencyFeedback = document.getElementById("emergencyFeedback");

  emergencyButton.addEventListener("click", () => {
    emergencyFeedback.classList.remove("hidden");
    showMessage(
      emergencyFeedback,
      "result-box warning",
      "Si estás en riesgo, prioriza tu seguridad: busca una persona segura, sal del lugar si puedes y pide ayuda inmediata."
    );
    updateProgress(35);
  });

  const routeData = [
    {
      title: "Reconozco el riesgo",
      text: "Si hay miedo, amenaza, presión o abuso, no lo minimices. Identificarlo es el primer paso para protegerte."
    },
    {
      title: "Busco protección",
      text: "Alejarte del riesgo y acercarte a una persona o lugar seguro puede ser una acción clave."
    },
    {
      title: "Pido ayuda",
      text: "Buscar apoyo profesional, institucional o de una red confiable no es exagerar: es cuidarte."
    },
    {
      title: "Continúo la ruta",
      text: "Después de salir del riesgo inmediato, sigue la ruta de protección, atención y acompañamiento."
    }
  ];

  const routeButtons = document.querySelectorAll(".route-step");
  const routeContent = document.getElementById("routeContent");

  routeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      routeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const index = Number(button.dataset.route);
      routeContent.innerHTML = `
        <h3>${routeData[index].title}</h3>
        <p>${routeData[index].text}</p>
      `;
      updateProgress(55);
    });
  });

  const cardData = [
    {
      title: "Busca apoyo seguro",
      text: "Piensa en una persona confiable, una red segura o una institución donde puedas hablar sin sentirte en riesgo."
    },
    {
      title: "Sal del riesgo si puedes",
      text: "Si estás en una situación que amenaza tu seguridad, prioriza alejarte y pedir ayuda."
    },
    {
      title: "Protege tu integridad",
      text: "Tu bienestar físico y emocional va primero. No tienes que justificar que algo te hace daño."
    },
    {
      title: "Pide orientación",
      text: "Buscar orientación puede ayudarte a entender tus opciones y no quedar atrapada en la presión."
    }
  ];

  const clickCards = document.querySelectorAll(".click-card");
  const cardDetail = document.getElementById("cardDetail");

  clickCards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.card);
      cardDetail.innerHTML = `
        <h3>${cardData[index].title}</h3>
        <p>${cardData[index].text}</p>
      `;
      updateProgress(70);
    });
  });

  const choiceData = {
    proteccion: {
      title: "Necesitas protección",
      text: "La prioridad es tu seguridad. Busca ayuda inmediata, una persona segura o una ruta de protección."
    },
    orientacion: {
      title: "Necesitas orientación",
      text: "Tener claridad sobre lo que te pasa y tus opciones puede ayudarte a salir de la presión."
    },
    apoyo: {
      title: "Necesitas apoyo emocional o acompañamiento",
      text: "No tienes que sostener esto sola. Un apoyo confiable puede ayudarte a pensar y actuar con más seguridad."
    },
    salir: {
      title: "Necesitas salir de una situación de riesgo",
      text: "Si puedes, aléjate del lugar o de la persona que representa riesgo y busca ayuda cuanto antes."
    }
  };

  const guidedChoiceButtons = document.querySelectorAll(".guided-choice-btn");
  const guidedChoiceResult = document.getElementById("guidedChoiceResult");

  guidedChoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.choice;
      guidedChoiceResult.innerHTML = `
        <h3>${choiceData[key].title}</h3>
        <p>${choiceData[key].text}</p>
      `;
      updateProgress(82);
    });
  });

  const scenarioButtons = document.querySelectorAll(".scenario-btn");

  scenarioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const scenario = button.dataset.scenario;
      const choice = button.dataset.choice;
      const feedback = document.getElementById(`scenarioFeedback${scenario}`);

      if (choice === "correcto") {
        showMessage(
          feedback,
          "scenario-feedback success",
          "Correcto. La respuesta que más protege es buscar ayuda, apoyo y seguridad."
        );
        updateProgress(92);
      } else {
        showMessage(
          feedback,
          "scenario-feedback warning",
          "No. Guardarlo sola o minimizarlo puede aumentar el riesgo. Esto requiere apoyo y protección."
        );
        updateProgress(86);
      }
    });
  });
});