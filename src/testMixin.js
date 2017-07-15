/**
 * A mixin.
 * 
 * @param {*} superclass the class to mix onto 
 * @mixin
 * @property {string} myProp a string property
 */
const TestMixin = (superclass) => class extends superclass {

    get myProp() {
        return this._myProp;
    }

    set myProp(val) {
        this._myProp = val;
    }

    /**
     * Get 2nd property.
     * @returns {string} the 2nd property
     */
    get myProp2() {
        return this._myProp2;
    }

    /**
     * Set 2nd property.
     * @param {string} val the value to set
     */
    set myProp2(val) {
        this._myProp2 = val;
    }

	/**
	 * Do something.
	 * 
	 * @param {boolean} param important parameter
	 * @returns {string} the base URL to SolarUser
	 * @memberof TestMixin#
	 */
	doSomething(param) {
        console.log('param =', param);
        return 'thanks';
	}

}

export default TestMixin;
