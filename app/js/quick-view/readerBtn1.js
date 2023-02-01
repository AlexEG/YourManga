readerBtn1.addEventListener("click", function () {
  mangaBody.classList.add("noscroll");

  if (reader.classList.contains("hide")) {
    reader.classList.remove("hide");
  } else {
    reader.classList.add("hide");
  }

  quickview.innerHTML = `
   <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 0"
      src="https://meo3.comick.pictures/0-DYxr7wL9gMGGh.jpg"
      ;
    />
    <img
      alt="Chainsaw
    Man - Digital Colored Comics chapter 1, page 1"
      src="https://meo3.comick.pictures/1-tlQyKFPq9Rt3a.png"
      ;
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 2"
      src="https://meo3.comick.pictures/2-fk5jNtBAeI17Z.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 3"
      src="https://meo3.comick.pictures/3-V75MxG-5PYsuK.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 4"
      src="https://meo3.comick.pictures/4-IjPYeF13I_oYu.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 5"
      src="https://meo3.comick.pictures/5-tsDdIodYG9LuR.jpg?width=1600"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 6"
      src="https://meo.comick.pictures/6-pToWG1VmrLF1r.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 7"
      src="https://meo3.comick.pictures/7-sLiDo61tNPLB2.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 8"
      src="https://meo.comick.pictures/8-kIx57vbkGxi6i.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 9"
      src="https://meo3.comick.pictures/9-UW2lmfEbznj5O.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 10"
      src="https://meo3.comick.pictures/10-_OQNtIugfQ-Ob.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 11"
      src="https://meo.comick.pictures/11-oiZclrfxa9KGs.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 12"
      src="https://meo3.comick.pictures/12-ztM9bM2I8NEU3.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 13"
      src="https://meo3.comick.pictures/13-SoocHwt-dlCaG.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 14"
      src="https://meo.comick.pictures/14-mRYPKxjUdrg-4.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 15"
      src="https://meo.comick.pictures/15-EucWRTzlT_16-.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 16"
      src="https://meo3.comick.pictures/16-hB0jvu3TSrLFt.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 17"
      src="https://meo3.comick.pictures/17-uS9nuSqG-6JVB.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 18"
      src="https://meo.comick.pictures/18-WHWdgxuChCJee.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 19"
      src="https://meo.comick.pictures/19-NIpladvKjeRxq.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 20"
      src="https://meo.comick.pictures/20-hhDWvn6G10wqg.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 21"
      src="https://meo.comick.pictures/21-T-rlp8AXU3o_q.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 22"
      src="https://meo.comick.pictures/22-4tWxks_mq2Had.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 23"
      src="https://meo.comick.pictures/23-5GPgDqE8C0qZz.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 24"
      src="https://meo.comick.pictures/24-uigsyc8DBy44L.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 25"
      src="https://meo3.comick.pictures/25-72dEqyRgOnq2d.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 26"
      src="https://meo.comick.pictures/26-ClJG2kKp2nR7A.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 27"
      src="https://meo3.comick.pictures/27-k_GQCV-sxoqdc.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 28"
      src="https://meo.comick.pictures/28-gPzSJX23H0gxY.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 29"
      src="https://meo3.comick.pictures/29-N8gHR3NM4RZ1g.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 30"
      src="https://meo.comick.pictures/30-vN5tvraPEjwKs.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 31"
      src="https://meo.comick.pictures/31-hb_xJ-HvRbEtc.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 32"
      src="https://meo.comick.pictures/32-83Siud3aNIF6m.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 33"
      src="https://meo.comick.pictures/33-oFTC4f6maYdKb.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 34"
      src="https://meo.comick.pictures/34-1q1b-Z1nNoX6a.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 35"
      src="https://meo.comick.pictures/35-Q_4m5RppTsm6P.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 36"
      src="https://meo.comick.pictures/36-47g7BcOm1vinE.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 37"
      src="https://meo3.comick.pictures/37--hiB3fTgVLPna.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 38"
      src="https://meo3.comick.pictures/38-KG16wr6iROLFx.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 39"
      src="https://meo.comick.pictures/39-r9ufd6KRuXrsR.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 40"
      src="https://meo.comick.pictures/40-uMFvuTK0pl9wo.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 41"
      src="https://meo3.comick.pictures/41-gyc7O8XvxhiKO.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 42"
      src="https://meo.comick.pictures/42-MwM2Ux5qEGI3b.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 43"
      src="https://meo3.comick.pictures/43-QexgU2ba5ZxRM.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 44"
      src="https://meo3.comick.pictures/44-VXj1hEloVhRef.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 45"
      src="https://meo.comick.pictures/45-cdZ3Yupn2lTyv.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 46"
      src="https://meo3.comick.pictures/46-IV3L4iJlzcnP9.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 47"
      src="https://meo.comick.pictures/47-MauSqiNnpNYYJ.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 48"
      src="https://meo.comick.pictures/48-tevMgpyayYb7z.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 49"
      src="https://meo.comick.pictures/49-fOF0oX9M2RFyr.jpg?width=1600"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 50"
      src="https://meo.comick.pictures/50-oesMP22KjJncy.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 51"
      src="https://meo.comick.pictures/51-y93ESjTTHdGT6.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 52"
      src="https://meo.comick.pictures/52-ikpq-PZWvude8.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 53"
      src="https://meo3.comick.pictures/53-PAAP5HvM6MSYn.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 54"
      src="https://meo3.comick.pictures/54-mqToMSxu1Lik_.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 55"
      src="https://meo3.comick.pictures/55-CyDWpQMViYaXO.jpg"
    />
    <img
      alt="Chainsaw Man - Digital Colored Comics chapter 1, page 56"
      src="https://meo3.comick.pictures/56-25yROV16yG_7D.jpg"
    />
  `;
});
