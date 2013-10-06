var data = [
    /* Reduced data set */
    ["Trident", "Internet Explorer 4.0", "Win 95+", 4, "X"],
    ["Trident", "Internet Explorer 5.0", "Win 95+", 5, "C"],
    ["Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A"],
    ["Trident", "Internet Explorer 6.0", "Win 98+", 6, "A"],
    ["Trident", "Internet Explorer 7.0", "Win XP SP2+", 7, "A"],
    ["Gecko", "Firefox 1.5", "Win 98+ / OSX.2+", 1.8, "A"],
    ["Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A"],
    ["Gecko", "Firefox 3", "Win 2k+ / OSX.3+", 1.9, "A"],
    ["Webkit", "Safari 1.2", "OSX.3", 125.5, "A"],
    ["Webkit", "Safari 1.3", "OSX.3", 312.8, "A"],
    ["Webkit", "Safari 2.0", "OSX.4+", 419.3, "A"],
    ["Webkit", "Safari 3.0", "OSX.4+", 522.1, "A"]
];
var columns = [{
    "sTitle": "Engine"
}, {
    "sTitle": "Browser"
}, {
    "sTitle": "Platform"
}, {
    "sTitle": "Version",
    "sClass": "center"
}, {
    "sTitle": "Grade",
    "sClass": "center"
}];


/* Formating function for row details */


$(document).ready(function () {
    $('#drillDown').html(
        '<table cellpadding="0" cellspacing="0" border="0" ' +
        'class="datatable table table-striped table-bordered table-hover table-condensed" id="example"></table>');
    var dTable = $('#example').dataTable({
        "oTableTools": {
            "aButtons": [
                "print", {
                    "sExtends": "collection",
                    "sButtonText": "Save",
                    "aButtons": ["csv", "xls", "pdf"]
                }
            ],
        },
        "sDom": 'T<"clear">lfrtip',
        "sPaginationType": "bs_four_button",
        "aaData": data,
        "aoColumns": columns
    });
    $('.datatable').each(function () {
        var datatable = $(this);
        // SEARCH - Add the placeholder for Search and Turn this into in-line form control
        var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
        search_input.attr('placeholder', 'Search');
        search_input.addClass('form-control input-sm');
        // LENGTH - Inline-Form control
        var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
        length_sel.addClass('form-control input-sm');
    });


    /*
     * Insert a 'details' column to the table
     */
    var nCloneTh = document.createElement('th');
    var nCloneTd = document.createElement('td');
    nCloneTh.innerHTML= 'More'
    nCloneTd.innerHTML = '<i class="icon-expand-alt" data-toggle="modal" href="#myModal"></i>';
    nCloneTd.className = "text-center";

    $('#example thead tr').each(function () {
        this.insertBefore(nCloneTh, this.childNodes[0]);
    });

    $('#example tbody tr').each(function () {
        this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
    });


    $('#example tbody td i').live('click', function () {
        var nTr = this.parentNode.parentNode;
        fnFormatDetails(dTable, nTr)
    });
});


function fnFormatDetails(oTable, nTr) {
    var aData = oTable.fnGetData(nTr);
    $('#modalTitle').text(aData[0]);
    
    var sOut = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    sOut += '<tr><td>Rendering engine:</td><td>' + aData[1] + ' ' + aData[4] + '</td></tr>';
    sOut += '<tr><td>Link to source:</td><td>Could provide a link here</td></tr>';
    sOut += '<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>';
    sOut += '</table>';

    $('#modalBody').html(sOut);
}