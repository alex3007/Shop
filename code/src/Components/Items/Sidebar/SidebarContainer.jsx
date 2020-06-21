import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {pathAC} from '../../../Redux/sidebar-reducer';

let mapStateToProps = (state) => {

    return {
        trees: state.sidebar.trees
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        newPath: (path) => {

            dispatch( pathAC(path) );
        }
}
};

const SidebarContainer = connect(mapStateToProps,mapDispatchToProps)(Sidebar);

export default SidebarContainer;
