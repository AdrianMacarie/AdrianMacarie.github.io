const captureVideoButton = document.querySelector('#screenshot .capture-button');
const img = document.querySelector('#screenshot img');

const canvas = document.createElement('canvas');

captureVideoButton.onclick = function() {
  navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
};
