var storage = navigator.getDeviceStorage('videos');
var cameraOptions = {
  camera: navigator.mozCameras.getListOfCameras()[0]
};
var recordOptions = {
  rotation: 0,
  maxFileSizeBytes: 1024 * 1024 * 1024 // 1 GB
  maxVideoLengthMs: 1000 * 60 * 60     // 1 hour
}

function onRecordStart() {
  console.log("The device is recording the video output from the camera");
}

function onStateChange( newState ) {
  console.log("The recorder state change: " + newState);
}

function onAccessCamera( camera ) {
  camera.startRecording(recordOptions, storage, 'myVideo.3gp', onRecordStart);
  camera.onRecorderStateChange = onStateChange;

  pauseBtn.onclick = function() {
    camera.pauseRecording();
  }

  resumeBtn.onclick = function() {
    camera.resumeRecording();
  }
};

navigator.mozCameras.getCamera(cameraOptions, onAccessCamera)