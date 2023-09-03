export function convertToDateTimeInputFormat(dateTimeString: string) {
    const date = dateTimeString ? new Date(dateTimeString) : new Date()
    const year = date.toLocaleString("default", { year: "numeric" })
    const month = date.toLocaleString("default", { month: "2-digit" })
    const day = date.toLocaleString("default", { day: "2-digit" })
    return `${year}-${month}-${day}T${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`
}