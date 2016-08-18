## Dugun-Forms

### Build

- Install Dependencies

    `npm install && bower install`
    
- Run build function 

    `gulp build`
    

### Installation

- Add repository as dependency on your bower.json

  `"dugun-forms":"https://github.com/duguncom/dugun-forms.git#v1.x"`
  
-  Add `dugun.forms` to your application

  ```js
  angular.module('YourApp',
    [
        'dugun.forms'
    ]
  );
  ```
  
### Examples

#### Date-Range-Picker
```html
<input
        date-range-picker
        class="form-control date-picker opensleft"
        type="text"
        ng-model="dates"
        min="null"
        max="today"
        options="{ opens: 'left' }"
        placeholder="Tarih aralığı"
>
```
```js
$scope.dates = {
    startDate: moment().startOf('month'),
    endDate: moment()
};
```
