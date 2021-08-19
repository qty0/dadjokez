export default function cache(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
