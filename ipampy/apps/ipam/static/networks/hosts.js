var NID; // Network ID
var networks_index_uri; // Networks Index URL

function getSplitOptions() {
    console.log(NID);
    $.ajax({
        url: "/api/networks/"+NID+"/get_split_options/?format=json",
        type: "GET",
    })
    .done(function(result) {
        for(x in result) {
            $("#split-network-form #id_new_cidr").append('<OPTION value="'+result[x].prefix+'">'+result[x].numnets+' x /'+result[x].prefix+' ('+result[x].numnets+' x '+result[x].numhosts+' hosts)</OPTION>');
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getSplitOptions("+NID+"): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error fetching the split options.</div>');
    });
}

// Split Network
function splitNetwork() {
    $.ajax({
        url: "/api/networks/"+NID+"/split/?format=json",
        type: "POST",
        data: $("#split-network-form").serialize(),
    })
    .done(function(result) {
        console.log("Network "+NID+" split successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Network split successfully.</div>');
        setTimeout("window.location="+networks_index_uri,500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to splitNetwork("+NID+"): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error splitting the Network.</div>');
    });
}

// Truncate Network
function truncateNetwork() {
    $.ajax({
        url: "/api/networks/"+NID+"/truncate/?format=json",
        type: "POST",
    })
    .done(function(result) {
        console.log("Network "+NID+" truncated successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Network truncated successfully.</div>');
        getHosts();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to truncateNetwork("+NID+"): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error truncating the Network.</div>');
    });
}

// Resize Network
function resizeNetwork() {
    $.ajax({
        url: "/api/networks/"+NID+"/resize/?format=json",
        type: "POST",
        data: $("#resize-network-form").serialize(),
    })
    .done(function(result) {
        console.log("Network "+NID+" resized successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Network resized successfully.</div>');
        getNetwork();
        getNetworkSummary();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to resizeNetwork("+NID+"): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error resizing the Network.</div>');
    });
}

// Fetch Hosts Index
function getHosts() {
    $("#hosts-table").dataTable().fnDestroy();
    $("#hosts-table-tbody").html("");

    $.ajax({
        url: "/api/hosts/?format=json&network="+NID,
        type: "GET",
    })
    .done(function(result) {
        for(x in result) {
            $("#hosts-table-tbody").append(' \
                <tr data-id="'+result[x].id+'"> \
                    <td>'+result[x].address+'</td> \
                    <td>'+result[x].network_address+'</td> \
                    <td>'+result[x].type+'</td> \
                    <td>'+result[x].mac_address+'</td> \
                    <td>'+result[x].description+'</td> \
                    <td class="text-right"> \
                        <a href="#" class="edit-host" alt="Edit Host"><icon class="fa fa-edit green"></icon></a> \
                        <a href="#" class="show-del-host-modal" alt="Delete Host"><icon class="fa fa-trash-o red"></icon></a> \
                    </td> \
                </tr>'
            );
        }

         $("#hosts-table").dataTable({"aoColumnDefs": [{'bSortable': false, 'aTargets': [5]},{'bSearchable': false, 'aTargets': [5]}], "aaSorting": [[0, 'asc']]});
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getHosts(): " + textStatus);
        $("#hosts-table-tbody").append('<tr class="has-error"><td colspan=6><em>There was an error fetching the Hosts index.</em></td></tr>');
    });
}

// Fetch Network Summary
function getNetworkSummary() {
    $("#network-description-table").html('');

    $.ajax({
        url: "/api/networks/"+NID+"/describe/?format=json",
        type: "GET",
    })
    .done(function(result) {
        $.each(result, function(x,y) {
            $("#network-description-table").append("<tr><td>"+x+"</td><td>"+y+"</td></tr>");
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getNetworkSummary("+NID+"): " + textStatus);
    });
}

// Fetch Host Detail
function getHost(host_id) {
    if(host_id !== parseInt(host_id, 10)) {
        console.log("Invalid Host ID passed to getHost().");
        return False;
    }

    $.ajax({
        url: "/api/hosts/"+host_id+"/?format=json",
        type: "GET",
    })
    .done(function(result) {
        $("#set-host-form #host_id").val(host_id);
        $("#set-host-form #id_address").val(result["address"]);
        $("#set-host-form #id_description").val(result["description"]);
        $("#set-host-form #id_mac_address").val(result["mac_address"]);
        $("#set-host-form #id_notes").val(result["notes"]);
        $("#set-host-form #id_type").val(result["type"]);
        $("#set-host-form #id_network").val(result["network"]);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getHost(" + host_id + "): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error fetching the Host details.</div>');
    });
}

// Create or update Host
function setHost() {
    var host_id = $("#set-host-form #host_id").val();
    console.log(host_id);
    var http_verb = "POST";
    var http_url = "/api/hosts/";

    if(host_id > 0) {
        http_verb = "PUT";
        http_url += host_id + "/";
    }

    $.ajax({
        url: http_url,
        type: http_verb,
        data: $("#set-host-form").serialize(),
    })
    .done(function(result) {
        console.log("Host " + host_id + " updated successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Host updated successfully.</div>');
        getHosts();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to update Host:" + host_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to update Host.</div>');

        $.each(jqXHR["responseJSON"], function(key, value) {
            $("#set-host-form #id_"+key).closest('tr').addClass("has-error");
            $("#set-host-form #"+key+"-help").html(value);
        });
    });
}

// Delete Host
function deleteHost() {
    var host_id = $("#del-host-form #host_id").val();

    $.ajax({
        url: "/api/hosts/"+host_id+"/?format=json",
        type: "DELETE",
    })
    .done(function(result) {
        console.log("Host " + host_id + " deleted successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Host deleted successfully.</div>');
        getHosts();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to delete Host:" + host_id + " " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to delete Host.</div>');
    });

    $('.modal-alert').fadeOut();
}

// Fetch Network Detail
function getNetwork() {
    $.ajax({
        url: "/api/networks/"+NID+"/?format=json",
        type: "GET",
    })
    .done(function(result) {
        $("#network-stats-table").html("");

        $.each(result, function(x,y) {
            $("#network-stats-table").append("<tr><td>"+x+"</td><td>"+y+"</td></tr>");
            $("#set-network-form #id_"+x).val(y);
        });

        $("#network-stats-table").append('<tr style="background-color: #f5f5f5"><td><label>Modify Network</label></td><td class="text-right"><select id="network-action-select" autocomplete="off"><OPTION>-</OPTION><OPTION>Resize</OPTION><OPTION>Split</OPTION><OPTION>Truncate</OPTION></select>&nbsp;&nbsp;&nbsp;<a href="#" class="select-network-action"><icon class="fa fa-arrow-circle-o-right green"></icon></a></td></tr>');
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to getNetwork("+NID+"): " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">There was an error fetching the Network details.</div>');
    });
}

// Delete Network
function deleteNetwork() {
    $.ajax({
        url: "/api/networks/"+NID+"/?format=json",
        type: "DELETE",
    })
    .done(function(result) {
        console.log("Network "+NID+" deleted successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Network deleted successfully.</div>');
        setTimeout("window.location="+networks_index_uri,500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to delete Network "+NID+": " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to delete Network.</div>');
    });

    $('.modal-alert').fadeOut();
}

// Create or update Network
function setNetwork() {
    $.ajax({
        url: "/api/networks/"+NID+"/?format=json",
        type: "PUT",
        data: $("#set-network-form").serialize(),
    })
    .done(function(result) {
        console.log("Network "+NID+" updated successfuly.");
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-success">Network updated successfully.</div>');
        resetForm("set-network");
        getNetwork();
        setTimeout("$('.modal.in').modal('hide')",500);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Failed to update Network "+NID+": " + textStatus);
        $('.modal-alert').fadeIn();
        $('.modal-alert').html('<div class="alert alert-danger">Failed to update Network.</div>');

        $.each(jqXHR["responseJSON"], function(key, value) {
            $("#set-network-form #id_"+key).closest('tr').addClass("has-error");
            $("#set-network-form #"+key+"-help").html(value);
        });
    });
}

function resetForm(name) {
    $(".modal-alert").html("");
    $("#"+name+"-form").trigger('reset');
    $("#"+name+"-form #host_id").val("0");
    $("#"+name+"-form #network_id").val("0");

    $("#"+name+"-form-table tr").each(function() {
        $(this).removeClass('has-error');
        $('span', this).html("");
    });

    $("#"+name+"-modal").modal('show');
}