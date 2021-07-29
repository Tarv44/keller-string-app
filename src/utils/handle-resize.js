const handleResize = (callback) => {
  callback();
  window.addEventListener('resize', callback)
  window.removeEventListener('resize', callback)
}

export default handleResize