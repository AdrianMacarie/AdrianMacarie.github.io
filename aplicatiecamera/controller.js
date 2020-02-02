const captureVideoButton = document.querySelector('#screenshot .capture-button');
const img = document.querySelector('#screenshot img');

const canvas = document.createElement('canvas');

captureVideoButton.onclick = function() {
  navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
};
const captureVideoButton =
  document.querySelector('#cssfilters .capture-button');
const cssFiltersButton =
  document.querySelector('#cssfilters-apply');
const video =
  document.querySelector('#cssfilters video');

let filterIndex = 0;
const filters = [
  'grayscale',
  'sepia',
  'blur',
  'brightness',
  'contrast',
  'hue-rotate',
  'hue-rotate2',
  'hue-rotate3',
  'saturate',
  'invert',
  ''
];

captureVideoButton.onclick = function() {
  navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
};

cssFiltersButton.onclick = video.onclick = function() {
  video.className = filters[filterIndex++ % filters.length];
};

function handleSuccess(stream) {
  video.srcObject = stream;
}