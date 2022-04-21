import * as React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Collapse from '@mui/material/Collapse';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring/web.cjs';
import {HiOutlineFolder, HiOutlineFolderAdd, HiOutlineFolderRemove} from "react-icons/hi";

function MinusSquare(props) {
    return (
        <SvgIcon fontSize="inherit" style={{ width: 22, height: 22 }} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <HiOutlineFolderRemove />
        </SvgIcon>
    );
}

function PlusSquare(props) {
    return (
        <SvgIcon fontSize="inherit" style={{ width: 22, height: 22 }} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <HiOutlineFolderAdd/>
        </SvgIcon>
    );
}

function CloseSquare(props) {
    return (
        <SvgIcon
            className="close"
            fontSize="inherit"
            style={{ width: 22, height: 22 }}
            {...props}
        >
            {/* tslint:disable-next-line: max-line-length */}
            <HiOutlineFolder />
        </SvgIcon>
    );
}

function TransitionComponent(props) {
    const style = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(20px,0,0)',
        },
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(${props.in ? 0 : 0}px,0,0)`,
        },
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
};

const StyledTreeItem = styled((props) => (
    <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
            opacity: 1,
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 15,
        paddingLeft: 18,
        borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
}));

 function OurTreeView(){
    return (
        <TreeView
            aria-label="customized"
            defaultExpanded={['1']}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
            sx={{  flexGrow: 1, width:'100%', overflow: 'hidden' }}
        >
            <StyledTreeItem nodeId="1" label="Main">
                <StyledTreeItem nodeId="2" label="Hello" />
                <StyledTreeItem nodeId="3" label="Subtree with children">
                    <StyledTreeItem nodeId="6" label="Hello" />
                    <StyledTreeItem nodeId="7" label="Sub-subtree with children">
                        <StyledTreeItem nodeId="9" label="Child 1" />
                        <StyledTreeItem nodeId="10" label="Child 2" />
                        <StyledTreeItem nodeId="11" label="Child 3" />
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="8" label="Hello" />
                </StyledTreeItem>
                <StyledTreeItem nodeId="4" label="World" />
                <StyledTreeItem nodeId="5" label="Something something" />
            </StyledTreeItem>
        </TreeView>
    );
}
export default OurTreeView