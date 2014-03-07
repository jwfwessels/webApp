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
        // localStorage: new Store("backbone-Calendar")
    });

    app.dayList = new app.DayList();

    //--------------
    // Views
    //--------------

    app.DayView = Backbone.View.extend({
        tagName: 'div',
        className: 'col-xs-1',
        template: _.template($('#day-template').html()),
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
            app.dayList.on('add', this.addAll, this);
            app.dayList.on('reset', this.addAll, this);
            //TODO: fectch storage
        },
        addOne: function(day) {
            var view = new app.DayView({
                model: day
            });
            $('#calendar-view').append(view.render().el);
        },
        addAll: function() {
            this.$('#calendar-view').html(''); //empty view
            app.dayList.each(this.addOne, this);
        }
    });

    app.calanderView = new app.CalanderView();

    Mocks.generateBookings(app.dayList, Utils.getDaysInMonth(new Date()));
    //TODO: call mock.js generateBookings(CalanderListViewObj, x);
});
