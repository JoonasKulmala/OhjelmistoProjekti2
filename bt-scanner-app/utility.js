// satunnainen numero välillä 0-100
export function giveRandomNumber() {
  return String(Math.floor(Math.random() * 101))
}

// valitsee Markerille värin 
export function pickPinColor(bt_connections) {
  if (bt_connections < 25) {
    return 'green'
  } else if (bt_connections < 50) {
    return 'yellow'
  } else {
    return 'red'
  }
}

export function formattedDate() {
  return new Date().toUTCString().substr(17, 5)
}

export function formatTimestamp(timestamp) {
  return timestamp.slice(11, 16)
}