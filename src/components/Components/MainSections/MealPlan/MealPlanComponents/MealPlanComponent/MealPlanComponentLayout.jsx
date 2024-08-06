import { expandAction, expandBtnSetProps, editAction, editBtnSetProps, deleteAction, deleteBtnSetProps } from "./MealPlanComponentMethods";
import ActionIcons from '../../../../ReusableComponents/ActionIcons';

const rowActions = {
    expand: {
        setProps: expandBtnSetProps,
        props: {
            hidden: false,
            disabled: false,
        },
        funcs: {
            onClick: (agParams, evtSrc) => expandAction(agParams, evtSrc)
        }
    },
    edit: {
        setProps: editBtnSetProps,
        props: {
            hidden: false,
            disabled: false,
        },
        funcs: {
            onClick: (agParams, evtSrc) => editAction(agParams, evtSrc)
        }
    },
    delete: {
        setProps: deleteBtnSetProps,
        props: {
            hidden: false,
            disabled: false,
        },
        funcs: {
            onClick: (agParams, evtSrc) => deleteAction(agParams, evtSrc)
        }
    },
};