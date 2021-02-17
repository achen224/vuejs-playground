
export default function (KEY) {
  return {
    load () {
      return JSON.parse(window.localStorage.getItem(KEY) || 'null')
    },
    save (data) {
      window.localStorage.setItem(KEY, JSON.stringify(data))
    }
  }
}
