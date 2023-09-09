const submit = document.getElementById("submit");
const dismiss = document.getElementById("dismiss");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Please fill in all fields");
  } else {
    const data = {
      email,
    };
    document.querySelector(".signUp-form").classList.add("hidden");
    document.querySelector(".sign-up-img").classList.add("hidden");
    document.querySelector(".success-msg").classList.remove("hidden");

    document.getElementById('post-email').innerHTML = email;
    console.log('post-email')
  }
});

dismiss.addEventListener("click", (e) => {
    e.preventDefault();
  document.querySelector(".signUp-form").classList.remove("hidden");
  document.querySelector(".sign-up-img").classList.remove("hidden");
  document.querySelector(".success-msg").classList.add("hidden");
})