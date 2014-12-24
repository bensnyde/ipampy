// Fetch Vlans Index
function getVlans() {
    $("#vlans-table").dataTable().fnDestroy();
    $("#vlans-table-tbody").html("");

    $.ajax({
        url: "/api/vlans/?format=json",
        type: "GET",
    })
    .done(function(result) {
        for(x in result) {
            $("#vlans-table-tbody").append(' \
                <tr data-id="'+result[x].id+'"> \
                    <td>'+result[x].number+'</td> \
                    <td>'+result[x].name+'</td> \
                    <td>'+result[x].description+'</td> \
                    <td class="text-right"> \
                        <a href="#" class="edit-vlan" alt="Edit VLAN"><i class="fa fa-edit green"></i></a> \
                        <a href="#" class="del-vlan" alt="Delete VLAN"><i class="fa fa-trash-o red"></i></a> \
                    </td> \
                </tr>'
            );
        }

        $("#vlans-table").dataTable({"aoColumnDefs": [{'bSortable': false, 'aTargets': [3]},{'bSearchable': false, 'aTargets': [3]}], "aaSorting": [[0, 'asc']]});
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getVlans(): " + textStatus);
        $("#vlans-table-tbody").append('<tr class="has-error"><td colspan=4><em>There was an error fetching the vlans index.</em></td></tr>');
    });
}

// Fetch Vlan Detail
function getVlan(vlan_id) {
    if(vlan_id !== parseInt(vlan_id, 10)) {
        console.log("Invalid Vlan ID passed to getVlan().");
        return False;
    }

    $.ajax({
        url: "/api/vlans/"+vlan_id+"/?format=json",
        type: "GET",
    })
    .done(function(result) {
        $("#set-vlan-form #vlan_id").val(vlan_id);
        $("#set-vlan-form #id_number").val(result["number"]);
        $("#set-vlan-form #id_name").val(result["name"]);
        $("#set-vlan-form #id_description").val(result["description"]);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getVlan(" + vlan_id + "): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error fetching the Vlan details.</div>');
    });
}

// Delete Vlan
function deleteVlan() {
    var vlan_id = $("#del-vlan-form #vlan_id").val();

    $.ajax({
        url: "/api/vlans/"+vlan_id+"/?format=json",
        type: "DELETE",
    })
    .done(function(result) {
        console.log("Vlan " + vlan_id + " deleted successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Vlan deleted successfully.</div>');
        getVlans();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to delete vlan:" + vlan_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to delete vlan.</div>');
    });

    $('.modal-alert').fadeOut();
}

// Create or Update Vlan
function setVlan() {
    var vlan_id = $("#set-vlan-form #vlan_id").val();
    var http_verb = "POST";
    var http_url = "/api/vlans/";

    if(vlan_id > 0) {
        http_verb = "PUT";
        http_url += vlan_id + "/";
    }

    $.ajax({
        url: http_url,
        type: http_verb,
        data: $("#set-vlan-form").serialize(),
    })
    .done(function(result) {
        console.log("Vlan " + vlan_id + " updated successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Vlan updated successfully.</div>');
        getVlans();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to update vlan:" + vlan_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to update vlan.</div>');

        $.each(jqXHR["responseJSON"], function(key, value) {
            $("#set-vlan-form #id_"+key).closest('tr').addClass("has-error");
            $("#set-vlan-form #"+key+"-help").html(value);
        });
    });
}

function resetForm(name) {
    $(".modal-alert").html("");
    $("#"+name+"-form").trigger('reset');
    $("#"+name+"-form #"+name+"_id").val("0");

    $("#"+name+"-form-table tr").each(function() {
        $(this).removeClass('has-error');
        $('span', this).html("");
    });

    $("#"+name+"-modal").modal('show');
}