import { demonstration } from "../assets/link_address";
import imgFromVideo from "../assets/img_from_video.jpg";

const divLinkToVideo = (content, altTxt) => {
  const screenW = window.screen.width;
  const imgW = screenW < 800 ? 300 : 400;
  
  const divForVideo = document.createElement("div");
  divForVideo.className = "centered";
  const video = document.createElement("a");
  const imgVideo = document.createElement("img");
  const imgVid = new Image();
  imgVid.src = imgFromVideo;

  imgVideo.setAttribute("src", imgVid.src);
  imgVideo.setAttribute("alt", altTxt);
  imgVideo.setAttribute("width", imgW);
  imgVideo.setAttribute("height", "auto");

  video.setAttribute("href", demonstration);
  video.setAttribute("target", "_blank");
  video.setAttribute("rel", "noopener noreferrer");

  content.appendChild(divForVideo);
  divForVideo.appendChild(video);
  video.appendChild(imgVideo);
};

export { divLinkToVideo };
