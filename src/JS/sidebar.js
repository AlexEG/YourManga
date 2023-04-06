window.onscroll = () => {
  if (document.documentElement.scrollTop > 320) {
    sidebar.className =
      "fixed top-0 left-0 h-full z-50 m-0 flex w-14 flex-col bg-white3";
  } else {
    sidebar.className = "absolute top-80 z-50 m-0 flex w-14 flex-col bg-white";
  }
};
