## Singleton 0.0.1

1. Purpose  
   `Singleton` is an implementation of the _Singleton Design pattern_
   
2. Origin 
   While looking for examples of _Singleton Design pattern_, I found these useful clues: 
   * Usage of `Symbol()` as a way to ensure that the `constructor` will only accept a predefined and unique value   
   * Check that _Instance count_ is less than or equal to One    
	  
   Then I used a _Static Getter_ for `This` to get the Singleton, so the code to get the _Singleton Instance_ is `Singleton.This` 
   (instead of the more common static method `GetInstance()` which in my opinion makes the code too verbous). 
  
   For targeting all module types, I provided the `CJS` (_CommonJS_), `ES6` (_ECMAScript 2015_) and  `UMD` (_Universal Module Definition_)
   versions. The conversions (from `CJS`) were performed with the help of the 
   `rollup` bundler (`cjs to es6 and umd.txt` in `doc` folder explains how to use `rollup` for this purpose).
   
   The default export (`main` field in `package.json`) is `index.js`, the `ES6` version.  

3. Source code 	  
```	
class Singleton {
	static #key = Symbol();
	static #_Singleton = new Singleton( this.#key );
	static #_InstanceCount = 0;

    // ** Private constructor **
	constructor( key ) {
		if ( key !== Singleton.#key ) {
			throw new TypeError("'Singleton' constructor is private");
		}

        this.name = "Singleton";
	} // ** Private constructor ** 'Singleton' design pattern
	
	static get This() {
		if ( Singleton.#_Singleton == undefined ) {
			this.#_Singleton = new Singleton();
			if ( this.#_InstanceCount > 0 ) {
				throw new TypeError("'Singleton' constructor called more than once");
			}
			this.#_InstanceCount++;
        }
        return Singleton.#_Singleton;
    } // Singleton get 'This'	
} // Singleton class

Singleton.This; // NB: ensures that #_InstanceCount = 1  
```