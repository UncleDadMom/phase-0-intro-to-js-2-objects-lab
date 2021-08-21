// Write your solution in this file!
const employee = {
    name: `Daisy`,
    streetAddress: "305 Picea View Ct"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, { [key]: value })
}
function deleteFromEmployeeByKey(obj, key) {
    let newEmployee = Object.assign({}, obj)
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}