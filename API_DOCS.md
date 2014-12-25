## Groups
### Methods

#####**get** `/api/groups/{pk}/`
    _Group Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
</table>
#### Return Type
[GroupSerializer](#GroupSerializer)

#####**put** `/api/groups/{pk}/`
    _Group Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
    <tr>
        <td>permissions</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
</table>
#### Return Type
[GroupSerializer](#GroupSerializer)

#####**delete** `/api/groups/{pk}/`
    _Group Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
</table>
#### Return Type
[GroupSerializer](#GroupSerializer)

#####**patch** `/api/groups/{pk}/`
    _Group Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
    <tr>
        <td>permissions</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Group Resource  </p></td>
    </tr>
</table>
#### Return Type
[GroupSerializer](#GroupSerializer)

#####**get** `/api/groups/{pk}/history/`
    _Get Object Changelog_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Group Resource  </p> <p>Get Object Changelog</p></td>
    </tr>
</table>
#### Return Type
[GroupSerializer](#GroupSerializer)

### Models
##### <a name="GroupSerializer">GroupSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>id </td><td>Integer </td></tr><tr><td>name </td><td>String </td></tr><tr><td>permissions </td><td>field </td></tr>
</table>
##### <a name="WriteGroupSerializer">WriteGroupSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>name </td><td>String </td></tr><tr><td>permissions </td><td>field </td></tr>
</table>

## Users
### Methods

#####**get** `/api/users/{pk}/`
    _User Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
</table>
#### Return Type
[UserSerializer](#UserSerializer)

#####**put** `/api/users/{pk}/`
    _User Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>last_login</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>is_superuser</td>
        <td>Boolean</td>
        <td>optional</td>
        <td>Designates that this user has all permissions without explicitly assigning them.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>username</td>
        <td>String</td>
        <td>required</td>
        <td>Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>first_name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>last_name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>email</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>is_staff</td>
        <td>Boolean</td>
        <td>optional</td>
        <td>Designates whether the user can log into this admin site.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>is_active</td>
        <td>Boolean</td>
        <td>optional</td>
        <td>Designates whether this user should be treated as active. Unselect this instead of deleting accounts.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>date_joined</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>groups</td>
        <td>String</td>
        <td>required</td>
        <td>The groups this user belongs to. A user will get all permissions granted to each of his/her group.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>user_permissions</td>
        <td>String</td>
        <td>required</td>
        <td>Specific permissions for this user.</td>
        <td><p>User Resource  </p></td>
    </tr>
</table>
#### Return Type
[UserSerializer](#UserSerializer)

#####**delete** `/api/users/{pk}/`
    _User Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
</table>
#### Return Type
[UserSerializer](#UserSerializer)

#####**patch** `/api/users/{pk}/`
    _User Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>last_login</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>is_superuser</td>
        <td>Boolean</td>
        <td>optional</td>
        <td>Designates that this user has all permissions without explicitly assigning them.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>username</td>
        <td>String</td>
        <td>optional</td>
        <td>Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>first_name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>last_name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>email</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>is_staff</td>
        <td>Boolean</td>
        <td>optional</td>
        <td>Designates whether the user can log into this admin site.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>is_active</td>
        <td>Boolean</td>
        <td>optional</td>
        <td>Designates whether this user should be treated as active. Unselect this instead of deleting accounts.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>date_joined</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>groups</td>
        <td>String</td>
        <td>optional</td>
        <td>The groups this user belongs to. A user will get all permissions granted to each of his/her group.</td>
        <td><p>User Resource  </p></td>
    </tr>
    <tr>
        <td>user_permissions</td>
        <td>String</td>
        <td>optional</td>
        <td>Specific permissions for this user.</td>
        <td><p>User Resource  </p></td>
    </tr>
</table>
#### Return Type
[UserSerializer](#UserSerializer)

#####**get** `/api/users/{pk}/history/`
    _Get Object Changelog_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>User Resource  </p> <p>Get Object Changelog</p></td>
    </tr>
</table>
#### Return Type
[UserSerializer](#UserSerializer)

### Models
##### <a name="TokenSerializer">TokenSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>key </td><td>String </td></tr>
</table>
##### <a name="UserSerializer">UserSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>id </td><td>Integer </td></tr><tr><td>token </td><td>TokenSerializer </td></tr><tr><td>last_login </td><td>datetime </td></tr><tr><td>is_superuser </td><td>Boolean Designates that this user has all permissions without explicitly assigning them.</td></tr><tr><td>username </td><td>String Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.</td></tr><tr><td>first_name </td><td>String </td></tr><tr><td>last_name </td><td>String </td></tr><tr><td>email </td><td>String </td></tr><tr><td>is_staff </td><td>Boolean Designates whether the user can log into this admin site.</td></tr><tr><td>is_active </td><td>Boolean Designates whether this user should be treated as active. Unselect this instead of deleting accounts.</td></tr><tr><td>date_joined </td><td>datetime </td></tr><tr><td>groups </td><td>field The groups this user belongs to. A user will get all permissions granted to each of his/her group.</td></tr><tr><td>user_permissions </td><td>field Specific permissions for this user.</td></tr>
</table>
##### <a name="WriteUserSerializer">WriteUserSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>last_login </td><td>datetime </td></tr><tr><td>is_superuser </td><td>Boolean Designates that this user has all permissions without explicitly assigning them.</td></tr><tr><td>username </td><td>String Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.</td></tr><tr><td>first_name </td><td>String </td></tr><tr><td>last_name </td><td>String </td></tr><tr><td>email </td><td>String </td></tr><tr><td>is_staff </td><td>Boolean Designates whether the user can log into this admin site.</td></tr><tr><td>is_active </td><td>Boolean Designates whether this user should be treated as active. Unselect this instead of deleting accounts.</td></tr><tr><td>date_joined </td><td>datetime </td></tr><tr><td>groups </td><td>field The groups this user belongs to. A user will get all permissions granted to each of his/her group.</td></tr><tr><td>user_permissions </td><td>field Specific permissions for this user.</td></tr>
</table>
##### <a name="WriteTokenSerializer">WriteTokenSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>key </td><td>String </td></tr>
</table>

## Segments
### Methods

#####**get** `/api/segments/{pk}/`
    _Segment Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
</table>
#### Return Type
[SegmentSerializer](#SegmentSerializer)

#####**put** `/api/segments/{pk}/`
    _Segment Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
    <tr>
        <td>parent</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
</table>
#### Return Type
[SegmentSerializer](#SegmentSerializer)

#####**delete** `/api/segments/{pk}/`
    _Segment Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
</table>
#### Return Type
[SegmentSerializer](#SegmentSerializer)

#####**patch** `/api/segments/{pk}/`
    _Segment Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
    <tr>
        <td>parent</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Segment Resource  </p></td>
    </tr>
</table>
#### Return Type
[SegmentSerializer](#SegmentSerializer)

#####**get** `/api/segments/{pk}/history/`
    _Get Object Changelog_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Segment Resource  </p> <p>Get Object Changelog</p></td>
    </tr>
</table>
#### Return Type
[SegmentSerializer](#SegmentSerializer)

### Models
##### <a name="WriteSegmentSerializer">WriteSegmentSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>name </td><td>String </td></tr><tr><td>description </td><td>String </td></tr><tr><td>parent </td><td>field </td></tr>
</table>
##### <a name="SegmentSerializer">SegmentSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>id </td><td>Integer </td></tr><tr><td>name </td><td>String </td></tr><tr><td>description </td><td>String </td></tr><tr><td>parent </td><td>field </td></tr>
</table>

## Networks
### Methods

#####**get** `/api/networks/{pk}/`
    _Network Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**put** `/api/networks/{pk}/`
    _Network Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>cidr</td>
        <td>Integer</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>parent</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>vlan</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>vrf</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>owner</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>segment</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**delete** `/api/networks/{pk}/`
    _Network Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**patch** `/api/networks/{pk}/`
    _Network Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>cidr</td>
        <td>Integer</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>parent</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>vlan</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>vrf</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>owner</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
    <tr>
        <td>segment</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**get** `/api/networks/{pk}/describe/`
    _Describe Subnet_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Describe Subnet</p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**get** `/api/networks/{pk}/get_split_options/`
    _Get Subnet Split Options_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Get Subnet Split Options</p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**get** `/api/networks/{pk}/history/`
    _Get Object Changelog_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Get Object Changelog</p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**post** `/api/networks/{pk}/resize/`
    _Resize Subnet_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>cidr</td>
        <td>Integer</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>parent</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>vlan</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>vrf</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>owner</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
    <tr>
        <td>segment</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Resize Subnet</p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**post** `/api/networks/{pk}/split/`
    _Split Subnet_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>cidr</td>
        <td>Integer</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>parent</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>vlan</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>vrf</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>owner</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
    <tr>
        <td>segment</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Split Subnet</p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)

#####**post** `/api/networks/{pk}/truncate/`
    _Truncate Subnet_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>cidr</td>
        <td>Integer</td>
        <td>required</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>parent</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>vlan</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>vrf</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>owner</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
    <tr>
        <td>segment</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Network Resource  </p> <p>Truncate Subnet</p></td>
    </tr>
</table>
#### Return Type
[NetworkSerializer](#NetworkSerializer)


### Models
##### <a name="WriteNetworkSerializer">WriteNetworkSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>address </td><td>field </td></tr><tr><td>cidr </td><td>Integer </td></tr><tr><td>description </td><td>String </td></tr><tr><td>parent </td><td>field </td></tr><tr><td>vlan </td><td>field </td></tr><tr><td>vrf </td><td>field </td></tr><tr><td>owner </td><td>String </td></tr><tr><td>segment </td><td>field </td></tr>
</table>
##### <a name="NetworkSerializer">NetworkSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>id </td><td>Integer </td></tr><tr><td>address </td><td>field </td></tr><tr><td>cidr </td><td>Integer </td></tr><tr><td>description </td><td>String </td></tr><tr><td>parent </td><td>field </td></tr><tr><td>vlan </td><td>field </td></tr><tr><td>vrf </td><td>field </td></tr><tr><td>owner </td><td>String </td></tr><tr><td>segment </td><td>field </td></tr><tr><td>segment_name </td><td>field </td></tr><tr><td>vrf_name </td><td>field </td></tr><tr><td>vlan_name </td><td>field </td></tr>
</table>

## Hosts
### Methods

#####**get** `/api/hosts/{pk}/`
    _Host Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
</table>
#### Return Type
[HostSerializer](#HostSerializer)

#####**put** `/api/hosts/{pk}/`
    _Host Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>network</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>mac_address</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>notes</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>type</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
</table>
#### Return Type
[HostSerializer](#HostSerializer)

#####**delete** `/api/hosts/{pk}/`
    _Host Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
</table>
#### Return Type
[HostSerializer](#HostSerializer)

#####**patch** `/api/hosts/{pk}/`
    _Host Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>network</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>mac_address</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>notes</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
    <tr>
        <td>type</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Host Resource  </p></td>
    </tr>
</table>
#### Return Type
[HostSerializer](#HostSerializer)

#####**get** `/api/hosts/{pk}/history/`
    _Get Object Changelog_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Host Resource  </p> <p>Get Object Changelog</p></td>
    </tr>
</table>
#### Return Type
[HostSerializer](#HostSerializer)


### Models
##### <a name="HostSerializer">HostSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>id </td><td>Integer </td></tr><tr><td>address </td><td>field </td></tr><tr><td>description </td><td>String </td></tr><tr><td>network </td><td>field </td></tr><tr><td>mac_address </td><td>String </td></tr><tr><td>notes </td><td>String </td></tr><tr><td>type </td><td>choice </td></tr><tr><td>network_address </td><td>field </td></tr>
</table>
##### <a name="WriteHostSerializer">WriteHostSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>address </td><td>field </td></tr><tr><td>description </td><td>String </td></tr><tr><td>network </td><td>field </td></tr><tr><td>mac_address </td><td>String </td></tr><tr><td>notes </td><td>String </td></tr><tr><td>type </td><td>choice </td></tr>
</table>

## Vlans
### Methods

#####**get** `/api/vlans/{pk}/`
    _VLAN Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
</table>
#### Return Type
[VlanSerializer](#VlanSerializer)

#####**put** `/api/vlans/{pk}/`
    _VLAN Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
    <tr>
        <td>number</td>
        <td>Integer</td>
        <td>required</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
</table>
#### Return Type
[VlanSerializer](#VlanSerializer)

#####**delete** `/api/vlans/{pk}/`
    _VLAN Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
</table>
#### Return Type
[VlanSerializer](#VlanSerializer)

#####**patch** `/api/vlans/{pk}/`
    _VLAN Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
    <tr>
        <td>number</td>
        <td>Integer</td>
        <td>optional</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>VLAN Resource  </p></td>
    </tr>
</table>
#### Return Type
[VlanSerializer](#VlanSerializer)

#####**get** `/api/vlans/{pk}/history/`
    _Get Object Changelog_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>VLAN Resource  </p> <p>Get Object Changelog</p></td>
    </tr>
</table>
#### Return Type
[VlanSerializer](#VlanSerializer)


### Models
##### <a name="VlanSerializer">VlanSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>id </td><td>Integer </td></tr><tr><td>number </td><td>Integer </td></tr><tr><td>name </td><td>String </td></tr><tr><td>description </td><td>String </td></tr>
</table>
##### <a name="WriteVlanSerializer">WriteVlanSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>number </td><td>Integer </td></tr><tr><td>name </td><td>String </td></tr><tr><td>description </td><td>String </td></tr>
</table>

## Vrfs
### Methods

#####**get** `/api/vrfs/{pk}/`
    _Vrf Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
</table>
#### Return Type
[VrfSerializer](#VrfSerializer)

#####**put** `/api/vrfs/{pk}/`
    _Vrf Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
    <tr>
        <td>distinguisher</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
</table>
#### Return Type
[VrfSerializer](#VrfSerializer)

#####**delete** `/api/vrfs/{pk}/`
    _Vrf Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
</table>
#### Return Type
[VrfSerializer](#VrfSerializer)

#####**patch** `/api/vrfs/{pk}/`
    _Vrf Resource_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
    <tr>
        <td>distinguisher</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
    <tr>
        <td>description</td>
        <td>String</td>
        <td>optional</td>
        <td>-</td>
        <td><p>Vrf Resource  </p></td>
    </tr>
</table>
#### Return Type
[VrfSerializer](#VrfSerializer)

#####**get** `/api/vrfs/{pk}/history/`
    _Get Object Changelog_
#### Parameters
<table border="1">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
        <th>notes</th>
    </tr>
    <tr>
        <td>pk</td>
        <td>String</td>
        <td>required</td>
        <td>-</td>
        <td><p>Vrf Resource  </p> <p>Get Object Changelog</p></td>
    </tr>
</table>
#### Return Type
[VrfSerializer](#VrfSerializer)


### Models
##### <a name="VrfSerializer">VrfSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>id </td><td>Integer </td></tr><tr><td>distinguisher </td><td>String </td></tr><tr><td>name </td><td>String </td></tr><tr><td>description </td><td>String </td></tr>
</table>
##### <a name="WriteVrfSerializer">WriteVrfSerializer</a>
<table border=1><tr><td>Name</td><td>Datatype</td></tr>
<tr><td>distinguisher </td><td>String </td></tr><tr><td>name </td><td>String </td></tr><tr><td>description </td><td>String </td></tr>
</table>

