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
  mode: 'picture',
  recorderProfile: 'jpg',
  previewSize: {
    width: 352,
    height: 288
  }
};

var camera = navigator.mozCameras.getListOfCameras()[0];

function onSuccess(cameraObj) {
  var cameraControl = cameraObj.camera;
  // Do stuff with the cameraControl
};

function onError(error) {
  console.warn(error);
};

navigator.mozCameras.getCamera(camera, options).then(onSuccess, onError);