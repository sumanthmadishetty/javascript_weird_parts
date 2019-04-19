// Ployfill are something you would add to the code that the browser mayy localStorage
// Some js features may not be available in some oldbrowsers so if you want your code to work in all the browsers then you will add
// the code that the browser donot have

// Let say you want to add Object.assign as a polyfill for youur code then you would do
if(!Object.assign) {
    Object.assign(*args) {
        //Code goes here
    }
}