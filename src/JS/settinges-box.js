const settingsSidebar = document.querySelector(`body aside div.settinges`);

// ------------------------------------ //
//**  Account Profile Image Settings   **//
// ------------------------------------ //

// add event listener to the the settinges icon in sidebar
const accountImg = document.querySelector("div#account-img");
const submitAccountImgBtn = document.querySelector("button#submitAccountImg");
const clearAccountImgBtn = document.querySelector("button#clearAccountImg");
const accountImgInput = document.querySelector("input#accountImgInput");
const accountImgSidebar = document.querySelector("div#accountImgSidebar");

// add event listener to submitAccountImg to get the value of the input then change background-image url of AccountImg to that value

submitAccountImgBtn.addEventListener("click", () => {
  accountImg.style.backgroundImage = `url(${accountImgInput.value})`;
  console.log(`Profile Image Changed`);

  accountImgSidebar.querySelector(
    "div:nth-child(1)"
  ).style.backgroundImage = `url(${accountImgInput.value})`;
  accountImgSidebar.querySelector("svg").classList.add("hidden");

  // step2 save that in loacl storage then apply it on load
  localStorage.setItem("profileImg", accountImgInput.value); // save the value in local storage
  accountImgInput.value = ""; // clear the input value
  console.log(`==> Profile Image Saved`);
});

// step3 apply it on load
// get the value from local storage then apply it on load to the background-image of AccountImg on load
accountImg.style.backgroundImage = `url(${localStorage.getItem("profileImg")})`;
// give the same value to accountImgSidebar

accountImgSidebar.querySelector(
  "div:nth-child(1)"
).style.backgroundImage = `url(${localStorage.getItem("profileImg")})`;
// then give the svg hidden class if there a "profileImg" key in loacl storage else do nothing
if (localStorage.getItem("profileImg") !== null) {
  accountImgSidebar.querySelector("svg").classList.add("hidden");
}

// Remove the profileImg from local storage
clearAccountImgBtn.addEventListener("click", () => {
  accountImg.style.backgroundImage = `url(./assets/default-profile-img.jpg)`;
  accountImgSidebar.querySelector(
    "div:nth-child(1)"
  ).style.backgroundImage = ``;
  accountImgSidebar.querySelector("svg").classList.remove("hidden");
  localStorage.removeItem("profileImg");
});

// ------------------------------------ //
//**  Settinges  Box   **//
// ------------------------------------ //
const settingsBox = document.querySelector("div#settingsBox");
//?  Settinges NavBar  ?//
const settingsNavBar = document.querySelector(
  "div#settinges div#settingsNavBar"
);
// close settinges box btn
const closeSettingesBtn = document.querySelector("button#closeSettingsBtn");

// ----------------

// give the settingsBox the hidden class
closeSettingesBtn.addEventListener("click", () => {
  settingsBox.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

// add event listener to #settingsSidebar to remove the hidden class from settingsBox
settingsSidebar.addEventListener("click", () => {
  settingsBox.classList.remove("hidden");
  // to stop scrolling when the settinges box is open
  document.body.classList.add("overflow-hidden");
});

// settings NavBar Section

const settingsNavBarSections = document.querySelectorAll(
  "div#settingsNavBar section"
);

// add event listener to each section of settingsNavBar to give class before:bg-violet-600 to the active section and remove it from the rest
settingsNavBarSections.forEach((section) => {
  section.addEventListener("click", () => {
    settingsNavBarSections.forEach((sec) => {
      sec.classList.remove("before:bg-violet-600");
    });
    section.classList.add("before:bg-violet-600");
  });
});

//
