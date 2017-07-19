
/**
 * Create a mixin class.
 *
 * @exports testmixin
 * @param {*} superclass - The class to mix onto.
 * @return {module:testmixin~mixin} The mixin class.
 */
const TestMixin = (superclass) => 

/**
 * A mixin.
 *
 * @mixin
 * @alias module:testmixin~mixin
 */
class extends superclass {

    /**
     * A string property.
     *
     * @type {string}
     */
    get myProp() {
        return this._myProp;
    }

    set myProp(val) {
        this._myProp = val;
    }

    /**
     * 2nd property.
     *
     * @type {string}
     */
    get myProp2() {
        return this._myProp2;
    }

    set myProp2(val) {
        this._myProp2 = val;
    }

	/**
	 * Do something.
	 * 
	 * @param {boolean} param important parameter
	 * @returns {string} the answer
	 */
	doSomething(param) {
        console.log('param =', param);
        return 'thanks';
	}

}

export default TestMixin;
