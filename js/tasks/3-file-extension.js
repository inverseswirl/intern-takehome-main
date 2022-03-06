#! npm test ./tests/3-file-extension.js

/**
 * Returns the file extension of a filename.
 * @param {String} filename The string from which to extract the file extension
 * @returns {String} The file extension (with no period), or false if there is none.
 */
export default function getFileExtension(filename) {
    if(filename.includes('.')){ //if extension is present
        let extension_index = filename.indexOf('.')
        let substring = filename.substring(extension_index + 1)
        return substring
    }else{   //no extension is present
        return false;
    }
}


