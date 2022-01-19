const trackContent = `WEBVTT

STYLE
::cue(u) {
  background-image: linear-gradient(45deg,red,violet);
}

1
00:00:00.000 --> 00:00:03.000
<i>Ceci est une petite démonstration.</i>

2
00:00:03.000 --> 00:00:06.000
<b>Il y a plusieurs possibilité !</b>
`;

const trackBlob = new Blob([trackContent], {
  type:"text/plain;charset=utf-8"
});

const trackUrl = URL.createObjectURL(trackBlob);

document.querySelector("#caption-track").src = trackUrl;