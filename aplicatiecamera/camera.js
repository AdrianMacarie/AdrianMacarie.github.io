document.getElementById("id_logic_version").innerHTML = "2019.11.22.1";

var video = document.getElementById("id_video");

var c = { audio: true, video: { facingMode: "environment" }};

navigator.mediaDevices.getUserMedia(c).then(on_ok_cam_uab).catch(on_fail_cam_uab);

function on_ok_cam_uab(e)
{
	video.srcObject = e;
}

function on_fail_cam_uab(e)
{
	alert("Esec " + e);
}

var options = {
  camera: navigator.mozCameras.getListOfCameras()[0]
};
 
function onSuccess( camera ) {
  var capabilities = camera.camera.capabilities;

  if (capabilities.sceneModes.indexOf('night') > -1) {
    camera.sceneMode = 'night';
  }
};

navigator.mozCameras.getCamera(options).then(onSuccess)


var options = {
  mode: 'picture',
  recorderProfile: 'jpg',
  previewSize: {
    width: 352,
    height: 288
  }
};

var camera = navigator.mozCameras.getListOfCameras()[0];

function onSuccess(camera) {
  // Do stuff with the camera
};

function onError(error) {
  console.warn(error);
};

navigator.mozCameras.getCamera(camera, options, onSuccess, onError);
