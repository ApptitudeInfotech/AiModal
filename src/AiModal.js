import React from "react";
import PropTypes from 'prop-types';


import AiOverlay from "@aiui/ai-overlay";


/**
 * Minimal Modal React Component.
 *
 * @author [Apptitude Infotech](https://github.com/ApptitudeInfotech)
 */
const AiModal = (props) => {
    const {
        title,
        opened = false,
        size = "md",
        onClose = () => { },
        color = '#ffffff',
        overlayColor = '#e0e0e0',
        onOverlayClick = () => { },
        children
    } = props;


    return (
        <React.Fragment>
            <AiOverlay opened={opened} color={overlayColor} onClose={onOverlayClick} />

            <div title="modal"
                style={{
                    position: `fixed`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    bottom: 0,
                    right: 0,
                    top: 0,
                    left: 0,
                    overflow: `hidden`,
                    padding: `.4rem`,
                    zIndex: 1010,
                    display: (opened ? `flex` : `none`),
                    opacity: (opened ? 1 : 0),
                    cursor: `pointer`,
                }}
                role="dialog"
            >
                <div title="modal-container"
                    style={{
                        background: `${color}`,
                        borderRadius: `.1rem`,
                        boxShadow: `0 .2rem .5rem rgba(48, 55, 66, .3)`,
                        flexDirection: `column`,
                        maxHeight: `75vh`,
                        width: `100%`,
                        display: (opened ? `flex` : `none`),
                        maxWidth: ((size == 'sm') ? `320px` : (size == 'lg') ? `960px` : `640px`),
                        padding: ((size == 'sm') ? `0 .4rem` : `0 .8rem`),
                        boxShadow: ((size == 'lg') ? `none` : `0 .2rem .5rem rgba(48, 55, 66, .3)`),
                        cursor: `default`,
                    }}

                    role="document"
                    tabIndex="-1"
                >
                    <div title="modal-container-header" style={{ padding: `.8rem` }} >
                        <button title="header-close-btn"
                            style={{
                                border: `none`,
                                backgroundColor: `inherit`,
                                padding: `4px`,
                                fontFamily: `inherit`,
                                fontWeight: 500,
                                fontSize: `1rem`,
                                cursor: `pointer`,
                                color: 'inherit',
                                float: `right`,
                            }}
                            type="button"
                            onClick={onClose}
                        >
                            &#10006;
                    </button>
                        <div title="header-title" style={{ fontSize: 18, fontWeight: 500 }}>{title}</div>
                    </div>

                    <div title="modal-container-body"
                        style={{
                            overflowY: `auto`,
                            padding: `.8rem`,
                            position: `relative`
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};

AiModal.propTypes = {
    /**
    * Modal Title 
    */
    title: PropTypes.string,
    /**
    * If true, the Modal is open   
    */
    opened: PropTypes.bool,
    /**
    * Modal size   
    */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
     * Callback fired when the component requests to be closed
     */
    onClose: PropTypes.func,
    /**
    * Callback fired when the Overlay is Clicked
    */
    onOverlayClick: PropTypes.func,
    /**
   * Modal Color
   */
    color: PropTypes.string,
    /**
   * Overlay Color
   */
    overlayColor: PropTypes.string,
    /**
   * Modal children, usually the included sub-components
   * @ignore
   */
    children: PropTypes.node,
    /**
    *@ignore
    */
    className: PropTypes.string,
    /**
     *@ignore
     */
    style: PropTypes.object,
};

AiModal.defaultProps = {
    title: 'Demo Title',
    opened: false,
    size: "md",
    color: "#ffffff",
    overlayColor: "#e0e0e0",
    onClose: () => { },
    onOverlayClick: () => { },
};

export default AiModal;