import libs.ipaddr as ip_network

def get_network_subnetting_options(network, cidr, new_prefix):
    try:
        network = ip_network.ip_network("%s/%s" % (network, cidr))

        counter = 0
        for x in network.subnet(new_prefix=new_prefix):
            numhosts = x.numhosts
            counter += 1

        return {
            'prefix': new_prefix,
            'numnets': counter,
            'numhosts': numhosts
        }
    except Exception as ex:
        return False

def describe_subnet(network, cidr):
    try:
        network = ip_network.ip_network("%s/%s" % (network, cidr))

        first = None
        for x in network.iterhosts():
            last = x.compressed
            if not first:
                first = x.compressed

        return {
            'prefix': network.prefixlen,
            'usable': "%s - %s" % (first, last),
            'version': network.version,
            'broadcast': network.broadcast_address.compressed,
            'network': network.network_address.compressed,
            'netmask': network.netmask.compressed,
            'hostmask': network.hostmask.compressed,
            'numhosts': network.numhosts
        }
    except Exception as ex:
        return False


def get_subnets(network, cidr, new_prefix):
    try:
        subnets = []
        network = ip_network.ip_network("%s/%s" % (network, cidr))
        for subnet in network.subnet(new_prefix=new_prefix):
            subnets.append(subnet.network_address.compressed)

        return subnets
    except Exception as ex:
        return str(ex)
        return False


def is_valid_networkaddress(address, cidr):
    try:
        net = ip_network.ip_network("%s/%s" % (address, cidr))
        if net.is_private:
            raise Exception("Private Network's not allowed.")
        if net.is_loopback:
            raise Exception("Loopback Network's not allowed.")
        if net.is_link_local:
            raise Exception("Link Local Network's not allowed.")
        if net.is_reserved:
            raise Exception("Reserved Network's not allowed.")
        if net.is_unspecified:
            raise Exception("Unspecified Network's not allowed.")
        if net.is_multicast:
            raise Exception("Multicast Network's not allowed.")

        return True
    except Exception as ex:
        return False


def is_ip_in_network(network, cidr, ipaddr):
    try:
        if ip_network.ip_address(ipaddr) in ip_network.ip_network("%s/%s" % (network, cidr)).iterhosts():
            return True
    except Exception as ex:
        return False