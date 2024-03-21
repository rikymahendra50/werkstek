export default function () {
  const registerForm = ref({
    email: "",
  });

  const showPinEmailExpired = ref(false);
  const secondTime = ref(60);

  function countdown() {
    const interval = setInterval(() => {
      if (secondTime.value === 0) {
        clearInterval(interval);
        showPinEmailExpired.value = true;
      } else {
        secondTime.value--;
      }
    }, 1000);
  }

  return {
    registerForm,
    countdown,
    showPinEmailExpired,
    secondTime,
  };
}
