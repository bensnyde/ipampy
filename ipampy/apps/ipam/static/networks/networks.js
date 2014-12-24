// Fetch Networks Index
function getNetworks() {
    $("#networks-list-table").dataTable().fnDestroy();
    $("#networks-list-tbody").html("");

    $.ajax({
        url: "/api/networks/?format=json",
        type: "GET",
    })
    .done(function(result) {
        for(x in result) {
            $("#networks-list-tbody").append(' \
                <tr data-id="'+result[x].id+'"> \
                    <td>'+result[x].address+'</td> \
                    <td>'+result[x].cidr+'</td> \
                    <td>'+result[x].segment_name+'</td> \
                    <td>'+result[x].parent+'</td> \
                    <td>'+result[x].vlan_name+'</td> \
                    <td>'+result[x].vrf_name+'</td> \
                    <td>'+result[x].owner+'</td> \
                    <td>'+result[x].description+'</td> \
                </tr>'
            );
        }

        $("#networks-list-table").dataTable({"aaSorting": [[0, 'asc']]});
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getNetworks(): " + textStatus);
        $("#networks-list-tbody").append('<tr class="has-error"><td colspan=8><em>There was an error fetching the networks index.</em></td></tr>');
    });
}

// Create Network
function setNetwork() {
    var network_id = $("#set-network-form #network_id").val();
    var http_verb = "POST";
    var http_url = "/api/networks/";

    if(network_id > 0) {
        http_verb = "PUT";
        http_url += network_id + "/";
    }

    $.ajax({
        url: http_url,
        type: http_verb,
        data: $("#set-network-form").serialize(),
    })
    .done(function(result) {
        console.log("Network " + network_id + " updated successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Network updated successfully.</div>');
        getNetworks();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to update Network:" + network_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to update Network.</div>');

        $.each(jqXHR["responseJSON"], function(key, value) {
            $("#set-network-form #id_"+key).closest('tr').addClass("has-error");
            $("#set-network-form #"+key+"-help").html(value);
        });
    });
}

function resetSetNetworkForm() {
    $('.modal-alert').html("");
    $("#set-network-form-table tr").each(function() {
        $(this).removeClass('has-error');
        $('span', this).html("");
    });

    $("#set-network-form").trigger('reset');
    $("#set-network-form #network_id").val("0");
    $("#set-network-form #id_address").attr("readonly", false);
    $("#set-network-form #id_cidr").attr("readonly", false);
    $("#set-network-modal").modal('show');
}