var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

// Write a function which processes the following data structure to insert an HTML table into a web page.
  // my idea was to create the code for the html table here on the javascript side and then add it to the
  // actual html table using the innerhtml method

var html_table = "<thead><th>First Name</th><th>Last Name</th><th>Home</th></thead>"
// we define the headers for our table here and dynamically create and populate table rows below
for (var i = 0; i < table_data.length; i++) {
  // checking to make sure that the table data is not null (i decided I didn't like having null printed
  // in the html table. it looked wrong to me)
  if(table_data[i]["first_name"]) {
    // added divs inside the td's. adding unique id's to each div allows for maximum flexibility
    // and fully style-able divs inside the table
    html_table += `<tr><td><div id=first_name${i}>` + table_data[i]["first_name"] + "</div></td>"
  } else {
    html_table += "<tr><td id='empty_column'><div></div></td>"
  }
  if(table_data[i]["last_name"]) {
    html_table += `<td><div id=last_name${i}>` + table_data[i]["last_name"] + "</div></td>"
  } else {
    html_table += "<td id='empty_column'><div></div></td>"
  }
  if(table_data[i]["home"]) {
    html_table += `<td><div id=home${i}>` + table_data[i]["home"] + "</div></td></tr>"
  } else {
    html_table += "<td id='empty_column'><div></div></td></tr>"
  }
}
