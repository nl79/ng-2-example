/**
 * Created by admin on 12/24/15.
 */
(function (app) {

  //Service
  function MonthService () {
    this.months = [
      'January',
      'February',
      'March',
      'April'
    ];

    this.get = function () {
      return this.months;
    }
  }

  app.AppComponent = ng.core.Component(
    {
      selector: 'my-app',
      directives: [ ng.common.NgFor],
      template: '<h1 #h (click)="onClick($event, h)">Angular 2 Example {{ date }}</h1>'
                + '<ul><li *ngFor="#item of months; #i=index">{{ item }} {{i}}</li></ul>',

      providers: [MonthService],
      appInjector: [MonthService]
    })
    .Class(
      {
        constructor: function () {
          this.date = new Date();
          this.months = new MonthService().get();
          console.log('months', this.months);

        },
        onClick: function(e, item) {
          console.log('clicked',arguments);
          console.log('angular', ng);
        }
      }
    );


})(window.app || (window.app = {}));


