# jQuery validation polish

Additional methods for jquery validation library specific to polish websites.

## Demo

Demo files showing basic plugin usage and all methods is available in `demo` directory.

@todo show properly all methods

## Usage

You can use additional methods provided by this plugin in few ways.

### Method 1 - for prototyping, not recommended for production
Use unpkg CDN. Latest version library is available under this link:
[https://unpkg.com/@divantespzoo/jquery-validation-polish/dist/jquery.validation.polish.js](https://unpkg.com/@divantespzoo/jquery-validation-polish/dist/jquery.validation.polish.js)

Before loading this methods you should load jquery and jquery validation.
Example:
``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js" defer></script>
<script src="https://unpkg.com/@divantespzoo/jquery-validation-polish/dist/jquery.validation.polish.js" defer></script>
```

### Method 2 - with build system

First install npm module using of the command below:
``` sh
npm install @divantespzoo/jquery-validation-polish --save
```
or with Yarn
``` sh
yarn add @divantespzoo/jquery-validation-polish
```

If you want to include all available methods in your file after importing jQuery and jQuery validation import following package:
``` js
import '@divantespzoo/jquery-validation-polish';
```

When you need only couple of methods import each one explicitly. You will avoid having unused code in your production files. This method requires your build system to transpile JS for ES5 standard.

Example for address validation:
``` js
import '@divantespzoo/jquery-validation-polish/validatorAddress';
```

Below in each method description import path will be specified.

## Available methods

<details>
    <summary>Address</summary>
    <p>Allows for letters (including polish and german diacritics), digits, white space and special characters: \/,.-"</p>
    <p><b>Class</b>: `js-validation-address`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie adres.`</p>
    <p><b>Import file</b>: `validatorAddress`</p>
</details>

<details>
    <summary>Alpha characters with polish and german diacritics</summary>
    <p>Allow only letters (including polish and german diacritics)</p>
    <p><b>Class</b>: `js-validation-alpha-pl-de`</p>
    <p><b>Default message</b>: `Dozwolone są tylko litery.`</p>
    <p><b>Import file</b>: `validatorAlphaPlDe`</p>
</details>

<details>
    <summary>Alpha characters with polish diacritics</summary>
    <p>Allow only letters (including polish diacritics)</p>
    <p><b>Class</b>: `js-validation-alpha-pl`</p>
    <p><b>Default message</b>: `Dozwolone są tylko litery od a do z.`</p>
    <p><b>Import file</b>: `validatorAlphaPl`</p>
</details>

<details>
    <summary>Alpha characters</summary>
    <p>Allow only letters</p>
    <p><b>Class</b>: `js-validation-alpha`</p>
    <p><b>Default message</b>: `Dozwolone są tylko litery od a do z bez polskich znaków.`</p>
    <p><b>Import file</b>: `validatorAlpha`</p>
</details>

<details>
    <summary>Building number</summary>
    <p>Requires at least 1 number that can be followed by letters, digits, special characters and whitespace.</p>
    <p><b>Class</b>: `js-validation-building-number`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie numer budynku.`</p>
    <p><b>Import file</b>: `validatorBuildingNumber`</p>
</details>

<details>
    <summary>City</summary>
    <p>Requires at 2 letters and then allows for whitespace, special characters like - and more letters</p>
    <p><b>Class</b>: `js-validation-city`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie nazwę miasta.`</p>
    <p><b>Import file</b>: `validatorCity`</p>
</details>

<details>
    <summary>Date</summary>
    <p>Checks if date is correct date. Format for date is yyyy-mm-dd. Parts of date can be separated with -\/._</p>
    <p><b>Class</b>: `js-validation-date`</p>
    <p><b>Default message</b>: `Wprowadź poprawną datę`</p>
    <p><b>Import file</b>: `validatorDate`</p>
</details>

<details>
    <summary>Date from future</summary>
    <p>Checks if date is proper date and if it is from future. Present date is incorrect.</p>
    <p><b>Class</b>: `js-validation-date-future`</p>
    <p><b>Default message</b>: `Data musi być z przyszłości.`</p>
    <p><b>Import file</b>: `validatorDateFuture`</p>
    <p><b>Prerequisite</b>: method requires date validator. Import it before this one</p>
</details>

<details>
    <summary>Date max</summary>
    <p>Checks if date is proper date and happened before provided max value.</p>
    <p><b>Class</b>: `js-validation-date-max`</p>
    <p><b>Default message</b>: `Proszę wprowadzić datę przed ${max}`</p>
    <p><b>Import file</b>: `validatorDateMax`</p>
    <p><b>Prerequisite</b>: method requires date validator. Import it before this one. You must send max date as param.</p>
</details>

@todo present all methods

## Overriding messages

@todo example override
