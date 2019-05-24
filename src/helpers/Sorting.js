import $ from "jquery";

const sortTable = (f,n) => {
  let rows = $('#content-table tbody  tr').get();

  const getVal = elm => {
    var v = $(elm).children('td').eq(n).text().toUpperCase();
    if($.isNumeric(v)){
      v = parseInt(v,10);
    }
    return v;
  }

  rows.sort(function(a, b) {

    var A = getVal(a);
    var B = getVal(b);

    if(A < B) {
      return -1*f;
    }
    if(A > B) {
      return 1*f;
    }
    return 0;
  });

 
  $.each(rows, function(index, row) {
    $('#content-table').children('tbody').append(row);
  });
}

export const sortByClick = () => {
  let flagPositive = 1;
  let flagDateAdded = 1;

  const fieldClick = (field, flag) => {
    let sel = $("#" + field);
    
    sel.click(function () {
      flag *= -1;
      let n = sel.prevAll().length;
      sortTable(flag, n);
    });
  }

  fieldClick("isPositive", flagPositive);
  fieldClick("dateAdded", flagDateAdded);
}