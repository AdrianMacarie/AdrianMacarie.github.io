var camera = navigator.mozCameras.getListOfCameras()[0];

function onSuccess(cameraObj) {
  var cameraControl = cameraObj.camera;
  // Do stuff with the cameraControl
};

function onError(error) {
  console.warn(error);
};

navigator.mozCameras.getCamera(camera, options).then(onSuccess, onError);


var sizes = instanceOfCameraControl.capabilities.pictureSizes

var options = {
  camera: navigator.mozCameras.getListOfCameras()[0]
};
 
function onSuccess(camera) {
  var sizes = camera.camera.capabilities.pictureSizes;
  
  sizes.forEach(function (size) {
    console.log(size.width + 'x' + size.height);
  });
};

navigator.mozCameras.getCamera(options).then(onSuccess);


