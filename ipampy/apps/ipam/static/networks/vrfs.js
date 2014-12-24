// Fetch VRF Index
function getVrfs() {
    $("#vrfs-table").dataTable().fnDestroy();
    $("#vrfs-table-tbody").html("");

    $.ajax({
        url: "/api/vrfs/?format=json",
        type: "GET",
    })
    .done(function(result) {
        for(x in result) {
            $("#vrfs-table-tbody").append(' \
                <tr data-id="'+result[x].id+'"> \
                    <td>'+result[x].distinguisher+'</td> \
                    <td>'+result[x].name+'</td> \
                    <td>'+result[x].description+'</td> \
                    <td class="text-right"> \
                        <a href="#" class="edit-vrf" alt="Edit VRF"><i class="fa fa-edit green"></i></a> \
                        <a href="#" class="del-vrf" alt="Delete VRF"><i class="fa fa-trash-o red"></i></a> \
                    </td> \
                </tr>'
            );
        }

        $("#vrfs-table").dataTable({"aoColumnDefs": [{'bSortable': false, 'aTargets': [3]},{'bSearchable': false, 'aTargets': [3]}], "aaSorting": [[0, 'asc']]});
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getVrfs(): " + textStatus);
        $("#vrfs-table-tbody").append('<tr class="has-error"><td colspan=4><em>There was an error fetching the vrfs index.</em></td></tr>');
    });
}

// Fetch Vrf Detail
function getVrf(vrf_id) {
    if(vrf_id !== parseInt(vrf_id, 10)) {
        console.log("Invalid Vrf ID passed to getVrf().");
        return False;
    }

    $.ajax({
        url: "/api/vrfs/"+vrf_id+"/?format=json",
        type: "GET",
    })
    .done(function(result) {
        $("#set-vrf-form #vrf_id").val(vrf_id);
        $("#set-vrf-form #id_distinguisher").val(result["distinguisher"]);
        $("#set-vrf-form #id_name").val(result["name"]);
        $("#set-vrf-form #id_description").val(result["description"]);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getVrf(" + vrf_id + "): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error fetching the Vrf details.</div>');
    });
}

// Delete Vrf
function deleteVrf() {
    var vrf_id = $("#del-vrf-form #vrf_id").val();

    $.ajax({
        url: "/api/vrfs/"+vrf_id+"/?format=json",
        type: "DELETE",
        data: $("#del-vrf-form").serialize(),
    })
    .done(function(result) {
        console.log("Vrf " + vrf_id + " deleted successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Vrf deleted successfully.</div>');
        getVrfs();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to delete Vrf:" + vrf_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to delete Vrf.</div>');
    });

    $('.modal-alert').fadeOut();
}

// Create or update Vrf
function setVrf() {
    var vrf_id = $("#set-vrf-form #vrf_id").val();
    var http_verb = "POST";
    var http_url = "/api/vrfs/";

    if(vrf_id > 0) {
        http_verb = "PUT";
        http_url += vrf_id + "/";
    }

    $.ajax({
        url: http_url,
        type: http_verb,
        data: $("#set-vrf-form").serialize(),
    })
    .done(function(result) {
        console.log("Vrf " + vrf_id + " updated successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Vrf updated successfully.</div>');
        getVrfs();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to update vrf:" + vrf_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to update vrf.</div>');

        $.each(jqXHR["responseJSON"], function(key, value) {
            $("#set-vrf-form #id_"+key).closest('tr').addClass("has-error");
            $("#set-vrf-form #"+key+"-help").html(value);
        });
    });
}


function resetForm(name) {
    $(".modal-alert").html("");
    $("#"+name+"-form").trigger('reset');
    $("#"+name+"-form #vrf_id").val("0");

    $("#"+name+"-form-table tr").each(function() {
        $(this).removeClass('has-error');
        $('span', this).html("");
    });

    $("#"+name+"-modal").modal('show');
}