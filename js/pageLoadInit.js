//This should be loaded before jquery mobile js in your page
//jquery code in here only please

$(document).bind("mobileinit", function(){
  //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.mobile.defaultPageTransition = 'pop';
  $.mobile.touchOverflowEnabled = true;
});

//use this to do script as the #page is loaded
$('#mainPage').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.htlm footer
  //alert('page show');

  //first vla in array, Jan is xaxis title - If use same one twice data is plotted against it no
  //  as a new point in sequence
  var line1Data = [['Jan', 12500],['Feb',55000],['Mar',70000],['Apr',75000],['May',90000],['Jun',200000],['Jul', 125000],['Aug',55000],['Sep',70000],['Oct',75000],['Nov',90000],['Dec',200000]];

  $.jqplot('chartdiv',  [line1Data],
    {
            title:'Sales',
            seriesDefaults: {
              showMarker:false,
              pointLabels: { show:true }
            },
          axesDefaults: {
              tickRenderer: $.jqplot.CanvasAxisTickRenderer
          },
          axes: {
            xaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              //ticks: ['Jan','Feb','Mar'],
              //dont know what this does -> numberTicks: 12,
              tickOptions: {
                    angle: -45,      //tilt with -30, -45 etc
                    fontSize: '8pt'
              }
            },
            yaxis: {
              min: 0
            }
          },
        cursor:{
            show: false,
            zoom:true,
            showTooltip:false
          },
          highlighter: {
            show: true,
            sizeAdjust: 7.5
          }
            /*,
              axes:{
                xaxis:{
                  label:'Months'
                },
                yaxis:{
                  label:'Value'
                }
              }
              */
    }
  );


    var arr = [[11, 123, 1236, "Acura"], [45, 92, 1067, "Alfa Romeo"],
    [24, 104, 1176, "AM General"], [50, 23, 610, "Aston Martin Lagonda"],
    [18, 17, 539, "Audi"], [7, 89, 864, "BMW"], [2, 13, 1026, "Bugatti"]];

    $.jqplot('chartBubble',[arr],{
        title: 'Bubble Chart with Gradient Fills',
        seriesDefaults:{
            renderer: $.jqplot.BubbleRenderer,
            rendererOptions: {
                bubbleGradients: true
            },
            shadow: true
        }
    });


});




