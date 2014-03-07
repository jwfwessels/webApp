$(function() {
    // Handler for .ready() called.
    var app = {};

    //--------------
    // Models
    //--------------

    app.Day = Backbone.Model.extend({
        defaults: {
            name: 'day#'
        }
    });
    //--------------
    // Collections
    //--------------

    app.DayList = Backbone.Collection.extend({
        model: app.Day,
        initialize: function() {
            this.on('all', function(eventName) {
                console.log('DayView: ' + eventName);
            });
        },
        localStorage: new Store("backbone-Calendar")
    });

    app.dayList = new app.DayList();

    //--------------
    // Views
    //--------------

    app.DayView = Backbone.View.extend({
        tagName: 'div',
        className: 'col-xs-1',
        template: _.template($('#day-template').html()),
        initialize: function() {
            this.on('all', function(eventName) {
                console.log('DayView: ' + eventName);
            });
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    app.CalanderView = Backbone.View.extend({
        el: '#calendar-view',
        // tagName: 'div',
        //template: _.template($('#calendar-template').html()),
        initialize: function() {
            this.on('all', function(eventName) {
                console.log('CalanderView: ' + eventName);
            });
            app.dayList.on('add', this.addAll, this);
            app.dayList.on('reset', this.addAll, this);
            app.dayList.fetch();
            //TODO: fectch storage
        },
        addOne: function(day) {
            var view = new app.DayView({
                model: day
            });
            $('#calendar-view').append(view.render().el);
        },
        addAll: function() {
            this.$el.empty();
/*            for (var i = 0; i < app.dayList.length; i++) {
                this.addOne.call(this, app.dayList[i], i, app.dayList);
                // this.addOne(app.dayList[i]);
            }*/
            app.dayList.each(this.addOne, this);
        }
    });

    app.calanderView = new app.CalanderView();

    Mocks.generateBookings(app.dayList, Utils.getDaysInMonth(new Date()));
    app.calanderView.addAll();
    //TODO: call mock.js generateBookings(CalanderListViewObj, x);
});
