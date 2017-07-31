# jQuery validation polish

Additional methods for jquery validation library specific to polish websites. More info about jQuery Validation and docs for usage and options: [jQuery Validation](https://jqueryvalidation.org/)

## Demo

Demo files showing basic plugin usage and some of methods is shown in `demo` directory.

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
    <p>Checks if date is correct. Format for date is yyyy-mm-dd. Parts of date can be separated with -\/._</p>
    <p><b>Class</b>: `js-validation-date`</p>
    <p><b>Default message</b>: `Wprowadź poprawną datę`</p>
    <p><b>Import file</b>: `validatorDate`</p>
</details>

<details>
    <summary>Date from future</summary>
    <p>Checks if date is correct and if it is from future. Present date is incorrect.</p>
    <p><b>Class</b>: `js-validation-date-future`</p>
    <p><b>Default message</b>: `Data musi być z przyszłości.`</p>
    <p><b>Import file</b>: `validatorDateFuture`</p>
    <p><b>Prerequisite</b>: method requires date validator. Import it before this one</p>
</details>

<details>
    <summary>Date max</summary>
    <p>Checks if date happened before provided max value.</p>
    <p><b>Default message</b>: `Proszę wprowadzić datę przed ${max}`</p>
    <p><b>Import file</b>: `validatorDateMax`</p>
    <p><b>Recommendation</b>: use date validator to check id date is correct.</p>
    <p><b>Parameters</b>: max date</p>
</details>

<details>
    <summary>Date min</summary>
    <p>Checks if date happened after provided min value.</p>
    <p><b>Default message</b>: `Proszę wprowadzić datę po ${min}`</p>
    <p><b>Import file</b>: `validatorDateMin`</p>
    <p><b>Recommendation</b>: use date validator to check id date is correct.</p>
    <p><b>Parameters</b>: min date</p>
</details>

<details>
    <summary>Date not future</summary>
    <p>Check if date is correct and is not from future(today or past).</p>
    <p><b>Class</b>: `js-validation-date-not-future`</p>
    <p><b>Default message</b>: `Data nie może być z przyszłości.`</p>
    <p><b>Import file</b>: `validatorDateNotFuture`</p>
    <p><b>Prerequisite</b>: method requires date validator. Import it before this one</p>
</details>

<details>
    <summary>Date not past</summary>
    <p>Check if date is correct and is not from past(today or future).</p>
    <p><b>Class</b>: `js-validation-date-not-past`</p>
    <p><b>Default message</b>: `Data nie może być z przeszłości.`</p>
    <p><b>Import file</b>: `validatorDateNotPast`</p> 
    <p><b>Prerequisite</b>: method requires date validator. Import it before this one</p>
</details>

<details>
    <summary>Date past</summary>
    <p>Check if date is correct and is from past (not present).</p>
    <p><b>Class</b>: `js-validation-date-past`</p>
    <p><b>Default message</b>: `Data musi być z przeszłości.`</p>
    <p><b>Import file</b>: `validatorDatePast`</p> 
    <p><b>Prerequisite</b>: method requires date validator. Import it before this one</p>
</details>

<details>
    <summary>Digits</summary>
    <p>Checks if string contains only digits.</p>
    <p><b>Class</b>: `js-validation-digits`</p>
    <p><b>Default message</b>: `Dozwolone są tylko cyfry.`</p>
    <p><b>Import file</b>: `validatorDigits`</p>
</details>

<details>
    <summary>Email</summary>
    <p>Overrides jQuery validation email validator. Limits string to 320 chars.</p>
    <p><b>Class</b>: `js-validation-email`</p>
    <p><b>Default message</b>: `Wprowadź poprawny adres email.`</p>
    <p><b>Import file</b>: `validatorEmail`</p>
</details>

<details>
    <summary>Firstname</summary>
    <p>Enables Alpha characters with polish and german diacritics validator</p>
    <p><b>Class</b>: `js-validation-firstname`</p>
    <p><b>Default message</b>: same as used in enabled validator</p>
    <p><b>Import file</b>: `validatorFirstname`</p>
    <p><b>Prerequisite</b>: method requires Alpha characters with polish and german diacritics validator. Import it before this one</p>
</details>

<details>
    <summary>Firstnames with Lastname</summary>
    <p>Requires at least one name and lastname. Blocks most of special characters and digits.</p>
    <p><b>Class</b>: `js-validation-firstnames-lastname`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie imię/imiona i nazwisko.`</p>
    <p><b>Import file</b>: `validatorFirstnamesLastname`</p>
</details>

<details>
    <summary>Firstnames</summary>
    <p>Requires at least one name. Blocks most of special characters and digits.</p>
    <p><b>Class</b>: `js-validation-firstnames`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie imię/imiona`</p>
    <p><b>Import file</b>: `validatorFirstnames`</p>
</details>

<details>
    <summary>Fullname</summary>
    <p>Requires firstname and lastname. Blocks most of special characters and digits.</p>
    <p><b>Class</b>: `js-validation-fullname`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie imię i nazwisko`</p>
    <p><b>Import file</b>: `validatorFullname`</p>
</details>

<details>
    <summary>Lastname</summary>
    <p>Requires lastname. Blocks most of special characters and digits.</p>
    <p><b>Class</b>: `js-validation-lastname`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie nazwisko`</p>
    <p><b>Import file</b>: `validatorLastname`</p>
</details>

<details>
    <summary>House number</summary>
    <p>Requires at least one digits. Then it allows for more digits, alpha characters and some special characters -/\</p>
    <p><b>Class</b>: `js-validation-house-number`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie numer mieszkania.`</p>
    <p><b>Import file</b>: `validatorHouseNumber`</p>
</details>

<details>
    <summary>KRS</summary>
    <p>Requires 10 digits</p>
    <p><b>Class</b>: `js-validation-krs`</p>
    <p><b>Default message</b>: `Podaj poprawny numer KRS.`</p>
    <p><b>Import file</b>: `validatorKRS`</p>
</details>

<details>
    <summary>Max checked</summary>
    <p>Allows for only max checked items from form.</p>
    <p><b>Class</b>: `js-validation-max-checked`</p>
    <p><b>Default message</b>: `Proszę zaznaczyć maksymalnie ${maxChecked} pól.`</p>
    <p><b>Import file</b>: `validatorMaxChecked`</p>
    <p><b>Parameters</b>: Provide maximum amount of checked checkboxes in attribute `data-js-validation-max-checked`</p>
</details>

<details>
    <summary>Max words</summary>
    <p>Requires input to have less than max words. Words are seprated with whitespace</p>
    <p><b>Class</b>: `js-validation-max-words`</p>
    <p><b>Default message</b>: `Wprowadź maksymalnie ${max} wyrazów.`</p>
    <p><b>Import file</b>: `validatorMaxWords`</p>
</details>

<details>
    <summary>Max length</summary>
    <p>Overrides maxlength validator with custom message</p>
    <p><b>Default message</b>: `Wprowadź maksymalnie ${max} znaków.`</p>
    <p><b>Import file</b>: `validatorMaxlength`</p>
</details>

<details>
    <summary>Min checked</summary>
    <p>Allow for at least min checked items from form.</p>
    <p><b>Class</b>: `js-validation-min-checked`</p>
    <p><b>Default message</b>: `Proszę zaznaczyć przynajmniej ${minChecked} pól.`</p>
    <p><b>Import file</b>: `validatorMinChecked`</p>
    <p><b>Parameters</b>: Provide minimum of checked checkboxes in attribute `data-js-validation-min-checked`</p>
</details>

<details>
    <summary>Min words</summary>
    <p>Requires input to have at least min words. Words are seprated with whitespace</p>
    <p><b>Class</b>: `js-validation-min-words`</p>
    <p><b>Default message</b>: `Wprowadź przynajmniej ${min} wyrazów.`</p>
    <p><b>Import file</b>: `validatorMinWords`</p>
</details>

<details>
    <summary>Min length</summary>
    <p>Overrides minlength validator with custom message</p>
    <p><b>Default message</b>: `Wprowadź przynajmniej ${min} znaków.`</p>
    <p><b>Import file</b>: `validatorMinlength`</p>
</details>

<details>
    <summary>NIP</summary>
    <p>Checkes if number is correct NIP code</p>
    <p><b>Class</b>: `js-validation-nip`</p>
    <p><b>Default message</b>: `Proszę wpisać poprawny numer NIP`</p>
    <p><b>Import file</b>: `validatiorNIP`</p>
</details>

<details>
    <summary>Number between min and max</summary>
    <p>Checks if number is correct and if between min and max</p>
    <p><b>Default message</b>: `Proszę wpisać wartość pomiędzy ${min} i ${max}.`</p>
    <p><b>Import file</b>: `validatorNumberBetween`</p>
    <p><b>Parameters</b>: min value, max value</p>
</details>

<details>
    <summary>Number integer</summary>
    <p>Checks if number is integer</p>
    <p><b>Class</b>: `js-validation-number-integer`</p>
    <p><b>Default message</b>: `Proszę wpisać liczbę całkowitą.`</p>
    <p><b>Import file</b>: `validatorNumberInteger`</p>
</details>

<details>
    <summary>Number max</summary>
    <p>Checks if number is less or equals to max</p>
    <p><b>Default message</b>: `Proszę wpisać wartość mniejszą lub równą ${max}.`</p>
    <p><b>Import file</b>: `validatorNumberMax`</p>
    <p><b>Parameters</b>: max value</p>
</details>

<details>
    <summary>Number min</summary>
    <p>Checks if number is more or equal to min</p>
    <p><b>Default message</b>: `Proszę wpisać wartość większą lub równą ${min}.</p>
    <p><b>Import file</b>: `validatorNumberMin`</p>
    <p><b>Parameters</b>: min value</p>
</details>

<details>
    <summary>Number not negative</summary>
    <p>Checks if number is equals or more than 0</p>
    <p><b>Class</b>: `js-validation-number-not-negative`</p>
    <p><b>Default message</b>: `Proszę wpisać poprawną liczbę.`</p>
    <p><b>Import file</b>: `validatorNumberNotNegative`</p>
</details>

<details>
    <summary>Number positive</summary>
    <p>Checks if number is bigger than 0</p>
    <p><b>Class</b>: `js-validation-number-positive`</p>
    <p><b>Default message</b>: `Proszę wpisać poprawną liczbę.`</p>
    <p><b>Import file</b>: `validatorNumberPositive`</p>
</details>

<details>
    <summary>Number</summary>
    <p>Checks if value is correct number</p>
    <p><b>Class</b>: `js-validation-number`</p>
    <p><b>Default message</b>: `Proszę wpisać poprawną liczbę.`</p>
    <p><b>Import file</b>: `validatorNumber`</p>
</details>

<details>
    <summary>PESEL</summary>
    <p>Checks if value is correct PESEL code</p>
    <p><b>Class</b>: `js-validation-pesel`</p>
    <p><b>Default message</b>: `Proszę wpisać poprawny numer PESEL`</p>
    <p><b>Import file</b>: `validatorPESEL`</p>
</details>

<details>
    <summary>Phone</summary>
    <p>Checks if value is correct phone number</p>
    <p><b>Class</b>: `js-validation-phone`</p>
    <p><b>Default message</b>: `Podaj poprawny numer telefonu.`</p>
    <p><b>Import file</b>: `validatorPhone`
</details>

<details>
    <summary>Postal code</summary>
    <p>Checks if value is in polish postal format</p>
    <p><b>Class</b>: `js-validation-postal-code`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie kod pocztowy.`</p>
    <p><b>Import file</b>: `validatorPostalCode`</p>
</details>

<details>
    <summary>Range checked</summary>
    <p>Checks if checkboxes number between min and max was checked in form</p>
    <p><b>Class</b>: `js-validation-range-checked`</p>
    <p><b>Default message</b>: `Proszę zaznaczyć od ${min} do ${max} pól.`</p>
    <p><b>Import file</b>: `validatorRangeChecked`</p>
    <p><b>Parameters</b>: min checked amount in `data-js-validation-min-checked` and max checked amount in `data-js-validation-max-checked`</p>
</details>

<details>
    <summary>Range length</summary>
    <p>Overrides message for length check of input between min and max</p>
    <p><b>Default message</b>: `Wprowadź od ${min} do ${max} znaków.`</p>
    <p><b>Import file</b>: `validatorRangeLength`</p>
</details>

<details>
    <summary>Range words</summary>
    <p>Checks if words count is between min and max</p>
    <p><b>Default message</b>: `Wprowadź od ${min} do ${max} wyrazów.`</p>
    <p><b>Import file</b>: `validatorRangeWords`</p>
    <p><b>Parameters</b>: min amount, max amount</p>
</details>

<details>
    <summary>REGON</summary>
    <p>Checks if value is correct REGON code</p>
    <p><b>Class</b>: `js-validation-regon`</p>
    <p><b>Default message</b>: `Podaj poprawny REGON.`</p>
    <p><b>Import file</b>: `validatorREGON`</p>
</details>

<details>
    <summary>Repeat email</summary>
    <p>Checks if two fields represent same email address</p>
    <p><b>Default message</b>: `Adresy email się nie zgadzają.`</p>
    <p><b>Import file</b>: `validatorRepeatEmail`</p>
    <p><b>Parameters</b>: jQuery element pointing other email field</p>
</details>

<details>
    <summary>Repeat field</summary>
    <p>Checks if two fields have the exact same values</p>
    <p><b>Default message</b>: `Pola się nie zgadzają.`</p>
    <p><b>Import file</b>: `validatorRepeatField`</p>
    <p><b>Parameters</b>: jQuery element pointing other field</p>
</details>

<details>
    <summary>Require from group</summary>
    <p>Checks if at least min amount of field was filled from group</p>
    <p><b>Default message</b>: `Proszę wypełnić przynajmniej ${min} pól z grupy.`</p>
    <p><b>Import file</b>: `validatorRequireFromGroup`</p>
    <p><b>Parameters</b>: amount of fields from group, fields identifier</p>
</details>

<details>
    <summary>Street</summary>
    <p>Checks if value is correct street name</p>
    <p><b>Class</b>: `js-validation-street`</p>
    <p><b>Default message</b>: `Wprowadź poprawnie nazwę ulicy.`</p>
    <p><b>Import file</b>: `validatorStreet`</p>
</details>

<details>
    <summary>URL</summary>
    <p>Overrider url validator message</p>
    <p><b>Default message</b>: `Wprowadź poprawny link.`</p>
    <p><b>Import file</b>: `validatorURL`</p>
</details>
