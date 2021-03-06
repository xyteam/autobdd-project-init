/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  element  Element selector
 * @param  {Boolean} falsCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
module.exports = (element, falsCase, exactly) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const nrOfElements = browser.elements(element).value;

    if (falsCase === true) {
        expect(nrOfElements.length).toBe(
            0,
            `Element with selector "${element}" should not exist on the page`
        );
    } else if (exactly) {
        expect(nrOfElements.length).toBe(
            exactly,
            `Element with selector "${element}" should exist exactly ` +
            `${exactly} time(s)`
        );
    } else {
        expect(nrOfElements.length).not.toBeLessThan(
            1,
            `Element with selector "${element}" should exist on the page`
        );
    }
};
