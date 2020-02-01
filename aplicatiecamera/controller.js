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
