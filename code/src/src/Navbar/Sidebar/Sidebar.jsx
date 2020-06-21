import React from 'react';
import SidebarPerson from "./SidebarPerson";

const Sidebar = (props) => {


    let sidebarFriends = props.sidebar.sidebar
        .map(friend => <SidebarPerson friend={friend.friend} />);

    return (
<div>
       {sidebarFriends}
</div>
);
}
export default Sidebar;
