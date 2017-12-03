// module.exports.capitals = function (str) {
// 	return str.toUpperCase();
// };
//
// Handlebars.registerHelper('link', function() {
// 	return "<a href='" + this.url + "'>" + this.body + "</a>";
//   })
//   var context = { posts: [{url: "/hello-world", body: "Hello World!"}] }
//   var source = "<ul>{{#posts}}<li>{{{link_to}}}</li>{{/posts}}</ul>"
//   var template = Handlebars.compile(source)
//   template(context)

$(function(){
    Handlebars.registerHelper('link', function(my_link) {

        var url = Handlebars.escapeExpression(my_link);
        var result = "<a href='" + url + "'></a>";
        console.log(result);

        return new Handlebars.SafeString(result);

    });
});
