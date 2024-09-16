"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let numbers = [1, 2, 3, 4];
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
let user = [2, 'Raj'];
user[0] = 6;
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
;
let mySize = size.Medium;
let employee = {
    id: 1,
    name: 'Yraj',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map