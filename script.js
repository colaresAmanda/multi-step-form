function init() {
    // Step tracking object
    const step = {
      I: true,
      II: false,
      III: false
    };
  
    // Button and element references
    const nextButton = document.querySelector('#next-button');
    const previousButton = document.querySelector('#previous-button');
    const submitButton = document.querySelector('#submit-button');
    const fieldsetElements = Array.from(document.querySelectorAll('fieldset'));
    const formStepI = document.querySelector('#ciruclar-step-I');
    const formStepII = document.querySelector('#ciruclar-step-II');
    const formStepIII = document.querySelector('#ciruclar-step-III');
  
    // Initial values
    let translateValue = 0;
  
    // Event listener for "Next" button
    nextButton.addEventListener('click', (e) => {
      e.preventDefault()
      if (step.I) {
        // Toggle visibility and active state
        previousButton.classList.toggle("hidden");
        formStepI.classList.toggle('active');
        formStepII.classList.toggle('active');
        // Update translate value and step tracking
        translateValue = 0;
        step.I = false;
        step.II = true;
      } else if (step.II) {
        // Toggle visibility and active state
        nextButton.classList.toggle("hidden");
        submitButton.classList.toggle("hidden");
        formStepII.classList.toggle('active');
        formStepIII.classList.toggle('active');
        // Update translate value and step tracking
        translateValue = -25;
        step.II = false;
        step.III = true;
      }
  
      // Apply translate value to fieldset elements
      fieldsetElements.forEach((fieldset) => {
        fieldset.style.transform = `translateX(${translateValue}rem)`;
      });
    });
  
    // Event listener for "Previous" button
    previousButton.addEventListener('click', (e) => {
      e.preventDefault()

      if (step.II) {
        // Toggle visibility and active state
        formStepII.classList.toggle('active');
        formStepI.classList.toggle('active');
        // Update translate value and step tracking
        translateValue = 25;
        previousButton.classList.toggle("hidden");
        step.II = false;
        step.I = true;
      } else if (step.III) {
        // Toggle visibility and active state
        formStepIII.classList.toggle('active');
        formStepII.classList.toggle('active');
        nextButton.classList.toggle("hidden");
        submitButton.classList.toggle("hidden");
        // Update translate value and step tracking
        translateValue = 0;
        step.III = false;
        step.II = true;
      }
  
      // Apply translate value to fieldset elements
      fieldsetElements.forEach((fieldset) => {
        fieldset.style.transform = `translateX(${translateValue}rem)`;
      });
    });
  }
  
  // Initialize the form behavior
  init();
  