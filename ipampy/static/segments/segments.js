// Fetch Segments Index
function getSegments() {
    $("#segments-table").dataTable().fnDestroy();
    $("#segments-table-tbody").html("");

    $.ajax({
        url: "/api/segments/?format=json",
        type: "GET",
    })
    .done(function(result) {
        for(x in result) {
            $("#segments-table-tbody").append(' \
                <tr data-id="'+result[x].id+'"> \
                    <td>'+result[x].name+'</td> \
                    <td>'+result[x].description+'</td> \
                    <td>'+result[x].parent+'</td> \
                    <td class="text-right"> \
                        <a href="#" class="edit-segment" alt="Edit SEGMENT"><i class="fa fa-edit green"></i></a> \
                        <a href="#" class="del-segment" alt="Delete SEGMENT"><i class="fa fa-trash-o red"></i></a> \
                    </td> \
                </tr>'
            );
        }

        $("#segments-table").dataTable({"aoColumnDefs": [{'bSortable': false, 'aTargets': [3]},{'bSearchable': false, 'aTargets': [3]}], "aaSorting": [[0, 'asc']]});
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getSegments(): " + textStatus);
        $("#segments-table-tbody").append('<tr class="has-error"><td colspan=4><em>There was an error fetching the segments index.</em></td></tr>');
    });
}

// Fetch Segment Detail
function getSegment(segment_id) {
    if(segment_id !== parseInt(segment_id, 10)) {
        console.log("Invalid Segment ID passed to getSegment().");
        return False;
    }

    $.ajax({
        url: "/api/segments/"+segment_id+"/?format=json",
        type: "GET",
    })
    .done(function(result) {
        $("#set-segment-form #segment_id").val(segment_id);
        $("#set-segment-form #id_number").val(result["number"]);
        $("#set-segment-form #id_name").val(result["name"]);
        $("#set-segment-form #id_description").val(result["description"]);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getSegment(" + segment_id + "): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error fetching the Segment details.</div>');
    });
}

// Delete Segment
function deleteSegment() {
    var segment_id = $("#del-segment-form #segment_id").val();

    $.ajax({
        url: "/api/segments/"+segment_id+"/?format=json",
        type: "DELETE",
    })
    .done(function(result) {
        console.log("Segment " + segment_id + " deleted successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Segment deleted successfully.</div>');
        getSegments();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to delete segment:" + segment_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to delete segment.</div>');
    });

    $('.modal-alert').fadeOut();
}

// Create or Update Segment
function setSegment() {
    var segment_id = $("#set-segment-form #segment_id").val();
    var http_verb = "POST";
    var http_url = "/api/segments/";

    if(segment_id > 0) {
        http_verb = "PUT";
        http_url += segment_id + "/";
    }

    $.ajax({
        url: http_url,
        type: http_verb,
        data: $("#set-segment-form").serialize(),
    })
    .done(function(result) {
        console.log("Segment " + segment_id + " updated successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Segment updated successfully.</div>');
        getSegments();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to update segment:" + segment_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to update segment.</div>');

        $.each(jqXHR["responseJSON"], function(key, value) {
            $("#set-segment-form #id_"+key).closest('tr').addClass("has-error");
            $("#set-segment-form #"+key+"-help").html(value);
        });
    });
}

function resetForm(name) {
    $(".modal-alert").html("");
    $("#"+name+"-form").trigger('reset');
    $("#"+name+"-form #segment_id").val("0");

    $("#"+name+"-form-table tr").each(function() {
        $(this).removeClass('has-error');
        $('span', this).html("");
    });

    $("#"+name+"-modal").modal('show');
}