let videoExtensions = ['webm', 'mkv', 'flv', 'vob', 'ogv', 'ogg', 'rrc', 'gifv', 'mp3', 'mng', 'mov', 'avi', 'qt', 'wmv', 'yuv', 'rm', 'asf', 'amv', 'mp4', 'm4p', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'm4v', 'svi', '3gp', '3g2', 'mxf', 'roq', 'nsv', 'flv', 'f4v', 'f4p', 'f4a', 'f4b'];
let imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
export const getFilePath = (path: string) => {
  const url = new URL(path);
  const filename = decodeURIComponent(url?.pathname?.split('/').pop() || '');
  const [lastPath] = filename?.split('-').reverse();
  return lastPath || '';
};
export const getExtension = (path: string) => {
  let extension = '';
  const url = new URL(path);
  const filename = decodeURIComponent(url?.pathname?.split('.').pop() || '');
  if (filename === 'pdf') {
    extension = 'pdf';
  } else if (filename === 'doc') {
    extension = 'doc';
  } else {
    extension = 'apk';
  }
  return extension;
};
export const getFile = (path: string) => {
  let extension = '';
  const url = new URL(path);
  const filename = decodeURIComponent(url?.pathname?.split('.').pop() || '');
  if (videoExtensions?.includes(filename)) {
    extension = 'video';
  } else if (imageExtensions?.includes(filename)) {
    extension = 'img';
  } else if (filename === 'pdf'){
    extension = 'pdf';
  }
  return extension;
};
