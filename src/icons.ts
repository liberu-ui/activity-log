/**
 * This file imports the necessary icons from the Font Awesome library
 * and adds them to the icon library for later use.
 */
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the shoe prints icon to the Font Awesome icon library.
 * 
 * @param {IconDefinition} icon - The icon to be added to the library.
 */
function addIconToLibrary(icon: IconDefinition): void {
  library.add(icon);
}

// Add the shoe prints icon to the library
addIconToLibrary(faShoePrints);