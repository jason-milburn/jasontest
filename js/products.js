



  function prodSubmit()
  {
    //alert('submitted');    //do ajax call to get data from server
        var prodCode = $('#prodCode').val(); //document.forms['frmProduct'].elements['prodCode'].value;

        if (prodCode.length == 0)
        {
                alert('Please enter a product Code');
                return;
        }

        $.ajax(
        {
             type: 'POST',
             url: 'http://marpacs.drivecomputing.co.uk/products_ajax.php',
             //url: '/marpacs/products_ajax.php',
             cache: false,
            // contentType: "text/html",
             data: {'request':'GETPRODINFO','eanCode':prodCode},
             dataType: 'json',
             success: function(data)
                 {
                    if (data.errmsg == "" )
                    {
                        //  alert(data.prodDesc);
                        document.getElementById("productEntry").style.display = 'none';
                        document.getElementById("divBtnSubmit").style.display = 'none';
                        document.getElementById("divProdCode").innerHTML = "Code: " + data.prodCode;
                        document.getElementById("divProdDesc").innerHTML = data.prodDesc;
                        document.getElementById("divProdStock").innerHTML = "Stock Qty: " + data.stkTotal;
                        document.getElementById("productInfo").style.display = '';
                    }
                    else
                    {
                        alert(data.errmsg);
                        document.forms['frmProduct'].elements['prodCode'].value = "";
                        document.forms['frmProduct'].elements['prodCode'].focus();
                    }
                 },
             error: function(jqo, txt, err)
                {
                        alert(txt);
                }
          }
         );

  }
