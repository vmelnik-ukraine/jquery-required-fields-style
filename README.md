# jQuery "Required Fields Style" plugin

This plugin watches the state of a required DOM elements and makes changes to their style.


## Usage

1) Add jquery.requiredFieldsStyle.1.0.min.js to your document (located at js folder)

2) Set styles observer using something like this

```javascript
$(function(){
    // init plugin to watch required fields in body element
    $('body').requiredFieldsStyle();
});
```

## Available options and methods

#### Options

styleClass - class which will be added to not completed required fields. Default value is arfa-required.

requiredSelectors - describe observeable elements. Can be string or array.
Default observeable elements is:
input[type=text][required=required]
input[type=email][required=required]
input[type=password][required=required]
textarea[required=required]

enableAndRun - flag that emit plugin and run all checks. Default value is true.

### Public methods

enable - enable observers

disable - disable observers

run - run all checks

### Examples

plugin initialization

```javascript
$('body').requiredFieldsStyle();

provide your own class, enable and run plugin

```javascript
$('body').requiredFieldsStyle({ styleClass: 'some-class-here' });
```

executing one of the public methods

```javascript
$('body').requiredFieldsStyle('disable');
```

## Requirements

jQuery
