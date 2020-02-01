var mode = instanceOfCameraControl.sceneMode
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