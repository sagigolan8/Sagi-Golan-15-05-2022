export const darkModeImg = './assets/HalfMoonAndSun.png'; 

export const sunImg = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Sun.svg';


export const moonImg = 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Weather_icon_-_full_moon.svg';


export const unKnownFlag = 'https://upload.wikimedia.org/wikipedia/commons/7/75/Emoji_ufe82b.svg'; 


export const flagCdn = (countryCode) => `https://flagcdn.com/w80/${countryCode}.png`


export const iconCdn = (iconNum) => 
`https://developer.accuweather.com/sites/default/files/${iconNum < 10 ? `0${iconNum}` : iconNum}-s.png` 


export const getBackground = (iconNum) =>{
    let backgroundVideo

  /* Day */
  if ((iconNum >= 1 && iconNum <= 2) || (iconNum === 30)) { /*Sunny*/
    backgroundVideo = "./assets/Sunny.mp4";
  }
  if (iconNum === 5) { /*Hazy*/
    backgroundVideo = "./assets/Hazy.mp4";
  }
  if ((iconNum >= 6 && iconNum <= 7) || (iconNum >= 19 && iconNum <= 23) || (iconNum >= 25 && iconNum <= 26) || (iconNum === 31) || (iconNum === 32) || (iconNum >= 3 && iconNum <= 4)) { /*Cloudy*/
    backgroundVideo = "./assets/Cloudy.mp4";
  }
  if (iconNum === 8) { /*Overcast */
    backgroundVideo = "./assets/Overcast.mp4";
  }
  if (iconNum === 11) { /*Fog*/
    backgroundVideo = "./assets/Fog.mp4";
  }
  if ((iconNum >= 12 && iconNum <= 18) || iconNum === 29) { /*Rain */
    backgroundVideo = "./assets/Rain.mp4";
  }
  if (iconNum >= 24) { /*Snow*/
    backgroundVideo = "./assets/Snow.mp4";
  }

  /*Night */
  if (iconNum >= 33 && iconNum <= 36) { /*ClearNight*/
    backgroundVideo = "./assets/ClearNight.mp4";
  }
  if (iconNum === 37) { /*FogNight*/
    backgroundVideo = "./assets/FogNight.mp4";
  }
  if ((iconNum === 38) || (iconNum === 43) || (iconNum === 44)) { /*CloudyNight*/
    backgroundVideo = "./assets/CloudyNight.mp4";
  }
  if (iconNum >= 39 && iconNum <= 42) { /*RainNight*/
    backgroundVideo = "./assets/RainNight.mp4";
  }
  return backgroundVideo;
}